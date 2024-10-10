import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

export default function EmptyDate(props) {
  return (
    <View style={styles.emptyDate}>
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyDate: {
    ...Platform.select({
      android: {
        width: Dimensions.get('window').width / 6,
      },
      ios: {
        width: Dimensions.get('window').width / 8,
      },
      default: {
        width: Dimensions.get('window').width / 20 + 10,
      },
    }),
  },
});
