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

const ArtistTeam = (props) => {
    return (
        <View style={styles.container}>
            {props.artistTeam.map((elem) => {
                return (
                    <View style={styles.artistContainer} key={elem.id}>
                        <Text style={styles.artistIcon}>☑</Text>
                        <Text style={styles.artistName}>{elem.name}</Text>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    artistContainer: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 10,
    },
    artistIcon: {
        color: "blue",
    },
    artistName: {
        marginLeft: 10,
    },
});

export default ArtistTeam;
