import { View, StyleSheet, Dimensions } from 'react-native';
import UserEmail from './UserEmail';
import NotificationSwitch from './NotificationSwitch';
import HorizontalLine from './HorizontalLine';
import LogOutButton from './LogOutButton';
import { moderateScale, verticalScale } from '@/styles/metrics';

export default function Settings() {
  return (
    <View style={styles.view}>
      <UserEmail />
      <HorizontalLine />
      <NotificationSwitch />
      <View style={styles.lineView}>
        <HorizontalLine />
      </View>
      <LogOutButton />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: moderateScale(10),
  },
  lineView: {
    width: Dimensions.get('window').width - moderateScale(20),
    marginTop: verticalScale(20),
    // bottom: moderateScale(95),
    // position: 'fixed',
  },
});
