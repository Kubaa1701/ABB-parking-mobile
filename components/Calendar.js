import { View, Text } from 'react-native';
import CalendarDay from './CalendarDay';
import { date } from 'date-fns';
import { format, getDaysInMonth, getISODay } from 'date-fns';

function daysTable() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const numDays = getDaysInMonth(today);
  const weekdayTab = [];

  for (let i = 0; i < numDays; i++) {
    const currentDate = new Date(year, month - 1, i + 1);
    const weekday = getISODay(currentDate);
    if (weekday === 6 || weekday === 7) {
      continue;
    } else {
      weekdayTab.push([i + 1, weekday]);
    }
  }
  return weekdayTab;
}

export default function Calendar() {
  let day = daysTable();
  return (
    <View style={{ margin: 'auto' }}>
      <Text>
        {day.map((e) => (
          <CalendarDay
            key={e[0]}
            dayOfMonth={e[0]}
            dayOfWeek={e[1]}
            lastDayOfMonth={day[day.length - 1][0]}
          />
        ))}
      </Text>
    </View>
  );
}
