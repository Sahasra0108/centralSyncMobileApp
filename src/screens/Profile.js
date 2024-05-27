import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
} from "react-native";

export default function ProfileScreen(props) {
  //const [text, setText] = React.useState('');
  const textInputTheme = {
    roundness: 10,
    colors: {
      primary: "transparent",
      underlineColor: "white"
    },
    underlineColorAndroid: "transparent",
  };
  const { onPress, title = "Save" } = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.topic1}>Edit Profle</Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          theme={textInputTheme}
          style={styles.input}
          underlineColor="transparent" 
  
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput theme={textInputTheme} style={styles.input}  underlineColor="transparent"  />

        <Text style={styles.label}>Department</Text>
        <TextInput theme={textInputTheme} style={styles.input}  underlineColor="transparent"  />
        <Text style={styles.label}>Role</Text>
        <TextInput theme={textInputTheme} style={styles.input}  underlineColor="transparent"  />
        <Text style={styles.label}>Date Of Birth</Text>
        <TextInput theme={textInputTheme} style={styles.input}  underlineColor="transparent"  />
        <Text style={styles.label}>Address</Text>
        <TextInput
          theme={textInputTheme}
          style={[styles.input, { height: 70 }] }
          underlineColor="transparent" 
        />

        <Text style={styles.topic}>User Contact Info</Text>

        <Text style={styles.label}>Tel No</Text>
        <TextInput theme={textInputTheme} style={styles.input}  underlineColor="transparent" />
        <Text style={styles.label}>Mobile</Text>
        <TextInput theme={textInputTheme} style={styles.input}  underlineColor="transparent"  />
        <Text style={styles.label}>Email Address</Text>
        <TextInput theme={textInputTheme} style={styles.input}  underlineColor="transparent"  />
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    height: 45,
    width: "98%",
    //borderColor: "",
    borderWidth: 2,
    alignSelf: "flex-start",
    backgroundColor: "white",
    //borderBottomColor: "blue",
    //marginBottom: 10,
    borderBottomColor: "transparent",
    elevation: 5,
  
  },

  label: {
    fontSize: 18,
    marginBottom: 8,
    paddingTop: 10,
    alignSelf: "flex-start",
    color: "black",
    fontWeight: "bold",
  },

  topic: {
    fontSize: 20,
    alignSelf: "flex-start",
    paddingTop: 15,
    paddingBottom: 10,
    fontWeight: "bold",

  },

  topic1: {
    fontSize: 30,
    alignSelf: "flex-start",
    paddingTop: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },

  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "white",
    paddingBottom: 100,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#007EF2",
    height: 45,
    width: "98%",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
