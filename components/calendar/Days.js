import DayName from './DayName';
import { View, StyleSheet } from 'react-native';

export default function Days(props) {
  return (
    <View style={styles.view}>
      {props.names.map((e) => (
        <DayName name={e} key={e} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
  },
});
