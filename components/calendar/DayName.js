import { Text, StyleSheet, Platform, Dimensions } from 'react-native';

export default function DayName(props) {
  return <Text style={styles.text}>{props.name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        width: Dimensions.get('window').width / 6,
        fontSize: 20,
      },
      ios: {
        width: Dimensions.get('window').width / 6,
        fontSize: 20,
      },
      default: {
        width: Dimensions.get('window').width / 6,
        fontSize: 30,
        margin: 5,
      },
    }),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
