import { DateTime } from 'luxon';

export default function generatePotentialOrderPickupIntervals(
  interval: number,
  date: DateTime,
) {
  const dayStart = date.startOf('day');

  // minutes in a day / interval time
  const numOfInts = 1440 / interval;

  let i = 0;

  let intervals = [];

  while (i < numOfInts) {
    intervals.push({
      start: dayStart.plus({ minutes: i * interval }),
      end: dayStart.plus({ minutes: (i + 1) * interval }),
    });

    i++;
  }

  return intervals;
}
