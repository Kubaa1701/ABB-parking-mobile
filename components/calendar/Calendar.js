import { View, Text, Dimensions, StyleSheet } from 'react-native';
import CalendarDay from './CalendarDay';
import ReservationDay from '../reservation/ReservationDay';
import { getDaysInMonth, getISODay } from 'date-fns';
import React, { useState, useEffect } from 'react';
import sendData from '@/scripts/sendData';
import Days from './Days';
import { moderateScale, verticalScale } from '@/styles/metrics';
import getCurrentDay from '@/scripts/getCurrentDay';

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

function getCurrentMonthName() {
  const today = new Date();
  return today.toLocaleString('default', { month: 'long' });
}

export default function Calendar(props) {
  const day = createDaysTable();
  const [result, setResult] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    sendData('user/post/receiveReservationDate', {
      id: '3',
      day: '1',
      month: '10',
    }).then((e) => {
      if (e.result) {
        setResult(e.result);
      }
    });
  }, [refresh]);

  function onCancel() {
    setRefresh(!refresh);
  }

  return (
    <View style={styles.mainView}>
      {result ? (
        <View style={styles.view}>
          <Text style={styles.month}>{getCurrentMonthName()}</Text>
          <Days names={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} />
          <Text>
            {day.map((e, index) => (
              <React.Fragment key={index}>
                {!props.displayReservation ? (
                  <CalendarDay
                    key={index}
                    dayOfMonth={e[0]}
                    dayOfWeek={e[1]}
                    lastDayOfMonth={day[day.length - 1][0]}
                    status={result}
                    displayReservation={props.displayReservation}
                    setDisplayReservation={props.setDisplayReservation}
                    setPickedDate={props.setPickedDate}
                    onCancel={onCancel}
                  />
                ) : (
                  <ReservationDay
                    key={e[0]}
                    dayOfMonth={e[0]}
                    dayOfWeek={e[1]}
                    lastDayOfMonth={day[day.length - 1][0]}
                    pickedDates={props.pickedDates}
                    pickedDate={props.pickedDate}
                  />
                )}
              </React.Fragment>
            ))}
          </Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    backgroundColor: '#D9D9D9',
    paddingBottom: verticalScale(5),
  },
  view: {
    margin: 'auto',
    marginTop: verticalScale(20),
  },
  month: {
    textAlign: 'center',
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    marginBottom: verticalScale(12),
  },
});
