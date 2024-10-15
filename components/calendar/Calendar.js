import { View, Text, Dimensions } from 'react-native';
import CalendarDay from './CalendarDay';
import { getDaysInMonth, getISODay } from 'date-fns';
import { useState, useEffect } from 'react';
import sendData from '@/scripts/sendData';
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

function getCurrentDay() {
  const today = new Date();
  return today.getDate();
}

function getCurrentMonthName() {
  const today = new Date();
  return today.toLocaleString('default', { month: 'long' });
}

export default function Calendar() {
  const day = createDaysTable();
  const [result, setResult] = useState([]);
  useEffect(() => {
    sendData('user/post/receiveReservationDate', {
      id: '1',
      day: '1',
      month: '12',
    }).then((e) => {
      if (e.result) {
        setResult(e.result);
      }
    });
  }, []);
  return (
    <View
      style={{ width: '100%', backgroundColor: '#D9D9D9', paddingBottom: 10 }}
    >
      {result ? (
        <View style={{ margin: 'auto', marginTop: 20 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Dimensions.get('window').width * 0.08,
              fontWeight: 'bold',
            }}
          >
            {getCurrentMonthName()}
          </Text>
          <Days names={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} />
          <Text>
            {day.map((e) => (
              <CalendarDay
                key={e[0]}
                dayOfMonth={e[0]}
                dayOfWeek={e[1]}
                lastDayOfMonth={day[day.length - 1][0]}
                today={getCurrentDay()}
                status={result}
              />
            ))}
          </Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
