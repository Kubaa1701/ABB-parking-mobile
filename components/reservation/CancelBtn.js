import { View, Pressable, Text } from 'react-native';

export default function CancelBtn(props) {
  return (
    <Pressable
      onPress={() => {
        props.setDisplayReservation(false);
        props.setPickedDates([]);
      }}
    >
      <View>
        <Text>Cancel</Text>
      </View>
    </Pressable>
  );
}
