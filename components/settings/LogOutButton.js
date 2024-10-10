import { Pressable, Text, Dimensions } from "react-native";
import LogOut from "./LogOut";
import HorizontalLine from "./HorizontalLine";

export default function LogOutButton() {
  return (
    <>
      <Pressable
        style={{
          alignItems: "center",
          height: 40,
          width: Dimensions.get("window").width / 2,
          margin: "5%",
          position: "fixed",
          bottom: Dimensions.get("window").height / 25,
        }}
        onPress={() => {
          LogOut();
        }}
      >
        <Text
          style={{
            fontSize: 20,
            margin: "auto",
            color: "red",
            fontWeight: "bold",
            width: Dimensions.get("window").width / 2,
          }}
        >
          Log Out
        </Text>
      </Pressable>
    </>
  );
}
