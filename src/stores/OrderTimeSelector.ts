import { DateTime } from 'luxon';
import { action, computed, makeAutoObservable, observable } from 'mobx';

import App from './App';
import Store from './Store';

export default class OrderTimeSelector {
  constructor(public store: Store) {
    makeAutoObservable(this);
  }

  @observable
  public selectedDay: 'today' | 'tomorrow' = 'today';

  @action
  public setDay(day: 'today' | 'tomorrow') {
    console.log('received', day);
    this.selectedDay = day;
  }
  @observable
  public selectedPickUpTime?: {
    start: DateTime;
    end: DateTime;
  };

  @action
  public setOrderPickUpTime() {
    if (this.availableSelectedPickUpTime) {
      App.ongoingOrder?.setFulFillmentTimeSlot(
        this.availableSelectedPickUpTime,
      );
    }
  }

  @computed
  public get availableSelectedPickUpTime() {
    if (!this.store?.estimatedPickUpTimeIntervals) {
      return;
    }

    if (!this.selectedPickUpTime) {
      return this.store?.nextEstimatedPickUpTimeInterval;
    }

    // does store have time period available
    if (
      this.store?.listOfEstimatedPickUpTimeIntervals.filter(
        item => item === this.selectedPickUpTime!,
      )
    ) {
      return this.selectedPickUpTime;
    }

    // get nearest time period to desired
    const sortedByoNearestTimeInterval =
      this.store.listOfEstimatedPickUpTimeIntervals.sort(
        (a, b) =>
          this.selectedPickUpTime!.start.diff(a.start).milliseconds -
          this.selectedPickUpTime!.start.diff(b.start).milliseconds,
      );

    return sortedByoNearestTimeInterval[0];
  }

  @action
  public selectPickUpTime(t: string) {
    this.selectedPickUpTime = {
      start: DateTime.fromISO(JSON.parse(t).start),
      end: DateTime.fromISO(JSON.parse(t).end),
    };
  }

  @computed
  public get orderDays() {
    if (!this.store.estimatedPickUpTimeIntervals) {
      return [];
    }

    return this.store.estimatedPickUpTimeIntervals.today.length > 0
      ? this.store.estimatedPickUpTimeIntervals.tomorrow.length > 0
        ? [
            { label: 'Today', value: 'today' },
            { label: 'Tomorrow', value: 'tomorrow' },
          ]
        : [{ label: 'Today', value: 'today' }]
      : this.store.estimatedPickUpTimeIntervals.tomorrow.length > 0
      ? [{ label: 'Tomorrow', value: 'tomorrow' }]
      : [];
  }

  @computed
  public get timeSlots() {
    if (
      !this.store.estimatedPickUpTimeIntervals ||
      !this.store.estimatedPickUpTimeIntervals[this.selectedDay] ||
      this.store.estimatedPickUpTimeIntervals[this.selectedDay].length < 1
    ) {
      return [];
    }

    return this.store.estimatedPickUpTimeIntervals[this.selectedDay];
  }
}
