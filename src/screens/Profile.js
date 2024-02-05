import { SafeAreaProvider } from 'react-native-safe-area-context'; 

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileEmail: {
    fontSize: 14,
    color: 'black',
  },
});
