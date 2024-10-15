import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import getData from '@/scripts/getData';
import LoginScreen from '@/components/login/LoginScreen';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    getData('user/oauth/findUser').then((result) => {
      setIsLoggedIn(result['isLoggedIn']);
    });
  });
  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack>
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </React.Fragment>
  );
}
