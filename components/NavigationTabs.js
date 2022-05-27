import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Services from "./Services";
import Circuits from "./Circuits";
import Contact from "./Contact";

const { Navigator, Screen } = createBottomTabNavigator();

const ServicesScreen = () => <Services />
const CircuitsScreen = () => <Circuits />
const ContactScreen = () => <Contact />

export default function NavigationTabs() {
    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Services") { iconName = focused ? "view-list" : "view-list-outline" }
                    else if (route.name === "Circuits") { iconName = focused ? "picture-in-picture-bottom-right" : "picture-in-picture-bottom-right-outline" }
                    else if (route.name === "Contact") { iconName = focused ? "contacts" : "contacts-outline" }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "black"
            })}
        >
            <Screen name="Services" component={ServicesScreen} options={{ headerShown: false, tabBarActiveBackgroundColor: "black", tabBarInactiveBackgroundColor: "goldenrod" }} />
            <Screen name="Circuits" component={CircuitsScreen} options={{ headerShown: false, tabBarActiveBackgroundColor: "black", tabBarInactiveBackgroundColor: "#FFE14C" }} />
            <Screen name="Contact" component={ContactScreen} options={{ headerShown: false, tabBarActiveBackgroundColor: "black", tabBarInactiveBackgroundColor: "#FFE14C" }} />
        </Navigator>
    );
}