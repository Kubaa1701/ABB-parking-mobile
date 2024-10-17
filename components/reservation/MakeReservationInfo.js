import { View, Text, StyleSheet } from 'react-native';
import Status from '@/components/calendar/Status';
import { moderateScale, verticalScale } from '@/styles/metrics';

export default function MakeReservationInfo() {
  return (
    <View style={styles.view}>
      <Status
        color={'#4fabd6'}
        status={'Selected'}
      />
      <Status
        color={'#EF8787'}
        status={'Reserved'}
      />
      <Text style={styles.text}>Choose days to make a reservation for</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: moderateScale(10),
  },
  text: {
    fontSize: moderateScale(18),
    paddingTop: verticalScale(20),
    margin: 'auto',
  },
});
