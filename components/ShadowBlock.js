import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ShadowBlock = (props) => {
    return (
        <View style={{ ...styles.body, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: "white",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#DBDBDB",
        borderRadius: 20,
    },
});

export default ShadowBlock;
