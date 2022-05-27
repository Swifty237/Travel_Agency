import { Text, ImageBackground, StyleSheet, ScrollView, View, Image, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, SearchBar } from "@rneui/themed";

const backImg = require("../assets/backimg_services.png")

export default function Services() {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.imgBackgrd} source={backImg}>
                <Header
                    centerComponent={{ text: "SERVICES", style: styles.heading }}
                    containerStyle={styles.headContainer} backgroundColor="transparent" />
                <SearchBar placeholder="Entrer une destination !" containerStyle={styles.searchBar} />

                <ScrollView style={styles.containerServices}>
                    <View style={styles.box} onPress={() => increasedSize()}>
                        <View style={styles.pictureBox}>
                            <Image style={styles.servicesPictures} source={require("../assets/traveling-ticket-booking.jpg")} />
                        </View>
                        <TouchableOpacity style={styles.textBox}>
                            <Text style={{ fontStyle: "italic", fontSize: 17, textAlign: "justify", margin: 10 }}>Ceci est le texte de test qui va avec l'image qui est sur le coté</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.reverseBox}>
                        <View style={styles.reversePictureBox}>
                            <Image style={styles.servicesPictures} source={require("../assets/comparateur.jpg")} />
                        </View>
                        <TouchableOpacity style={styles.textBox}>
                            <Text style={{ fontStyle: "italic", fontSize: 17, textAlign: "justify", margin: 12 }}>Ceci est le texte de test qui va avec l'image qui est sur le coté</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.pictureBox}>
                            <Image style={styles.servicesPictures} source={require("../assets/all-inclusive.jpg")} />
                        </View>
                        <TouchableOpacity style={styles.textBox}>
                            <Text style={{ fontStyle: "italic", fontSize: 17, textAlign: "justify", margin: 12 }}>Ceci est le texte de test qui va avec l'image qui est sur le coté</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.reverseBox}>
                        <View style={styles.reversePictureBox}>
                            <Image style={styles.servicesPictures} source={require("../assets/cruise-ship.jpg")} />
                        </View>
                        <TouchableOpacity style={styles.textBox}>
                            <Text style={{ fontStyle: "italic", fontSize: 17, textAlign: "justify", margin: 12 }}>Ceci est le texte de test qui va avec l'image qui est sur le coté</Text>
                        </TouchableOpacity>
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
    }
})


