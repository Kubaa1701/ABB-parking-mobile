import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import React, { useState } from "react";
import getLoginLink from "@/components/login/getLoginLink";
import findUser from "@/components/login/findUser";

export default function LoginScreen(props) {
  const [redirected, setRedirected] = useState(false);
  const [errorMsg, showErrorMsg] = useState(false);
  return (
    <View>
      {redirected ? (
        <Pressable
          onPress={(e) => {
            findUser().then((result) => {
              props.setIsLoggedIn(result["isLoggedIn"]);
              if (!result["isLoggedIn"]) {
                setRedirected(false);
                showErrorMsg(true);
              }
            });
          }}
        >
          <Text>Continue</Text>
        </Pressable>
      ) : (
        <View>
          <Pressable
            onPress={(e) => {
              getLoginLink().then((result) => {
                Linking.openURL(result["link"]);
                setRedirected(true);
              });
            }}
          >
            <Text>Log in using Microsoft</Text>
          </Pressable>
          {errorMsg ? (
            <Text style={{ color: "red" }}>
              We had trouble signing you in. Try again.
            </Text>
          ) : (
            <Text></Text>
          )}
        </View>
      )}
    </View>
  );
}
