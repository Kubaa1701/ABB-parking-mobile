import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import findUser from "@/components/login/findUser";

export default function ContinueButton(props) {
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.button}
        onPress={() => {
          findUser().then((result) => {
            props.setIsLoggedIn(result["isLoggedIn"]);
            if (!result["isLoggedIn"]) {
              props.setRedirected(false);
              props.showErrorMsg(true);
            }
          });
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: "auto",
    width: Dimensions.get("window").width,
  },
  buttonText: {
    fontSize: 50,
    textAlign: "center",
  },
  button: {
    width: Dimensions.get("window").width / 1.5,
    margin: "auto",
    backgroundColor: "#f5f5f5",
    padding: 40,
    borderRadius: 25,
  },
});
