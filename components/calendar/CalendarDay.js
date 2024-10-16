import { View, Pressable, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import EmptyDate from './EmptyDate';
import DayModal from './DayModal';
import getCurrentDay from '@/scripts/getCurrnetDay';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@/styles/metrics';

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
          disabled={dayOfMonth < getCurrentDay()}
          onPress={() => {
            setModalVisible(!modalVisible);
            props.setPickedDate(dayOfMonth);
          }}
        >
          <View
            style={[
              styles.day,
              statusName === 'Approved' && styles.approved,
              statusName === 'Pending' && styles.pending,
              statusName === 'Rejected' && styles.rejected,
              dayOfMonth < getCurrentDay() && styles.previousDate,
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
        <DayModal
          visible={modalVisible}
          setVisible={setModalVisible}
          status={statusName}
          dayOfMonth={dayOfMonth}
          displayReservation={props.displayReservation}
          setDisplayReservation={props.setDisplayReservation}
          onCancel={props.onCancel}
          setPickedDate={props.setPickedDate}
        />
      </View>
      {dayOfWeek === 5 && <Text>{'\n'}</Text>}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  day: {
    height: verticalScale(70),
    width: horizontalScale(70),
    borderRadius: 100,
  },
  dayText: {
    fontSize: moderateScale(22),
    margin: 'auto',
  },
  approved: {
    backgroundColor: '#63cf79',
  },
  pending: {
    backgroundColor: '#e8c354',
  },
  rejected: {
    backgroundColor: '#EF8787',
  },
  previousDate: {
    opacity: '40%',
  },
  today: {
    color: '#faf7f0',
  },
});
