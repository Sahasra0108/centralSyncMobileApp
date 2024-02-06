import {View,TextInput,Text,StyleSheet} from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Appbar, BottomNavigation } from 'react-native-paper';

const SearchBar = (props)=>{
    return(
       <View style={styles.container}>
        <View style={styles.inputContainer}>
        <Appbar.Action icon="magnify" size={20} onPress={() => {}} />
            
            <TextInput
            
                placeholder="Search an Item"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text)=>props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
                selectionColor="black"
             
            />
        </View>
        </View>
    )
}

export default SearchBar;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center', // Center children horizontally
        alignItems: 'center', // Center children vertically
      },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 8,
      width:270,
      height:25,
      //justifyContent: 'center',
      //alignSelf: 'center',
     // marginRight:50,
      marginLeft:45
    },
    input: {
      flex: 1,
      height: 20,
      marginLeft: 8,  
      fontFamily:""
    
    },
  };