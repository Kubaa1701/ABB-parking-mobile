import { ScrollView } from 'react-native';
import Calendar from '@/components/calendar/Calendar';
import StatusView from '@/components/calendar/StatusView';
import React, { useState } from 'react';
import CalendarBtnView from '@/components/calendar/CalendarBtnView';

export default function Index() {
  const [displayReservation, setDisplayReservation] = useState(false);
  return (
    <ScrollView
      style={{
        backgroundColor: '#E9E9E9',
      }}
    >
      <Calendar
        displayReservation={displayReservation}
        setDisplayReservation={setDisplayReservation}
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
        ''
      )}
    </ScrollView>
  );
}
