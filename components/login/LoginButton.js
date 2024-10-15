import {
  View,
  Text,
  Pressable,
  Linking,
  StyleSheet,
  Image,
} from 'react-native';
import getData from '@/scripts/getData';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@/styles/metrics';

export default function LoginButton(props) {
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.button}
        onPress={() => {
          getData('user/oauth/getLoginLink').then((result) => {
            Linking.openURL(result['link']);
            props.setRedirected(true);
          });
        }}
      >
        <Image
          style={styles.img}
          source={require('@/assets/images/microsoft_logo.png')}
        ></Image>
        <Text style={styles.buttonText}>Log in with</Text>
      </Pressable>
      {props.errorMsg ? (
        <Text style={styles.errorMessage}>
          We had trouble signing you in. Try again.
        </Text>
      ) : (
        <Text></Text>
      )}
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
    width: horizontalScale(275),
    height: verticalScale(100),
    margin: 'auto',
    backgroundColor: '#f5f5f5',
    padding: moderateScale(20),
    borderRadius: moderateScale(15),
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  errorMessage: {
    margin: 'auto',
    marginTop: verticalScale(15),
    color: 'red',
    fontSize: moderateScale(18),
  },
  img: {
    maxWidth: horizontalScale(110),
    resizeMode: 'center',
    margin: 'auto',
  },
});
