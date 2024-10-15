import { ScrollView } from 'react-native';
import Calendar from '@/components/calendar/Calendar';
import StatusView from '@/components/calendar/StatusView';
import React, { useState } from 'react';
import CalendarBtnView from '@/components/calendar/CalendarBtnView';
import CancelBtn from '@/components/reservation/CancelBtn';
import ConfirmBtn from '@/components/reservation/ConfirmBtn';

export default function Index() {
  const [pickedDates, setPickedDates] = useState([]);
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
      />
      {!displayReservation ? (
        <React.Fragment>
          <StatusView />
          <CalendarBtnView
            displayReservation={displayReservation}
            setDisplayReservation={setDisplayReservation}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CancelBtn
            setDisplayReservation={setDisplayReservation}
            setPickedDates={setPickedDates}
          />
          <ConfirmBtn
            data={pickedDates}
            setDisplayReservation={setDisplayReservation}
            setPickedDates={setPickedDates}
          />
        </React.Fragment>
      )}
    </ScrollView>
  );
}
