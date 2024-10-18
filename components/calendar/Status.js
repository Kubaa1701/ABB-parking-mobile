import { moderateScale } from '@/styles/metrics';
import { View, Text, StyleSheet } from 'react-native';

export default function Status(props) {
  return (
    <View style={styles.mainView}>
      <View style={[styles.view, { backgroundColor: props.color }]} />
      <Text style={styles.text}>{props.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: 10,
  },
  view: {
    width: moderateScale(34),
    height: moderateScale(34),
    borderRadius: moderateScale(100),
  },
  text: {
    fontSize: moderateScale(17),
    margin: '1%',
  },
});
