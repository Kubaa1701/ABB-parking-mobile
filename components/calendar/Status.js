import { View, Text, Dimensions } from 'react-native-web';

export default function Status(props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft: 10,
      }}
    >
      <View
        style={{
          width: Dimensions.get('window').width * 0.08,
          height: Dimensions.get('window').width * 0.08,
          borderRadius: 100,
          backgroundColor: props.color,
        }}
      />
      <Text
        style={{
          fontSize: Dimensions.get('window').width * 0.04,
          margin: '1%',
        }}
      >
        {props.status}
      </Text>
    </View>
  );
}
