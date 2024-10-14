import { View, Text } from 'react-native-web';

export default function Status() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', margin: 5 }}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 100,
          backgroundColor: 'black',
        }}
      />
      <Text style={{ fontSize: 24, margin: 5 }}>status</Text>
    </View>
  );
}
