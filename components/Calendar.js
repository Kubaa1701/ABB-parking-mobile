import { View, Text } from 'react-native';
import CalendarDay from './CalendarDay';
import { date, format, getDaysInMonth, getISODay } from 'date-fns';
import Days from './Days';
function createDaysTable() {
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
  let day = createDaysTable();
  return (
    <View style={{ width: '100%', backgroundColor: '#D9D9D9' }}>
      <View style={{ margin: 'auto', marginTop: 20 }}>
        {/* <View style={{ display: 'flex', flexDirection: 'row' }}>
        <DayName name="Mon" />
        <DayName name="Tue" />
        <DayName name="Wed" />
        <DayName name="Thu" />
        <DayName name="Fri" />
      </View> */}
        <Days names={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} />
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
    </View>
  );
}
