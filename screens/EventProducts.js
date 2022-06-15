import {
    Text,
    View,
    ScrollView,
    FlatList,
    StyleSheet,
    Button,
} from "react-native";
import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import ProductItem from "../components/ProductItem";

const EventProducts = (props) => {
    const eventId = props.route.params.eventId;
    const eventProducts = useSelector(
        (state) => state.eventProducts.eventProducts
    );
    return (
        <FlatList
            data={eventProducts}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <ProductItem
                    item={itemData.item}
                    onSelect={() => {
                        selectItemHandler(
                            itemData.item.id,
                            itemData.item.title
                        );
                    }}
                >
                    <View style={styles.content}>
                        <View></View>
                        <Button
                            style={styles.buttonStyle}
                            color={Colors.primary}
                            title="View Details"
                            onPress={() => {
                                selectItemHandler(
                                    itemData.item.id,
                                    `${itemData.item.customer} - ${itemData.item.artist}`
                                );
                            }}
                        />
                    </View>
                </ProductItem>
            )}
        />
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: navData.route.params.eventTitle,
    };
};

const styles = StyleSheet.create({
    content: {
        // flex: 0.5,
        flexDirection: "row",
        // display: "flex",
        width: "100%",
        justifyContent: "space-between",
        // alignItems: "center",
        marginBottom: 10,
    },
    buttonStyle: {
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "grey",
        fontSize: "30px",
    },
});

export default EventProducts;
