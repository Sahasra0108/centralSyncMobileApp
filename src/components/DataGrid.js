import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const DataList = (props) => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>{props.col1}</DataTable.Title>
        <DataTable.Title>{props.col2}</DataTable.Title>
        <DataTable.Title>{props.col3}</DataTable.Title>
        <DataTable.Title>{props.col4}</DataTable.Title>
      </DataTable.Header>
    </DataTable>
  );
};

export default DataList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
});
