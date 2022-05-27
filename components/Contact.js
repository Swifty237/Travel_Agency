import { Text, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, SearchBar } from "@rneui/themed";

const backImg = require("../assets/backimg_contact.png")

export default function Contact() {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.imgBackgrd} source={backImg}>
                <Header
                    centerComponent={{ text: "CONTACT", style: styles.heading }}
                    containerStyle={styles.headContainer} backgroundColor="transparent" />
                <SearchBar placeholder="Entrer une destination !" containerStyle={styles.searchBar} />
                <ScrollView>
                    <Text> Ok Services </Text>
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

    headContainer: {
        backgroundColor: "black",
        opacity: .8,
        width: "95%",
        borderRadius: 10,
        marginTop: 10
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
    }
})

