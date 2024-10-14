import { View, StyleSheet } from 'react-native';
import { verticalScale } from '@/styles/metrics';

export default function HorizontalLine() {
  return <View style={styles.line}></View>;
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: verticalScale(2),
    borderBottomColor: 'black',
    width: '94%',
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: verticalScale(10),
  },
});
