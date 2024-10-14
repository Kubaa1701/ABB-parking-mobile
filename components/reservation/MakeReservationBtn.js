import { View, Text, Pressable } from 'react-native';

export default function MakeReservationBtn() {
  return (
    <View
      style={{
        width: '50%',
        backgroundColor: '#707070',
        height: '12%',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: '25%',
        bottom: 0,
      }}
    >
      <Pressable>
        <Text style={{ fontSize: 20, fontWeight: '400', color: '#faf7f0' }}>
          Make a reservation
        </Text>
      </Pressable>
    </View>
  );
}
