import {View,TextInput,Text,StyleSheet} from "react-native";
import React,{ useState } from "react";
import SearchBar from "../components/SearchBar";

function Search(){
    const [searchText, setSearchText] = useState('');
    return (
         
        <SearchBar setSearchText={setSearchText} />
         
      );
    }

 export default Search;