import { DateTime } from 'luxon';
import formatTimeRelative from './formatTimeRelative';

export default function formatOrderTimeSlot(
  timeSlot?: {
    start: DateTime;
    end: DateTime;
  },
  withDay?: boolean,
) {
  if (!timeSlot) {
    return;
  }

  const startInAM = timeSlot.start.hour < 12;
  const endInAM = timeSlot.end.hour < 12;

  const day = formatTimeRelative(timeSlot.start.toJSDate());

  const timeString =
    timeSlot.start.toFormat(startInAM === endInAM ? 'h:mm' : 't') +
    ' to ' +
    timeSlot.end.toFormat('t');

  return withDay ? day + ' ~ ' + timeString : timeString;
}
