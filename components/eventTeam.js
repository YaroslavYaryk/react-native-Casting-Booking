import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    Button,
} from "react-native";
import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import EventAddStaff from "../components/EventAddStaff";
import ShadowBlock from "../components/ShadowBlock";
import EventInfo from "../components/EventInfo";
import EventTimeClock from "../components/EventTimeClock";
import { DataTable } from "react-native-paper";

const EventTeam = (props) => {
    return (
        <View style={styles.container}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>User</DataTable.Title>
                    <DataTable.Title>Role</DataTable.Title>
                </DataTable.Header>
                {props.eventTeam.map((elem) => {
                    return (
                        <DataTable.Row key={elem.id.toString()}>
                            <DataTable.Cell>{elem.user}</DataTable.Cell>
                            <DataTable.Cell>{elem.role}</DataTable.Cell>
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

export default EventTeam;
