import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';
import EmptyDate from '@/components/calendar/EmptyDate';
import { moderateScale } from '@/styles/metrics';

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

  const renderEmptyDates = () => {
    if (dayOfMonth === 1 && dayOfWeek !== 1) {
      return calculateEmptyDates(dayOfMonth, dayOfWeek).map((e, index) => (
        <View key={index}>{e}</View>
      ));
    }
    return null;
  };
  return (
    <React.Fragment>
      {renderEmptyDates()}
      <View>
        <Pressable
          style={styles.dayText}
          disabled={dayOfMonth <= props.today}
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
            console.log(props.pickedDates);
          }}
        >
          <View
            style={[
              styles.day,
              dayOfMonth < Number(props.today) && styles.previousDate,
              picked && styles.picked,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                dayOfMonth === Number(props.today) && styles.today,
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
    borderRadius: 100,
    margin: moderateScale(2),
  },
  dayText: {
    fontSize: moderateScale(24),
    margin: 'auto',
  },
  previousDate: {
    opacity: '40%',
  },
  today: {
    color: '#faf7f0',
  },
  picked: {
    backgroundColor: '#4fabd6',
  },
});
