import { View, Pressable, Text } from 'react-native';
import sendData from '@/scripts/sendData';
import getCurrentMonth from '@/scripts/getCurrentMonth';
import getCurrentDay from '@/scripts/getCurrentDay';

export default function ConfirmBtn(props) {
  return (
    <Pressable
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
        <Text>Confirm</Text>
      </View>
    </Pressable>
  );
}
