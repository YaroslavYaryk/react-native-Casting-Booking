import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import ProductNavigator from "../navigation/ProductNavigator";
import StartupScreen from "../screens/Base/StartScreen";
import {
    AuthNavigator,
    EventNavigator,
    EventNavigatorDrawer,
} from "./CastingNavigator";

const AppNavigator = () => {
    const isAuth = useSelector((state) => !!state.auth.token);
    const didTryAuth = useSelector((state) => state.auth.didTryToLogin);
    return (
        <NavigationContainer>
            {isAuth && <EventNavigatorDrawer />}
            {!isAuth && didTryAuth && <AuthNavigator />}
            {!isAuth && !didTryAuth && <StartupScreen />}
        </NavigationContainer>
    );
};

export default AppNavigator;
