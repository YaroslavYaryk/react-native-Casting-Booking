import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    Button,
} from "react-native";
import React, { Component } from "react";
import EventAddStaff from "./EventAddStaff";

const EventInfo = (props) => {
    var listItems;
    if (Array.isArray(props.selectedEvent.aditional_staff)) {
        listItems = props.selectedEvent.aditional_staff.map((number) => (
            <View key={number.toString()} style={{ flexDirection: "row" }}>
                <Text style={{ color: "green", marginRight: 5, fontSize: 17 }}>
                    ☑
                </Text>
                <Text style={styles.eventInfoItemText}>{number}</Text>
            </View>
        ));
    } else {
        listItems = [props.selectedEvent.aditional_staff].map((number) => (
            <View key={number.toString()} style={{ flexDirection: "row" }}>
                <Text style={{ color: "green", marginRight: 5, fontSize: 17 }}>
                    ☑
                </Text>
                <Text style={styles.eventInfoItemText}>{number}</Text>
            </View>
        ));
    }

    return (
        <View style={styles.eventInfo}>
            <View style={styles.eventInfoRow}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Customer</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.selectedEvent.customer}
                    </Text>
                </View>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Artist</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.selectedEvent.artist}
                    </Text>
                </View>
            </View>
            <View style={styles.eventInfoRow}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Company</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.selectedEvent.company}
                    </Text>
                </View>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Venue</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.selectedEvent.venue}
                    </Text>
                </View>
            </View>
            <View style={styles.eventInfoRow}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Price</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.selectedEvent.price}
                    </Text>
                </View>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Date</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.selectedEvent.date}
                    </Text>
                </View>
            </View>
            <View style={styles.eventInfoRowSingle}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>
                        Payment methods
                    </Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.selectedEvent.payment_methods}
                    </Text>
                </View>
            </View>
            <View style={styles.eventInfoRowSingle}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>
                        Aditional staff
                    </Text>
                    <View style={{}}>
                        <View style={styles.eventInfoItemAddStaff}>
                            {listItems}
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.eventInfoRowSingle}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Comment</Text>
                    <Text>{props.selectedEvent.comment}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    eventInfo: {
        marginVertical: 20,
        marginHorizontal: 20,
    },
    eventInfoRow: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 20,
        // justifyContent: "space-around",
    },
    eventInfoRowSingle: {
        marginBottom: 20,
    },
    eventInfoItem: {
        flex: 0.5,
    },
    eventInfoItemLabelText: {
        fontWeight: "500",
        color: "#323232",
        fontSize: 16,
    },
    eventInfoItemText: {
        color: "grey",
        fontSize: 17,
    },
    eventInfoItemAddStaff: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
});

export default EventInfo;
