import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import UsageBarChart from "./UsageBarChart";

const categoryList = [
  { value: "COMPUTER_ACCESSORIES", name: "Computer Accessories" },
  { value: "PRINTER", name: "Printer" },
  { value: "COMPUTER_HARDWARE", name: "Computer Hardware" },
  { value: "OTHER", name: "Other" },
];

const currentYear = new Date().getFullYear();
const yearOptions = () => {
  const yearArray = [];
  for (let year = 2020; year <= currentYear; year++) {
    yearArray.push(year);
  }
  return yearArray;
};

const renderButtonCategory = (selectedItem) => {
  return (
    <TouchableOpacity style={styles.customButton}>
      <Text style={styles.customButtonText}>
        {selectedItem ? selectedItem.name : "Select an item category"}
      </Text>
    </TouchableOpacity>
  );
};
const renderButtonYear = (selectedItem) => {
  return (
    <TouchableOpacity style={styles.customButton}>
      <Text style={styles.customButtonText}>
        {selectedItem ? selectedItem : "Select a year"}
      </Text>
    </TouchableOpacity>
  );
};

const renderCategory = (item) => {
  return (
    <View style={styles.customItem}>
      <Text style={styles.customItemText}>{item.name}</Text>
    </View>
  );
};
const renderYear = (item) => {
  return (
    <View style={styles.customItem}>
      <Text style={styles.customItemText}>{item}</Text>
    </View>
  );
};

export default UsageAnalysis = () => {
  const [category, setCategory] = useState("COMPUTER_ACCESSORIES");
  const [year, setYear] = useState(currentYear);

  useEffect(() => {
    console.log("Selected Category:", category);
    console.log("Selected Year:", year);
  }, [category, year]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <SelectDropdown
          data={categoryList}
          onSelect={(selectedItem) => {
            setCategory(selectedItem.value);
          }}
          renderButton={renderButtonCategory}
          renderItem={renderCategory}
        />
        <SelectDropdown
          data={yearOptions()}
          onSelect={(selectedItem) => {
            setYear(selectedItem);
          }}
          renderButton={renderButtonYear}
          renderItem={renderYear}
        />
        {/* <TouchableOpacity style={styles.customButton}>
          <Text style={styles.customButtonText}>
            Print
          </Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.view}>
        <Text style={styles.heading}>
          USAGE ANALYSIS OF CATEGORY {category} YEAR {year} (JAN-DEC)
        </Text>
      </View>
      <View style={styles.view}>
        <UsageBarChart category={category} year={year}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 16,
    // alignItems:"stretch"
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 5,
  },
  customButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    width: 160,
    height: 60,
    margin: 5,
  },
  customButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
