import { ScrollView } from 'react-native';
import Calendar from '@/components/calendar/Calendar';
import MakeReservationBtn from '@/components/reservation/MakeReservationBtn';
import Status from '@/components/calendar/Status';

export default function Index() {
  return (
    <ScrollView
      style={{
        backgroundColor: '#E9E9E9',
      }}
    >
      <Calendar />
      <Status />
      <Status />
      <Status />
      <MakeReservationBtn />
    </ScrollView>
  );
}
