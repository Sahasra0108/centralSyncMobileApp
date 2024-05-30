import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/Profile';

const BottomTab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#BCD6FE",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
};

function ProfileTabIcon() {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={require('../../assets/man.jpeg')}
        style={styles.profileImage}
      />
      <View style={styles.profileText}>
        <Text style={styles.profileName}>Femi John</Text>
        <Text style={styles.profileEmail}>femijohn@gmail.com</Text>
      </View>
    </View>
  );
}

function BottomNav() {
  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={'black'} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => <ProfileTabIcon />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileText: {
    marginLeft: 10,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profileEmail: {
    fontSize: 14,
    color: "black",
  },
});

 
