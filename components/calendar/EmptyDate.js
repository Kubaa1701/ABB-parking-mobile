import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from '@/styles/metrics';

export default function EmptyDate(props) {
  return (
    <View style={styles.emptyDate}>
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyDate: {
    width: moderateScale(55),
    margin: moderateScale(2),
  },
});
