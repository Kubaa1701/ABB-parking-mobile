import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Calendar from '@/components/calendar/Calendar';
import StatusView from '@/components/calendar/StatusView';
import CalendarBtnView from '@/components/calendar/CalendarBtnView';
import CancelBtn from '@/components/reservation/CancelBtn';
import ConfirmBtn from '@/components/reservation/ConfirmBtn';
import { verticalScale } from '@/styles/metrics';
import MakeReservationInfo from '@/components/reservation/MakeReservationInfo';

export default function Index() {
  const [pickedDates, setPickedDates] = useState([]);
  const [pickedDate, setPickedDate] = useState();
  const [displayReservation, setDisplayReservation] = useState(false);
  return (
    <ScrollView
      style={{
        backgroundColor: '#E9E9E9',
      }}
    >
      <Calendar
        key={displayReservation ? 'reservation' : 'calendar'}
        displayReservation={displayReservation}
        setDisplayReservation={setDisplayReservation}
        pickedDates={pickedDates}
        pickedDate={pickedDate}
        setPickedDate={setPickedDate}
      />
      {!displayReservation ? (
        <React.Fragment>
          <StatusView />
          <CalendarBtnView
            displayReservation={displayReservation}
            setDisplayReservation={setDisplayReservation}
            setPickedDate={setPickedDate}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <MakeReservationInfo />
          <View style={styles.buttonView}>
            <ConfirmBtn
              data={pickedDates}
              setDisplayReservation={setDisplayReservation}
              setPickedDates={setPickedDates}
            />
            <CancelBtn
              setDisplayReservation={setDisplayReservation}
              setPickedDates={setPickedDates}
              setPickedDate={setPickedDate}
            />
          </View>
        </React.Fragment>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    height: verticalScale(50),
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
});
