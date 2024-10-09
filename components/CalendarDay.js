import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { useState } from 'react';
import React from 'react';
import EmptyDate from './EmptyDate';
import DayModal from './DayModal';

function calculateEmptyDates(dayOfMonth, dayOfWeek) {
  let lastMonth = [];
  if (dayOfMonth === 1) {
    for (let i = 0; i < 5 - (6 - dayOfWeek); i++) {
      lastMonth.push(<EmptyDate key={i} />);
    }
  }
  return lastMonth;
}

export default function CalendarDay(props) {
  const { dayOfMonth, dayOfWeek } = props;
  const [modalVisible, setModalVisible] = useState(false);

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
          onPress={() => {
            console.log(dayOfMonth);
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.day}>
            <Text style={styles.dayText}>{dayOfMonth}</Text>
          </View>
        </Pressable>
        <DayModal visible={modalVisible} />
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
        height: Dimensions.get('window').width / 20,
        width: Dimensions.get('window').width / 20,
        margin: 5,
      },
    }),
    borderRadius: 10,
  },
  dayText: {
    ...Platform.select({
      android: {
        fontSize: 20,
      },
      ios: {
        fontSize: 20,
      },
      default: {
        fontSize: 30,
      },
    }),
    margin: 'auto',
  },
});
