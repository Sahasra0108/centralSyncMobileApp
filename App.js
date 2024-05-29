import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import MyBottomTabs from './src/components/BottomNav';
import TopNav from './src/components/TopNav';
import ItemList from './src/screens/InventoryItem/ItemList';



export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <TopNav/>
      <ItemList/>
      <MyBottomTabs />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
//<Appbar.Action icon="menu" onPress={() => {}} />
//<Appbar.Content title="Title" />