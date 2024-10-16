import { moderateScale } from '@/styles/metrics';
import { Text, Pressable, Dimensions, StyleSheet } from 'react-native';

export default function MakeReservationBtn(props) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => props.setDisplayReservation(!props.displayReservation)}
    >
      <Text style={styles.text}>Make a reservation</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: moderateScale(20),
    color: '#faf7f0',
    margin: 'auto',
  },
});
