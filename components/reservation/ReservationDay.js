import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import EmptyDate from '../calendar/EmptyDate';
import getCurrentDay from '@/scripts/getCurrnetDay';

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

  return (
    <React.Fragment>
      {renderEmptyDates()}
      <View>
        <Pressable
          style={styles.dayText}
          disabled={dayOfMonth <= getCurrentDay()}
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
              dayOfMonth < getCurrentDay() && styles.previousDate,
              picked && styles.picked,
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
    ...Platform.select({
      android: {
        height: Dimensions.get('window').width / 6,
        width: Dimensions.get('window').width / 6,
      },
      ios: {
        height: Dimensions.get('window').width / 8,
        width: Dimensions.get('window').width / 8,
      },
      default: {
        height: Dimensions.get('window').width / 7,
        width: Dimensions.get('window').width / 7,
        margin: 5,
      },
    }),
    borderRadius: 100,
  },
  dayText: {
    ...Platform.select({
      android: {
        fontSize: Dimensions.get('window').width * 0.05,
      },
      ios: {
        fontSize: Dimensions.get('window').width * 0.05,
      },
      default: {
        fontSize: Dimensions.get('window').width * 0.05,
      },
    }),
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
