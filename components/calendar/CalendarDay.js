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
  let statusName = '';
  const renderEmptyDates = () => {
    if (dayOfMonth === 1 && dayOfWeek !== 1) {
      return calculateEmptyDates(dayOfMonth, dayOfWeek).map((e, index) => (
        <View key={index}>{e}</View>
      ));
    }
    return null;
  };
  function checkReservationStatus() {
    props.status.forEach((e) => {
      if (e.day === dayOfMonth) {
        statusName = e.status;
      }
    });
  }
  checkReservationStatus();
  return (
    <React.Fragment>
      {renderEmptyDates()}
      <View>
        <Pressable
          style={styles.dayText}
          disabled={dayOfMonth < props.today}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={[
              styles.day,
              statusName === 'Potwierdzony' && styles.potwierdzony,
              statusName === 'Oczekujący' && styles.oczekujacy,
              dayOfMonth < Number(props.today) && styles.previousDate,
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
        <DayModal
          visible={modalVisible}
          setVisible={setModalVisible}
          status={statusName}
          dayOfMonth={dayOfMonth}
        />
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
  //TODO: fontSize dependent on window width
  dayText: {
    ...Platform.select({
      android: {
        fontSize: 20,
      },
      ios: {
        fontSize: 20,
      },
      default: {
        fontSize: Dimensions.get('window').width * 0.05,
      },
    }),
    margin: 'auto',
  },
  potwierdzony: {
    backgroundColor: '#63cf79',
  },
  oczekujacy: {
    backgroundColor: '#e8c354',
  },
  previousDate: {
    opacity: '40%',
  },
  today: {
    color: '#faf7f0',
  },
});
