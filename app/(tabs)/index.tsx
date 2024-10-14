import { ScrollView, View, Dimensions } from 'react-native';
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
      <View style={{ marginTop: '5%' }}>
        <Status
          color={'#63cf79'}
          status={'Approved'}
        />
        <Status
          color={'#e8c354'}
          status={'Pending'}
        />
        <Status
          color={'#EF8787'}
          status={'Rejected'}
        />
      </View>
      <View
        style={{
          width: '50%',
          backgroundColor: '#707070',
          height: '12%',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          left: '25%',
          position: 'absolute',
          bottom: -Dimensions.get('window').height / 6,
        }}
      >
        <MakeReservationBtn />
      </View>
    </ScrollView>
  );
}
