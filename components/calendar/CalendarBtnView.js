import { View, Dimensions } from 'react-native';
import MakeReservationBtn from '@/components/reservation/MakeReservationBtn';

export default function CalendarBtnView(props) {
  return (
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
      <MakeReservationBtn
        displayReservation={props.displayReservation}
        setDisplayReservation={props.setDisplayReservation}
      />
    </View>
  );
}
