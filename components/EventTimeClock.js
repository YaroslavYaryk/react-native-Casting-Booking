import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    Button,
} from "react-native";
import React, { Component } from "react";
import { DataTable } from "react-native-paper";

const EventTimeClock = (props) => {
    return (
        <View style={styles.container}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Start time</DataTable.Title>
                    <DataTable.Title>End time</DataTable.Title>
                    <DataTable.Title>Action</DataTable.Title>
                </DataTable.Header>
                {props.eventTimeClock.map((elem) => {
                    return (
                        <DataTable.Row key={elem.id.toString()}>
                            <DataTable.Cell>{elem.start_time}</DataTable.Cell>
                            <DataTable.Cell>{elem.end_time}</DataTable.Cell>
                            <DataTable.Cell>{elem.action}</DataTable.Cell>
                        </DataTable.Row>
                    );
                })}
            </DataTable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default EventTimeClock;
