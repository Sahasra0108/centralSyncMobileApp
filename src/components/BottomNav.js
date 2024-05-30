import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, BottomNavigation } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

const BottomTab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor:"#BCD6FE",
    borderTopLeftRadius: 20,  
    borderTopRightRadius: 20,
  },
};

function MyBottomTabs() {
  
  return (
    <BottomTab.Navigator initialRouteName="Home"
    screenOptions={screenOptions}
      >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel:"Home",
          tabBarIcon: ({ color }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="home" color={'black'} size={26} style={{ marginRight: 80 }}/>
            
             
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <ProfileScreen/>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MyBottomTabs;