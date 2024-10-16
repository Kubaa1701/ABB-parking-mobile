import { moderateScale, verticalScale } from '@/styles/metrics';
import { Text, StyleSheet } from 'react-native';

export default function DayName(props) {
  return <Text style={styles.text}>{props.name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    height: verticalScale(30),
    width: moderateScale(55),
    margin: moderateScale(2),
    fontSize: moderateScale(22),
    textAlign: 'center',
    fontWeight: '500',
  },
});
