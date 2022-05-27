import { Text, ImageBackground, StyleSheet, ScrollView, View, Image, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, SearchBar } from "@rneui/themed";
import { useState } from "react";
import { datas } from "./infos"
import { typeInfos } from "./TypingSource";

const backImg = require("../assets/backimg_services.png")

export default function Services() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.imgBackgrd} source={backImg}>
        <Header
          centerComponent={{ text: "SERVICES", style: styles.heading }}
          containerStyle={styles.headContainer}
          backgroundColor="transparent" />
        <SearchBar placeholder="Entrer une destination !" containerStyle={styles.searchBar} />

        <ScrollView style={styles.containerServices}>
          {
            datas.map((obj: typeInfos) => (
              <View>
                <Modal style={styles.modalBox} visible={modalVisible} animationType="slide">
                  <View style={styles.modalImageBox}>
                    <Image style={styles.modalImage} source={obj.img} />
                  </View>

                  <ScrollView>
                    <View style={styles.modalTextBox}>
                      <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center", margin: 10 }}>{obj.title}</Text>
                      <Text style={styles.modalText}>{obj.desc}</Text>
                    </View>
                  </ScrollView>

                  <TouchableOpacity style={styles.closeModal} onPress={() => setModalVisible(false)}>
                    <View style={{ width: 100, margin: 10, alignItems: "center" }}>
                      <Text>Close</Text>
                    </View>
                  </TouchableOpacity>
                </Modal>

                <TouchableOpacity style={styles.box} onPress={() => setModalVisible(true)}>
                  <View style={styles.pictureBox}>
                    <Image style={styles.servicesPictures} source={obj.img} />
                  </View>

                  <View style={styles.textBox}>
                    <Text style={{ fontWeight: "bold", fontSize: 17, textAlign: "center", margin: 10 }}>{obj.title}</Text>
                  </View>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.reverseBox}>
                  <View style={styles.reversePictureBox}>
                    <Image style={styles.servicesPictures} source={require("../assets/comparateur.jpg")} />
                  </View>

                  <View style={styles.textBox}>
                    <Text style={{ fontStyle: "italic", fontSize: 17, textAlign: "justify", margin: 12 }}>Ceci est le texte de test qui va avec l'image qui est sur le coté</Text>
                  </View>
                </TouchableOpacity> */}
              </View>
            ))
          }

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

  containerServices: {
    flex: 1,
    width: "100%",
    marginTop: 10
  },

  headContainer: {
    backgroundColor: "black",
    width: "95%",
    borderRadius: 10,
    marginTop: 10,
    opacity: .8
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

  searchBar: {
    width: "95%",
    opacity: .8,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "black"
  },

  box: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
    width: "100%",
    height: 200,
  },

  reverseBox: {
    flex: 1,
    flexDirection: "row-reverse",
    marginBottom: 5,
    width: "100%",
    height: 200
  },

  pictureBox: {
    flex: 3,
    width: "100%",
    height: 200,
    backgroundColor: "black"
  },

  reversePictureBox: {
    flex: 3,
    width: "100%",
    height: 200,
    backgroundColor: "black"
  },

  textBox: {
    flex: 2,
    backgroundColor: "white",
    width: "100%",
    height: 180,
    marginTop: 10,
    marginBottom: 10,
    opacity: .8
  },

  servicesPictures: {
    height: 200,
    width: "100%",
    resizeMode: "contain"
  },

  modalBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  modalImageBox: {
    flex: 1,
    backgroundColor: "black"
  },

  modalImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },

  modalText: {
    textAlign: "justify",
    margin: 10
  },

  modalTextBox: {
    flex: 1
  },

  closeModal: {
    alignItems: "center",
    width: 150,
    borderRadius: 5,
    borderWidth: 2,
    alignSelf: "center",
    margin: 20
  }
})


