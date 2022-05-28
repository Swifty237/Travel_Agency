import { Text, ImageBackground, StyleSheet, ScrollView, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@rneui/themed";

const backImg = require("../assets/backimg_contact.png")
const img = require("../assets/travel_logo2.png")

export default function Contact() {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackgrd} source={backImg}>
        <Header
          centerComponent={{ text: "CONTACT", style: styles.heading }}
          containerStyle={styles.headContainer} backgroundColor="transparent" />

        <ScrollView contentContainerStyle={styles.containerContact}>
          <View style={styles.logoBox}>
            <Image style={styles.imgStyle} source={img} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },

  containerContact: {
    flex: 1,
  },

  headContainer: {
    backgroundColor: "black",
    opacity: .8,
    width: "95%",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10
  },

  imgBackgrd: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },

  heading: {
    height: 100,
    marginTop: 25,
    alignItems: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    opacity: 1
  },

  logoBox: {
    flex: 1,
  },

  imgStyle: {
    flex: 1,
    resizeMode: "contain",
    height: 100,
    width: 300,
    opacity: .9
  }
})


