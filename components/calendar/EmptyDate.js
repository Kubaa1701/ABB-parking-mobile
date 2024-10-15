import { horizontalScale } from '@/styles/metrics';
import { View, Text, StyleSheet } from 'react-native';

export default function EmptyDate(props) {
  return (
    <View style={styles.emptyDate}>
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyDate: {
    width: horizontalScale(70),
  },
});
