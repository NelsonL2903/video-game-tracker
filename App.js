import { NavigationContainer } from "@react-navigation/native";
import { Wishlist, Played, Profile } from "./pages/pages";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const tabOptions = (iconName) => {
  return {
    tabBarIcon: () => {
      return <MaterialCommunityIcons name={iconName} size={26} />;
    },
  };
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Wishlist"
          activeColor="#FFFFFF"
          inactiveColor="#000000"
          barStyle={{ backgroundColor: "#1D59BD" }}
        >
          <Tab.Screen
            name="Played"
            component={Played}
            options={tabOptions("check")}
          />
          <Tab.Screen
            name="Wishlist"
            component={Wishlist}
            options={tabOptions("star")}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={tabOptions("account")}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
