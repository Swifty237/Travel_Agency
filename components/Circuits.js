import { Text, View, ImageBackground } from "react-native";

const backImg = require("../assets/backimg_circuits.png")


export default function Circuits() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground>
        <Text>Ok Circuits</Text>
      </ImageBackground>
    </View>
  );
}
