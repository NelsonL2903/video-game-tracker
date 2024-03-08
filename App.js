import { NavigationContainer } from '@react-navigation/native';
import { Wishlist, Played, Profile, Search } from './pages/pages';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { secondaryColour } from './components/styles';
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

const tabOptions = (iconName) => {
  return {
    tabBarIcon: () => {
      return <MaterialCommunityIcons name={iconName} size={26} />;
    }
  };
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Wishlist'
          activeColor='#FFFFFF'
          inactiveColor='#000000'
          barStyle={{ backgroundColor: secondaryColour }}
        >
          <Tab.Screen name='Played' component={Played} options={tabOptions('check')} />
          <Tab.Screen name='Wishlist' component={Wishlist} options={tabOptions('star')} />
          <Tab.Screen name='Search' component={Search} options={tabOptions('magnify')} />
          <Tab.Screen name='Profile' component={Profile} options={tabOptions('account')} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
