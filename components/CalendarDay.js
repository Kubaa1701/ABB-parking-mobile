import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import EmptyDate from './EmptyDate';

export default function CalendarDay(props) {
  let lastMonth = [];
  let nextMonth = [];
  if (props.dayOfMonth === 1) {
    for (let i = 0; i < 5 - (6 - props.dayOfWeek); i++) {
      lastMonth.push(<EmptyDate key={i} />);
    }
  }

  return (
    <>
      {props.dayOfMonth === 1 && props.dayOfWeek != 1
        ? lastMonth.map((e) => e)
        : ''}
      <View>
        <View style={styles.day}>
          <Text style={{ margin: 'auto' }}>{props.dayOfMonth}</Text>
        </View>
      </View>
      {props.dayOfWeek === 5 ? '\n' : ''}
    </>
  );
}

const styles = StyleSheet.create({
  day: {
    ...Platform.select({
      android: {
        height: Dimensions.get('window').width / 6,
        width: Dimensions.get('window').width / 6,
        // fontSize: 20,
      },
      ios: {
        height: Dimensions.get('window').width / 8,
        width: Dimensions.get('window').width / 8,
        fontSize: 20,
      },
      default: {
        height: Dimensions.get('window').width / 20,
        width: Dimensions.get('window').width / 20,
        fontSize: 32,
        margin: 5,
      },
    }),
    borderRadius: 10,
    // backgroundColor: 'lightgreen',
  },
});
