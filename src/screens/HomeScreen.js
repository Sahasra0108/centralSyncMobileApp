import { SafeAreaProvider } from "react-native-safe-area-context";
import TopNav from "../components/TopNav";
import AdminDashboard from "./Dashboard/AdminDashboard";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UsageAnalysis from "./Reports/Item Usage Report/ItemUsage";
export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      {/* <AdminDashboard /> */}
      <UsageAnalysis />
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
