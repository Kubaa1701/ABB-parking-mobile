import { Text, View, Dimensions } from "react-native-web";
import UserData from "./UserData";
import { useState, useEffect } from "react";

export default function UserEmail() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    UserData(1).then((result) => {
      setEmail(result.result.email);
    });
  }, []);
  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          marginBottom: 10,
          marginLeft: "5%",
        }}
      >
        {email}
      </Text>
    </View>
  );
}
