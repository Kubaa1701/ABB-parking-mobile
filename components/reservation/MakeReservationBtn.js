import { moderateScale } from '@/styles/metrics';
import { Text, Pressable, StyleSheet } from 'react-native';

export default function MakeReservationBtn(props) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        props.setDisplayReservation(!props.displayReservation);
        props.setPickedDate(props.day);
      }}
    >
      <Text style={styles.buttonText}>Make a reservation</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: '100%',
    width: '100%',
  },
  buttonText: {
    fontSize: moderateScale(20),
    color: '#faf7f0',
    margin: 'auto',
  },
});
