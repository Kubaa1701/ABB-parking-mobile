import { View, StyleSheet } from 'react-native';
import MakeReservationBtn from '@/components/reservation/MakeReservationBtn';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@/styles/metrics';

export default function CalendarBtnView(props) {
  return (
    <View style={styles.view}>
      <MakeReservationBtn
        displayReservation={props.displayReservation}
        setDisplayReservation={props.setDisplayReservation}
        setPickedDate={props.setPickedDate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: horizontalScale(200),
    height: verticalScale(60),
    backgroundColor: '#707070',
    borderRadius: moderateScale(16),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '25%',
    position: 'absolute',
    bottom: verticalScale(-100),
  },
});
