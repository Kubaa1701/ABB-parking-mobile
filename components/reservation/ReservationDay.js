import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';
import EmptyDate from '@/components/calendar/EmptyDate';
import { moderateScale } from '@/styles/metrics';
import { useState, useEffect } from 'react';
import getCurrentDay from '@/scripts/getCurrentDay';

function calculateEmptyDates(dayOfMonth, dayOfWeek) {
  let lastMonth = [];
  if (dayOfMonth === 1) {
    for (let i = 0; i < 5 - (6 - dayOfWeek); i++) {
      lastMonth.push(<EmptyDate key={i} />);
    }
  }
  return lastMonth;
}

export default function ReservationDay(props) {
  const { dayOfMonth, dayOfWeek } = props;
  const [picked, setPicked] = useState(false);
  let statusLen;

  useEffect(() => {
    if (
      props.pickedDate !== 0 &&
      props.pickedDate === dayOfMonth &&
      !props.pickedDates.includes(props.pickedDate)
    ) {
      props.pickedDates.push(props.pickedDate);
      setPicked(true);
    }
  }, [props.pickedDate]);

  const renderEmptyDates = () => {
    if (dayOfMonth === 1 && dayOfWeek !== 1) {
      return calculateEmptyDates(dayOfMonth, dayOfWeek).map((e, index) => (
        <View key={index}>{e}</View>
      ));
    }
    return null;
  };

  function checkIfReserved() {
    props.status.forEach((e) => {
      if (e.day === dayOfMonth && e.status !== 'Cancelled') {
        statusLen = String(e.status).length;
      }
    });
  }
  checkIfReserved();

  return (
    <React.Fragment>
      {renderEmptyDates()}
      <View>
        <Pressable
          style={styles.dayText}
          disabled={dayOfMonth <= getCurrentDay() || statusLen > 0}
          onPress={() => {
            setPicked(!picked);
            if (!picked) {
              props.pickedDates.push(dayOfMonth);
            } else {
              props.pickedDates.splice(
                props.pickedDates.indexOf(dayOfMonth),
                1
              );
            }
          }}
        >
          <View
            style={[
              styles.day,
              dayOfMonth < getCurrentDay() && styles.previousDate,
              picked && styles.picked,
              statusLen > 0 && styles.reserved,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                dayOfMonth === getCurrentDay() && styles.today,
              ]}
            >
              {dayOfMonth}
            </Text>
          </View>
        </Pressable>
      </View>
      {dayOfWeek === 5 && <Text>{'\n'}</Text>}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  day: {
    height: moderateScale(55),
    width: moderateScale(55),
    borderRadius: moderateScale(100),
    margin: moderateScale(2),
  },
  dayText: {
    fontSize: moderateScale(24),
    margin: 'auto',
  },
  previousDate: {
    opacity: 0.4,
  },
  today: {
    color: '#faf7f0',
  },
  picked: {
    backgroundColor: '#4fabd6',
  },
  reserved: {
    backgroundColor: '#EF8787',
  },
});
