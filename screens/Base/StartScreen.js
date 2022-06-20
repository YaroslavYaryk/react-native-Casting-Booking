import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch } from "react-redux";

import Colors from "../../constants/Colors";
import * as authActions from "../../booking/actions/Auth";

const StartupScreen = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem("userData");
            if (!userData) {
                dispatch(authActions.setDidTryAL());
                // props.navigation.navigate("Auth");
                return;
            }
            const transformedData = JSON.parse(userData);
            const { token, expiryDate } = transformedData;
            const expirationDate = new Date(expiryDate);

            if (expirationDate <= new Date() || !token) {
                // props.navigation.navigate("Auth");
                dispatch(authActions.setDidTryAL());
                return;
            }

            const expirationTime =
                expirationDate.getTime() - new Date().getTime();

            // props.navigation.navigate("Shop");
            dispatch(authActions.authenticate(token, expirationTime));
        };

        tryLogin();
    }, [dispatch]);

    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default StartupScreen;
