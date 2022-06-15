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

const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    console.log(props.item);
    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: props.item.productImage }}
                    />
                </View>
                <View>
                    <View style={styles.titleBlock}>
                        <Text style={styles.title}>111</Text>
                        <Text style={styles.title}>222</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        height: 280,
        margin: 20,
        // borderWidth: 3,
    },
    titleBlock: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        // gap: "20px",
        borderWidth: 2,
        width: "50%",
    },
    touchable: {
        borderRadius: 10,
        // overflow: "hidden",
        borderWidth: 3,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imageContainer: {
        // flex: 1,
        width: "50%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 2,
        // overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
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
});

export default ProductItem;
