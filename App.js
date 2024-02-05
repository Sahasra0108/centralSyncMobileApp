import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, BottomNavigation } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from './src/components/SearchBar';
import { View } from 'react-native';
import MyBottomTabs from './src/components/BottomNav';
import TopNav from './src/components/TopNav';



export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <TopNav/>
      <MyBottomTabs />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
//<Appbar.Action icon="menu" onPress={() => {}} />
//<Appbar.Content title="Title" />