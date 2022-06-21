import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    Button,
} from "react-native";
import React, { Component } from "react";

const UserInfo = (props) => {
    return (
        <View style={styles.eventInfo}>
            <View style={styles.eventInfoRow}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>
                        First Name
                    </Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.userDetails.firstName}
                    </Text>
                </View>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Last Name</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.userDetails.lastName}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, marginBottom: 20 }}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Email</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.userDetails.email}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, marginBottom: 20 }}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>
                        Driver licens classes
                    </Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.userDetails.driver_licens_classes}
                    </Text>
                </View>
            </View>
            <View style={styles.eventInfoRow}>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>Phone</Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.userDetails.phone}
                    </Text>
                </View>
                <View style={styles.eventInfoItem}>
                    <Text style={styles.eventInfoItemLabelText}>
                        Birth Date
                    </Text>
                    <Text style={styles.eventInfoItemText}>
                        {props.userDetails.birthdate}
                    </Text>
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

export default UserInfo;
