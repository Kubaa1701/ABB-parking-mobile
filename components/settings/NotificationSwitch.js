import React, { useState } from "react";
import { View, Switch, Text, Dimensions } from "react-native";

export default function NotificationSwitch() {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <View style={{}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: "5%",
        }}
      >
        <Text
          style={{
            width: Dimensions.get("window").width / 2.8,
            fontWeight: "bold",
          }}
        >
          Turn notifications off
        </Text>
        <Switch
          trackColor={{ false: "#aab2bf", true: "#4287f5" }}
          thumbColor={isEnabled ? "white" : "white"}
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
