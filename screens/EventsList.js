import React, { Component, useCallback, useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Button,
    ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import EventItem from "../components/eventItem";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/initial/CustomeHeaderButton";
import * as authActions from "../booking/actions/Auth";
import * as eventActions from "../booking/actions/events";

const EventList = (props) => {
    const events = useSelector((state) => state.events.userEvents);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const loadEvents = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(eventActions.fetchEvents());
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        }
        setIsLoading(false);
    }, [dispatch, setError, setIsLoading]);

    useEffect(() => {
        const onFocusSub = props.navigation.addListener("focus", loadEvents);

        return () => {
            onFocusSub;
        };
    }, [loadEvents]);

    useEffect(() => {
        loadEvents();
    }, [dispatch, loadEvents]);

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
                    onPress={loadEvents}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (!isLoading && events.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>There is no any event for you now!</Text>
            </View>
        );
    }

    const selectItemHandler = (id, title) => {
        props.navigation.navigate("EventDetails", {
            eventId: id,
            eventTitle: title,
        });
    };

    return (
        <FlatList
            data={events}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <EventItem
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
                </EventItem>
            )}
        />
    );
};

export default EventList;

export const screenOptions = (navData) => {
    const dispatch = useDispatch();

    return {
        headerTitle: "Events",
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Logout"
                    iconName="logout"
                    onPress={() => {
                        authActions;
                        dispatch(authActions.logout());
                    }}
                />
            </HeaderButtons>
        ),
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
