import { View, Text, Pressable, StyleSheet } from 'react-native';
import getData from '@/scripts/getData';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@/styles/metrics';

export default function ContinueButton(props) {
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.button}
        onPress={() => {
          getData('user/oauth/findUser').then((result) => {
            props.setIsLoggedIn(result['isLoggedIn']);
            if (!result['isLoggedIn']) {
              props.setRedirected(false);
              props.showErrorMsg(true);
            }
          });
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 'auto',
  },
  buttonText: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    margin: 'auto',
  },
  button: {
    width: horizontalScale(200),
    height: verticalScale(75),
    margin: 'auto',
    backgroundColor: '#f5f5f5',
    padding: moderateScale(20),
    borderRadius: moderateScale(15),
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});
