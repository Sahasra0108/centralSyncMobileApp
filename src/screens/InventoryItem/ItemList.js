import React, { useEffect, useState } from "react";

import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

function ItemList() {
  const [items, setItems] = useState([]);
  const from = 0; // Adjust these values as needed for pagination
  const to = 10; // Adjust these values as needed for pagination
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.0.2.2:8080/inventory-item/getAll"
        );
        const data = response.data.map((item) => ({
          id: item.itemId,
          name: item.itemName,
          quantity: item.quantity,
          status: item.status,
        }));
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <View>
        <Text style={styles.p}>All items</Text>
      </View>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Item id</DataTable.Title>
          <DataTable.Title>Item Name </DataTable.Title>
          <DataTable.Title>Quantity</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>
        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
            <DataTable.Cell>{item.status}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>
  );
}
export default ItemList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  p: {
    fontSize: 20,
  },
});
