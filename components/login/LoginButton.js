import {
  View,
  Text,
  Pressable,
  Linking,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import getLoginLink from '@/components/login/getLoginLink';

export default function LoginButton(props) {
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.button}
        onPress={() => {
          getLoginLink().then((result) => {
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
    width: Dimensions.get('window').width,
  },
  buttonText: {
    fontSize: 50,
    textAlign: 'center',
    margin: 'auto',
  },
  button: {
    width: Dimensions.get('window').width / 1.5,
    margin: 'auto',
    backgroundColor: '#f5f5f5',
    padding: 40,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  errorMessage: {
    margin: 'auto',
    marginTop: 60,
    color: 'red',
    fontSize: 45,
  },
  img: {
    resizeMode: 'center',
    margin: 'auto',
  },
});
