import React, { useEffect, useState, useCallback, useReducer } from "react";
import {
    View,
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
    Button,
} from "react-native";
import Input from "../../components/initial/Input";
import Colors from "../../constants/Colors";
import { useDispatch } from "react-redux";
import * as authActions from "../../booking/actions/Auth";

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

const Login = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [diabledButton, setDisabledButton] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(error);
        if (error) {
            Alert.alert("An Error Occured", error, [
                { text: "Okay", onPress: setError(null) },
            ]);
        }
    }, [error]);

    useEffect(() => {
        if (formState.formIsValid) {
            console.log("here");
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
    });

    const authHandler = async () => {
        setError(null);
        let action;

        action = authActions.login(
            formState.inputValues.email,
            formState.inputValues.password
        );
        setIsLoading(true);
        try {
            await dispatch(action);
            // props.navigation.navigate("Shop");
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
    };

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

    const redirectToRegistration = () => {
        props.navigation.navigate("Registration");
    };

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.titleBlockOuter}>
                    <View style={styles.titleBlock}>
                        <Text style={styles.titleText}>Login</Text>
                        <View style={styles.titleBlockRegLink}>
                            <Text style={styles.titleBlockRegLinkText}>or</Text>
                            <TouchableOpacity
                                style={styles.titleBlockRegLinkLink}
                                onPress={redirectToRegistration}
                            >
                                <Text style={styles.titleBlockRegLinkLinkText}>
                                    Create account
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.inputWrapper}>
                    <ScrollView style={styles.inputBlock}>
                        <Input
                            id="email"
                            label="E-Mail"
                            keyboardType="email-address"
                            required
                            secureTextEntry={false}
                            email
                            autoCapitalize="none"
                            errorText="Please enter a valid email address."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            login={true}
                        />
                        <Input
                            id="password"
                            label="Password"
                            keyboardType="default"
                            secureTextEntry={true}
                            required
                            password
                            minLength={8}
                            autoCapitalize="none"
                            errorText="Please enter a valid password."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                            login={true}
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
                                onPress={authHandler}
                                disabled={diabledButton}
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
        height: 300,
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
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Login;
