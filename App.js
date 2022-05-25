import "react-native-reanimated";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./components/Home";
import Services from "./components/Services";
import NavigationTabs from "./components/NavigationTabs";

const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Screen
            name="Services"
            component={NavigationTabs}
            options={{ headerTitle: "back", headerTransparent: true, headerTitleStyle: { fontSize: 13, fontWeight: "bold" } }} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}