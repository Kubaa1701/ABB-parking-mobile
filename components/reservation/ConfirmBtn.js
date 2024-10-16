import { View, Pressable, Text, StyleSheet } from 'react-native';
import sendData from '@/scripts/sendData';
import getCurrentMonth from '@/scripts/getCurrentMonth';
import getCurrentDay from '@/scripts/getCurrentDay';
import { horizontalScale, moderateScale } from '@/styles/metrics';

export default function ConfirmBtn(props) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        sendData('user/post/receiveReservationData', {
          day: getCurrentDay(),
          month: getCurrentMonth(),
          user_id: 3,
          dates: props.data,
        }).then(() => props.setDisplayReservation(false));
        props.setPickedDates([]);
      }}
    >
      <View>
        <Text style={styles.buttonText}>Confirm</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: horizontalScale(150),
    margin: moderateScale(14),
  },
  buttonText: {
    fontSize: moderateScale(22),
    backgroundColor: '#707070',
    padding: moderateScale(8),
    borderRadius: moderateScale(12),
    textAlign: 'center',
    color: '#faf7f0',
  },
});
