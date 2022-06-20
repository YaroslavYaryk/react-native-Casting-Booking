import {
    Text,
    View,
    ScrollView,
    FlatList,
    StyleSheet,
    Button,
    ActivityIndicator,
} from "react-native";
import React, { Component, useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import ProductItem from "../components/ProductItem";
import { fetchEventProducts } from "../booking/actions/eventProducts";

const EventProducts = (props) => {
    const eventId = props.route.params.eventId;
    const eventProducts = useSelector(
        (state) => state.eventProducts.eventProducts
    );

    const eventTeam = useSelector((state) => state.eventTeam.eventTeam);
    const userEmail = useSelector((state) => state.auth.userEmail);

    const userAdmin = Boolean(
        eventTeam.filter(
            (elem) => elem.userEmail == userEmail && elem.role == "admin"
        ).length
    );

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const loadEventProducts = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(fetchEventProducts(eventId));
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        }
        setIsLoading(false);
    }, [dispatch, setError, setIsLoading]);

    useEffect(() => {
        const onFocusSub = props.navigation.addListener(
            "focus",
            loadEventProducts
        );

        return () => {
            onFocusSub;
        };
    }, [loadEventProducts]);

    useEffect(() => {
        loadEventProducts();
    }, [dispatch, loadEventProducts]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>An error occured</Text>
                <Button
                    title="Try Again"
                    onPress={loadEventProducts}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (!isLoading && eventProducts.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>There is no any product for now!</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={eventProducts}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <ProductItem
                    item={itemData.item}
                    admin={userAdmin}
                ></ProductItem>
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
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default EventProducts;
