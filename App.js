import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import eventReducer from "./booking/reducers/eventReducer";
import eventTimeClockReducer from "./booking/reducers/eventTimeClockReducer";
import eventTeamReducer from "./booking/reducers/eventTeamReducer";
import eventArtistTeamReducer from "./booking/reducers/eventArtistTeamReducer";
import eventProductsReducer from "./booking/reducers/eventProductsReducer";
import AuthReducer from "./booking/reducers/AuthReducer";
import AppNavigator from "./navigation/AppNavigator";
import UserReducer from "./booking/reducers/UserReducer";

const rootReducer = combineReducers({
    events: eventReducer,
    timeClocks: eventTimeClockReducer,
    eventTeam: eventTeamReducer,
    eventArtistTeam: eventArtistTeamReducer,
    eventProducts: eventProductsReducer,
    auth: AuthReducer,
    user: UserReducer,
});

const booking = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                immutableCheck: false,
                serializableCheck: false,
            }),
    },
    applyMiddleware(ReduxThunk)
);

export default function App() {
    return (
        <Provider store={booking}>
            <AppNavigator />
        </Provider>
    );
}
