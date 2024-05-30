import { SafeAreaProvider } from "react-native-safe-area-context";
import TopNav from "../components/TopNav";
import AdminDashboard from "./Dashboard/AdminDashboard";
import React from "react";
import { View, Text,StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
        <AdminDashboard />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
