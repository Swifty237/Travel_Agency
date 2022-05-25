import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Services from './Services';
import Circuits from './Circuits';
import Contact from './Contact';

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

                    if (route.name === "Services") { iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline' }
                    else if (route.name === "Circuits") { iconName = focused ? 'ios-list-box' : 'ios-list' }
                    else if (route.name === "Contact") { iconName = focused ? 'ios-list-box' : 'ios-list' }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Screen name="Services" component={ServicesScreen} />
            <Screen name="Circuits" component={CircuitsScreen} />
            <Screen name="Contact" component={ContactScreen} />
        </Navigator>
    );
}