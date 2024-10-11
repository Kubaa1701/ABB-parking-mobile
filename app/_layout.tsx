import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import findUser from '@/components/login/findUser';
import LoginScreen from '@/components/login/LoginScreen';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    findUser().then((result) => {
      setIsLoggedIn(result['isLoggedIn']);
    });
  });
  return (
    <React.Fragment>
      {/* {isLoggedIn ? ( */}
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>
      {/* ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )} */}
    </React.Fragment>
  );
}
