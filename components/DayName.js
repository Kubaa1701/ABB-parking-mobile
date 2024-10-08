import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';

export default function DayName(props) {
  return <Text style={styles.text}>{props.name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        // height: Dimensions.get('window').width / 6,
        width: Dimensions.get('window').width / 6,
        fontSize: 20,
      },
      ios: {
        // height: Dimensions.get('window').width / 8,
        width: Dimensions.get('window').width / 6,
        fontSize: 20,
      },
      default: {
        // height: Dimensions.get('window').width / 20,
        width: Dimensions.get('window').width / 20,
        fontSize: 32,
        margin: 5,
      },
    }),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
