import getDistance from 'geolib/es/getDistance';
import { DateTime } from 'luxon';
import { computed, makeAutoObservable } from 'mobx';

import generatePotentialOrderPickupIntervals from '../core/utils/generatePotentialOrderPickupIntervals';
import App from './App';

export default class Store {
  constructor(public storeDetails: StoreDetails) {
    makeAutoObservable(this);
  }

  private ESTIMATED_ORDER_PICKUP_INTERVAL = 15;

  @computed
  public get distanceFromUserDevice() {
    if (
      !App.deviceLocation ||
      !this.storeDetails.coordinates ||
      !this.storeDetails.coordinates.latitude ||
      !this.storeDetails.coordinates.longitude
    ) {
      return;
    }

    return getDistance(App.deviceLocation, {
      longitude: this.storeDetails.coordinates.longitude,
      latitude: this.storeDetails.coordinates.latitude,
    });
  }

  @computed
  public get daysTilSoonestPickUp() {
    let i = 0;

    while (i < 8) {
      const d = DateTime.local().startOf('day').plus({ days: i });

      const orderTimes = this.getDaysRemainingPickUpTimeIntervals(d);

      if (orderTimes && orderTimes.length > 0) {
        break;
      }

      i++;
    }

    if (i === 7) {
      return;
    }

    return i;
  }

  @computed
  public get estimatedPickUpTimeIntervals() {
    if (!this.storeDetails.businessHours) {
      return;
    }

    const todaysRemaining = this.getDaysRemainingPickUpTimeIntervals(
      DateTime.local(),
    );

    const tmwsTimeSlots = this.getDaysRemainingPickUpTimeIntervals(
      DateTime.local().startOf('day').plus({ days: 1 }),
    );

    if (!todaysRemaining && !tmwsTimeSlots) {
      return;
    }

    return {
      today: todaysRemaining || [],
      tomorrow: tmwsTimeSlots || [],
    };
  }

  @computed
  public get listOfEstimatedPickUpTimeIntervals() {
    return [
      ...(this.estimatedPickUpTimeIntervals?.today || []),
      ...(this.estimatedPickUpTimeIntervals?.tomorrow || []),
    ];
  }

  @computed
  public get nextEstimatedPickUpTimeInterval() {
    return (
      this.estimatedPickUpTimeIntervals?.today[0] ||
      this.estimatedPickUpTimeIntervals?.tomorrow[0] ||
      undefined
    );
  }

  private getDaysRemainingPickUpTimeIntervals(date: DateTime) {
    const opZonesForDate = this.storeDetails.businessHours?.filter(
      hours =>
        hours.dayOfWeek?.toLowerCase() === date.weekdayShort.toLowerCase(),
    );

    if (!opZonesForDate) {
      return;
    }

    const opZoneDateTimes = opZonesForDate
      .map(hours => {
        return this.convertTimeZoneStringsToDateTimes(date, hours);
      })
      .filter(item => item && item.start && item.end);

    if (!opZoneDateTimes || opZoneDateTimes.length < 1) {
      return;
    }

    const potentialTimeSlots = generatePotentialOrderPickupIntervals(
      this.ESTIMATED_ORDER_PICKUP_INTERVAL,
      date,
    );

    const daysOpeningTime = opZoneDateTimes.sort(
      (a, b) => a!.start!.hour - b!.start!.hour,
    )[0]!.start;

    const earliestEstimatedPickupTime =
      date > daysOpeningTime
        ? date.startOf('hour').plus({
            minutes:
              Math.ceil(date.minute / this.ESTIMATED_ORDER_PICKUP_INTERVAL) *
              this.ESTIMATED_ORDER_PICKUP_INTERVAL,
          })
        : daysOpeningTime;

    return opZoneDateTimes
      .map(zone =>
        potentialTimeSlots.filter(
          slots =>
            slots.end <= zone!.end &&
            slots.start >= earliestEstimatedPickupTime,
        ),
      )
      .flat();
  }

  private convertTimeZoneStringsToDateTimes(
    date: DateTime,
    operatingTimeZone: OperationTimeZone,
  ) {
    if (!operatingTimeZone.startLocalTime || !operatingTimeZone.endLocalTime) {
      return;
    }

    let startTime = this.convertTimeStringToNumbers(
      operatingTimeZone.startLocalTime,
    );
    let endTime = this.convertTimeStringToNumbers(
      operatingTimeZone.endLocalTime,
    );

    let start = date
      .startOf('day')
      .plus({ hours: startTime.hour, minutes: startTime.min });
    let end = date
      .startOf('day')
      .plus({ hours: endTime.hour, minutes: endTime.min });

    return {
      start,
      end,
    };
  }

  private convertTimeStringToNumbers(timeString: string) {
    const time = timeString.split(':');

    return {
      hour: parseInt(time[0].trim(), 10),
      min: parseInt(time[1].trim(), 10),
    };
  }
}
