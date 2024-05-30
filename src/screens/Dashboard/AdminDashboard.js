import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import Button from "../../components/Button";

const AdminDashboard = () => {
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.iconContainer}>
        <Text>Today </Text>
        
      </View>

      {/* menu list */}
      <View style={style.menuContainer}>
        <Text>Requests & Reservations</Text>
        <Button name="Requests" onPress={() => {}} />
        <Button name="External Reservations" onPress={() => {}} />
        <Button name="My Reservations" onPress={() => {}} />
        <Button name="Maintenance Ticket" onPress={() => {}} />
      </View>
      <View style={style.menuContainer}>
        <Text>Reports</Text>
        <Button
          name="View History"
          onPress={() => {
            console.log("pressed");
          }}
        />
        <Button name="Inventory Summary" onPress={() => {}} />
        <Button name="Stock Alert" onPress={() => {}} />
        <Button name="Item Usage Analysis" onPress={() => {}} />
      </View>
      <View style={style.menuContainer}>
        <Text>Inventory Item</Text>
        <Button name="Item" onPress={() => {}} />
        <Button name="Adjustment" onPress={() => {}} />
        <Button name="Stock In" onPress={() => {}} />
        <Button name="Stock Out" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#3C8CEA",
  },
  menuContainer: {
    alignItems: "center",
    backgroundColor: "#FFF2DC",
    margin: 10,
    borderRadius: 15,
    elevation: 5,
    width: 380,
    height: 180,
  },
});

export default AdminDashboard;
