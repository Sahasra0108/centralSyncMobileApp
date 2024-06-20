import React, { useEffect, useState } from "react";

import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

function inRequestsList() {
  const [inRequests, setInRequests] = useState([]);
  const from = 0; // Adjust these values as needed for pagination
  const to = 10; // Adjust these values as needed for pagination

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.0.2.2:8080/request/getAll"
        );
        const data = response.data.map((inRequest) => ({
          id: inRequest.reqId,
          status: inRequest.reqStatus,
        }));
       setInRequests(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <View>
        <Text style={styles.p}>All Inventory Requests</Text>
      </View>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={styles.leftTitle}>Inventory Request No</DataTable.Title>
          <DataTable.Title style={styles.rightTitle}>Status</DataTable.Title>
        </DataTable.Header>
        {inRequests.slice(from, to).map((inRequest) => (
          <DataTable.Row key={inRequest.id}>
            <DataTable.Cell style={styles.leftCell}>{inRequest.id}</DataTable.Cell>
            <DataTable.Cell style={styles.rightCell}>{inRequest.status}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>
  );
}
export default inRequestsList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  leftTitle: {
    flex: 1,
    justifyContent: "flex-start",
  },
  rightTitle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  leftCell: {
    flex: 1,
    justifyContent: "flex-start",
  },
  rightCell: {
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    margin: 20,
  },
});