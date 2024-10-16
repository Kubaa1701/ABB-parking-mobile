import { Text, Pressable, Dimensions } from 'react-native';

export default function MakeReservationBtn(props) {
  return (
    <Pressable
      onPress={() => {
        props.setDisplayReservation(!props.displayReservation);
        props.setPickedDate(props.day);
      }}
    >
      <Text
        style={{
          fontSize: Dimensions.get('screen').width * 0.05,
          // fontWeight: '400',
          color: '#faf7f0',
        }}
      >
        Make a reservation
      </Text>
    </Pressable>
  );
}
