import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import EmptyDate from './EmptyDate';

function calculateEmptyDates(dayOfMonth, dayOfWeek) {
  let lastMonth = [];
  if (dayOfMonth === 1) {
    for (let i = 0; i < 5 - (6 - dayOfWeek); i++) {
      lastMonth.push(<EmptyDate key={i} />);
    }
  }
  return lastMonth;
}

export default function CalendarDay(props) {
  return (
    <>
      {props.dayOfMonth === 1 && props.dayOfWeek != 1
        ? calculateEmptyDates(props.dayOfMonth, props.dayOfWeek).map((e) => e)
        : ''}
      <View>
        <View style={styles.day}>
          <Pressable style={styles.dayText}>
            <Text style={styles.dayText}>{props.dayOfMonth}</Text>
          </Pressable>
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
      },
      ios: {
        height: Dimensions.get('window').width / 8,
        width: Dimensions.get('window').width / 8,
      },
      default: {
        height: Dimensions.get('window').width / 20,
        width: Dimensions.get('window').width / 20,
        margin: 5,
      },
    }),
    borderRadius: 10,
  },
  dayText: {
    ...Platform.select({
      android: {
        fontSize: 20,
      },
      ios: {
        fontSize: 20,
      },
      default: {
        fontSize: 34,
      },
    }),
    margin: 'auto',
  },
});
