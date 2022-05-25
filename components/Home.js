import { Text, View, StyleSheet, ImageBackground, Image, TouchableHighlight } from "react-native";
import Services from "./Services";

const backImg = require("../assets/backimg_home.png")
const ImgHome = require("../assets/backimg_home2.png")
const Img = require("../assets/travel_logo.png")

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackgrd} source={backImg}>
                <View style={styles.logoBox}>
                    <Image style={styles.imgLogo} source={Img} />
                </View>
                <View style={styles.welcomeBox}>
                    <ImageBackground style={styles.textBox} source={ImgHome}>
                        <View style={styles.box}>
                            <Text style={styles.welcomeText}>
                                Bienvenue chez Travel Agency
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <TouchableHighlight style={styles.button} onPress={() => { navigation.navigate(Services) }}>
                    <View style={styles.buttonTextBox}>
                        <Text style={styles.textButton}> Entrer </Text>
                    </View>
                </TouchableHighlight>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    imgBackgrd: {
        flex: 1,
        width: "100%",
        alignItems: "center"
    },

    logoBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    welcomeBox: {
        flex: 2,
        justifyContent: "flex-start",
        alignItems: "center"

    },

    welcomeText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "italic",
        justifyContent: "center"
    },

    imgLogo: {
        width: 270,
        height: 130,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },

    textBox: {
        width: 300,
        height: 400,
        alignItems: "center"
    },

    box: {
        width: 250,
        height: 200,
        backgroundColor: "white",
        marginTop: 25,
        opacity: .6,
        justifyContent: "center"
    },

    button: {
        backgroundColor: "#34495e",
        marginBottom: 50,
        height: 50,
        width: 100,
        borderRadius: 10
    },

    buttonTextBox: {
        justifyContent: "center"
    },

    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 5
    }
})
