import { Pressable, Text, StyleSheet } from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '@/styles/metrics';
import getData from '@/scripts/getData';

export default function LogOutButton() {
  return (
    <>
      <Pressable
        style={styles.button}
        onPress={() => {
          getData('user/oauth/getLogoutLink');
        }}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: verticalScale(50),
    width: horizontalScale(30),
    marginLeft: horizontalScale(20),
    marginRight: horizontalScale(20),
  },
  buttonText: {
    fontSize: moderateScale(20),
    color: 'red',
    fontWeight: 'bold',
    width: horizontalScale(100),
  },
});
