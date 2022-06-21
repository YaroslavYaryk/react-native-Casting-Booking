import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerItemList,
} from "@react-navigation/drawer";
import EventList from "../screens/EventsList";
import EventDetails from "../screens/EventDetails";
import EventProducts from "../screens/EventProducts";
import { screenOptions as eventListOptions } from "../screens/EventsList";
import { screenOptions as eventDetailsOptions } from "../screens/EventDetails";
import { screenOptions as eventProductsOptions } from "../screens/EventProducts";
const EventStackNavigator = createStackNavigator();
import Login from "../screens/Auth/Login";
import Registration from "../screens/Auth/Registration";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import * as authActions from "../booking/actions/Auth";
import { Platform, SafeAreaView, Button, View } from "react-native";
import UserProfile from "../screens/Auth/UserProfile";
import { screenOptions as UserProfileOptions } from "../screens/Auth/UserProfile";

export const EventNavigator = () => {
    return (
        // <NavigationContainer>
        <EventStackNavigator.Navigator>
            <EventStackNavigator.Screen
                name="Event List"
                component={EventList}
                options={eventListOptions}
            />
            <EventStackNavigator.Screen
                name="EventDetails"
                component={EventDetails}
                options={eventDetailsOptions}
            />
            <EventStackNavigator.Screen
                name="EventProducts"
                component={EventProducts}
                options={eventProductsOptions}
            />
            <EventStackNavigator.Screen
                name="UserProfile"
                component={UserProfile}
                options={UserProfileOptions}
            />
        </EventStackNavigator.Navigator>
        // </NavigationContainer>
    );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
    return (
        // <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
        <AuthStackNavigator.Navigator>
            <AuthStackNavigator.Screen
                name="Login"
                component={Login}
                // options={authScreenOptions}
            />
            <AuthStackNavigator.Screen
                name="Registration"
                component={Registration}
                // options={authScreenOptions}
            />
        </AuthStackNavigator.Navigator>
    );
};

const EventDrawerNavigator = createDrawerNavigator();

export const EventNavigatorDrawer = () => {
    const dispatch = useDispatch();

    return (
        <EventDrawerNavigator.Navigator
            drawerContent={(props) => {
                return (
                    <View style={{ flex: 1, paddingTop: 50 }}>
                        <SafeAreaView
                            forceInset={{ top: "always", horizontal: "never" }}
                        >
                            <DrawerItemList {...props} />
                            <Button
                                title="Logout"
                                color={Colors.primaryColor}
                                onPress={() => {
                                    dispatch(authActions.logout());
                                    // props.navigation.navigate('Auth');
                                }}
                            />
                        </SafeAreaView>
                    </View>
                );
            }}
            screenOptions={{
                drawerActiveTintColor: Colors.danger,
                headerShown: false,
            }}
        >
            <EventDrawerNavigator.Screen
                name="Events"
                component={EventNavigator}
                options={{
                    drawerIcon: (props) => (
                        <Ionicons
                            name={
                                Platform.OS === "android"
                                    ? "md-cart"
                                    : "ios-cart"
                            }
                            size={23}
                            color={props.color}
                        />
                    ),
                }}
            />
        </EventDrawerNavigator.Navigator>
    );
};
