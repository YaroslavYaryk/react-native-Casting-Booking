import React, { useEffect, useCallback, useReducer } from "react";
import {
    View,
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Button,
} from "react-native";
import Input from "../../components/initial/Input";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues,
        };
    }
    return state;
};

const Registration = (props) => {
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: "",
            password: "",
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    });

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier,
            });
        },
        [dispatchFormState]
    );

    const redirectToLogin = () => {
        props.navigation.navigate("Login");
    };

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.titleBlockOuter}>
                    <View style={styles.titleBlock}>
                        <Text style={styles.titleText}>Registration</Text>
                        <View style={styles.titleBlockRegLink}>
                            <Text style={styles.titleBlockRegLinkText}>or</Text>
                            <TouchableOpacity
                                style={styles.titleBlockRegLinkLink}
                                onPress={redirectToLogin}
                            >
                                <Text style={styles.titleBlockRegLinkLinkText}>
                                    Sign in
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.inputWrapper}>
                    <ScrollView style={styles.inputBlock}>
                        <Input
                            id="firs_name"
                            label="First Name"
                            keyboardType="email-address"
                            required
                            firstName
                            autoCapitalize="none"
                            // errorText="Please enter a valid first name address."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                        />
                        <Input
                            id="last_name"
                            label="Last Name"
                            keyboardType="email-address"
                            required
                            lastName
                            autoCapitalize="none"
                            errorText="Please enter a valid last name address."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                        />
                        <Input
                            id="email"
                            label="E-Mail"
                            keyboardType="email-address"
                            required
                            email
                            autoCapitalize="none"
                            // errorText="Please enter a valid email address."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                        />
                        <Input
                            id="password"
                            label="Password"
                            keyboardType="default"
                            secureTextEntry
                            required
                            minLength={8}
                            autoCapitalize="none"
                            errorText="Please enter a valid password."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                        />
                        <View style={styles.buttonContainer}>
                            {/* {isLoading ? (
                            <ActivityIndicator
                                size="small"
                                color={Colors.primaryColor}
                            />
                        ) : ( */}
                            <Button
                                title="Login"
                                color={Colors.primary}
                                // onPress={authHandler}
                            />
                            {/* )} */}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        height: 450,
        width: 300,
        backgroundColor: "white",
        borderRadius: 30,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 50,
    },
    titleBlockOuter: {
        alignItems: "center",
    },
    titleBlock: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
    },
    titleText: {
        fontSize: 20,
        fontFamily: "sans-serif",
        fontWeight: "600",
    },
    titleBlockRegLink: {
        flexDirection: "row",
    },
    titleBlockRegLinkText: {
        marginRight: 5,
    },
    titleBlockRegLinkLinkText: {
        color: "#7988FF",
    },
    inputWrapper: {
        alignItems: "center",
    },
    inputBlock: {
        width: "85%",
    },
});

export default Registration;
