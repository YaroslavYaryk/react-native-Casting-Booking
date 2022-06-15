import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    Button,
} from "react-native";
import React, { Component } from "react";

const EventAddStaff = (props) => {
    return (
        <View key={props.number.toString()} style={{ flexDirection: "row" }}>
            <Text style={{ color: "green", marginRight: 5, fontSize: 17 }}>
                ☑
            </Text>
            <Text style={styles.eventInfoItemText}>{props.number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    eventInfoItemText: {
        color: "grey",
        fontSize: 17,
    },
});

export default EventAddStaff;
