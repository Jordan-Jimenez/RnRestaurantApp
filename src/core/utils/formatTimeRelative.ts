import { formatRelative } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DateTime } from 'luxon';

const formatTimeRelative = (date: Date) => {
  const formatRelativeLocale = {
    lastWeek: "'Last' eeee, LLL dd",
    yesterday: "'Yesterday'",
    today: "'Today'",
    tomorrow: "'Tomorrow'",
    nextWeek: 'eeee, LLL dd',
    other: 'eeee, LLL dd',
  };

  const locale = {
    ...enGB,
    formatRelative: token => formatRelativeLocale[token],
  };

  return date.getFullYear() !== DateTime.local().get('year')
    ? formatRelative(date, DateTime.now().toJSDate(), { locale }) +
        `, ${date.getFullYear().toString()}`
    : formatRelative(date, DateTime.now().toJSDate(), { locale });
};

export default formatTimeRelative;
