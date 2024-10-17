import { View, Pressable, Text, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale } from '@/styles/metrics';

export default function CancelBtn(props) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        props.setDisplayReservation(false);
        props.setPickedDates([]);
        props.setPickedDate();
      }}
    >
      <View>
        <Text style={styles.buttonText}>Cancel</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: horizontalScale(150),
    margin: moderateScale(14),
  },
  buttonText: {
    fontSize: moderateScale(22),
    backgroundColor: '#707070',
    padding: moderateScale(8),
    borderRadius: moderateScale(12),
    textAlign: 'center',
    color: '#faf7f0',
  },
});
