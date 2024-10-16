import { Pressable, Text } from 'react-native';
import sendData from '@/scripts/sendData';
import getCurrentMonth from '@/scripts/getCurrentMonth';

export default function CancelReservationBtn(props) {
  return (
    <Pressable
      style={{ backgroundColor: 'grey' }}
      onPress={() => {
        sendData('user/post/cancelReservation', {
          user_id: '3',
          day: props.day,
          month: getCurrentMonth(),
        });
        props.onCancel();
      }}
    >
      <Text style={{ textAlign: 'center' }}>Cancel</Text>
    </Pressable>
  );
}
