import { View, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import ContinueButton from '@/components/login/ContinueButton';
import LoginButton from '@/components/login/LoginButton';

export default function LoginScreen(props) {
  const [redirected, setRedirected] = useState(false);
  const [errorMsg, showErrorMsg] = useState(false);
  return (
    <View style={styles.view}>
      {redirected ? (
        <ContinueButton
          setIsLoggedIn={props.setIsLoggedIn}
          setRedirected={setRedirected}
          showErrorMsg={showErrorMsg}
        />
      ) : (
        <LoginButton setRedirected={setRedirected} errorMsg={errorMsg} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: Dimensions.get('window').height,
  },
});
