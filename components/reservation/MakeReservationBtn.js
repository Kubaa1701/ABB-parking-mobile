import { View, Text, Pressable, Dimensions } from 'react-native';

export default function MakeReservationBtn() {
  return (
    <Pressable>
      <Text
        style={{
          fontSize: Dimensions.get('window').width * 0.05,
          fontWeight: '400',
          color: '#faf7f0',
        }}
      >
        Make a reservation
      </Text>
    </Pressable>
  );
}
