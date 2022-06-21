import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from "react-native";
import Colors from "../constants/Colors";

import { HOST, PORT } from "../constants/server";

const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View
            style={[
                props.admin ? styles.productAdmin : styles.productNonAdmin,
                styles.baseProduct,
            ]}
        >
            <View>
                <View style={styles.touchable}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: `${HOST}:${PORT}${props.item.productImage}`,
                            }}
                        />
                    </View>
                    <View>
                        <View style={styles.titleBlock}>
                            <View style={styles.productDescriptionItem}>
                                <Text
                                    style={styles.productDescriptionItemLabel}
                                >
                                    Name
                                </Text>
                                <Text style={styles.productDescriptionItemText}>
                                    {props.item.productName}
                                </Text>
                            </View>
                            <View style={styles.productDescriptionItem}>
                                <Text
                                    style={styles.productDescriptionItemLabel}
                                >
                                    Price
                                </Text>
                                <Text style={styles.productDescriptionItemText}>
                                    {props.item.price}
                                </Text>
                            </View>
                            <View style={styles.productDescriptionItem}>
                                <Text
                                    style={styles.productDescriptionItemLabel}
                                >
                                    Count
                                </Text>
                                <Text style={styles.productDescriptionItemText}>
                                    {props.item.count}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                {props.admin ? (
                    <View style={styles.buttonsBlock}>
                        <View></View>
                        <View style={styles.buttonsBlockList}>
                            <TouchableOpacity
                                style={{
                                    ...styles.eventProductsButton,
                                    ...styles.buttonDelete,
                                }}
                            >
                                <Text
                                    style={{
                                        ...styles.eventProductsButtonText,
                                        color: "white",
                                    }}
                                >
                                    Delete
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    ...styles.eventProductsButton,
                                    ...styles.buttonEdit,
                                }}
                            >
                                <Text style={styles.eventProductsButtonText}>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <Text></Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    baseProduct: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        margin: 20,
    },
    productAdmin: {
        height: 180,
    },
    productNonAdmin: {
        height: 130,
    },
    titleBlock: {
        marginLeft: 20,
        width: "100%",
    },
    touchable: {
        borderRadius: 10,
        width: "90%",
        flexDirection: "row",
    },
    imageContainer: {
        marginTop: 10,
        marginLeft: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        elevation: 50,
        // flex: 1,
        width: "60%",
        height: 120,
        borderRadius: 10,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    productDescriptionItem: {
        marginBottom: 5,
    },
    productDescriptionItemLabel: {
        fontWeight: "600",
        marginBottom: -5,
    },
    productDescriptionItemText: {
        color: "grey",
    },
    bottomTitle: {
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25%",
        paddingHorizontal: 20,
    },
    blockWrapper: {
        flexDirection: "row",
        borderWidth: 2,
    },
    buttonsBlock: {
        // flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonsBlockList: {
        marginTop: 15,
        flexDirection: "row",
        marginRight: 0,
        right: 0,
    },
    eventProductsButton: {
        marginRight: 20,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 5,
    },
    buttonDelete: {
        backgroundColor: Colors.danger,
    },
    buttonEdit: {
        backgroundColor: Colors.info,
    },
});

export default ProductItem;
