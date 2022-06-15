import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import EventList from "../screens/EventsList";
import EventDetails from "../screens/EventDetails";
import EventProducts from "../screens/EventProducts";
import { screenOptions as eventListOptions } from "../screens/EventsList";
import { screenOptions as eventDetailsOptions } from "../screens/EventDetails";
import { screenOptions as eventProductsOptions } from "../screens/EventProducts";
const EventStackNavigator = createStackNavigator();

export const EventNavigator = () => {
    return (
        <NavigationContainer>
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
            </EventStackNavigator.Navigator>
        </NavigationContainer>
    );
};
