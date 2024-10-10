import { View, Text } from "react-native";
import UserEmail from "./UserEmail";
import NotificationSwitch from "./NotificationSwitch";
import HorizontalLine from "./HorizontalLine";
import LogOutButton from "./LogOutButton";

export default function Settings() {
  return (
    <View style={{ padding: 10 }}>
      <UserEmail />
      <HorizontalLine />
      <NotificationSwitch />
      <LogOutButton />
    </View>
  );
}
