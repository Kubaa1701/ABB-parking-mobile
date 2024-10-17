import { Pressable, Text, View, StyleSheet } from 'react-native';
import sendData from '@/scripts/sendData';
import getCurrentMonth from '@/scripts/getCurrentMonth';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@/styles/metrics';

export default function CancelReservationBtn(props) {
  return (
    <Pressable
      onPress={() => {
        sendData('user/post/cancelReservation', {
          user_id: '1',
          day: props.day,
          month: getCurrentMonth(),
        }).then(() => props.onCancel());
      }}
    >
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>Cancel</Text>
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
