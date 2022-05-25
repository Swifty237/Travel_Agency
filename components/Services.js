import { Text, View, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { Header, SearchBar } from "@rneui/themed";

const backImg = require("../assets/backimg_services.png")

export default function Services() {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgBackgrd} source={backImg}>
                <Header
                    centerComponent={{ text: "SERVICES", style: styles.heading }}
                    containerStyle={styles.headContainer} backgroundColor="transparent" />
                <SearchBar placeholder="ex. John DOE" containerStyle={styles.searchBar} />
                <ScrollView>
                    <Text> Ok Services </Text>
                </ScrollView>
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

    headContainer: {
        backgroundColor: "black",
        opacity: .5,
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
        color: "white"
    },

    searchBar: {
        width: "95%",
        opacity: .5,
        marginTop: 10,
        borderRadius: 10
    }
})


