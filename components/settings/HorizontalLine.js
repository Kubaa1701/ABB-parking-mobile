import { View, StyleSheet } from "react-native";

export default function HorizontalLine() {
  return <View style={styles.line}></View>;
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 10,
  },
});
