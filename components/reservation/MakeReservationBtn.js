import { moderateScale, verticalScale } from '@/styles/metrics';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function MakeReservationBtn(props) {
  return (
    <Pressable
      onPress={() => {
        props.setDisplayReservation(!props.displayReservation);
        props.setPickedDate(props.day);
      }}
    >
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>Make a reservation</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    height: verticalScale(50),
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: moderateScale(22),
    margin: 'auto',
    color: '#faf7f0',
  },
});
