import React, { useReducer, useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid,
            };
        case INPUT_BLUR:
            return {
                ...state,
                touched: true,
            };
        default:
            return state;
    }
};

const Input = (props) => {
    const [error, setError] = useState(props.errorText);

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : "",
        isValid: props.initiallyValid,
        touched: false,
    });
    const { onInputChange, id } = props;

    useEffect(() => {
        if (inputState.touched) {
            onInputChange(id, inputState.value, inputState.isValid);
        }
    }, [inputState, onInputChange, id]);

    const textChangeHandler = (text) => {
        const emailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = true;
        if (props.required && text.trim().length === 0) {
            isValid = false;
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
            isValid = false;
        }
        if (!props.login) {
            if (props.minLength != null && text.length < props.minLength) {
                setError(`length is lower then ${props.minLength}`);
                isValid = false;
            }
            if (id === "password" && !/^[A-Za-z0-9]*$/.test(text)) {
                setError("only letters and numbers");
                isValid = false;
            }
        }

        dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
    };

    const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR });
    };
    if (id === "password") {
        console.log(error);
    }
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                {...props}
                style={styles.input}
                value={inputState.value}
                onChangeText={textChangeHandler}
                onBlur={lostFocusHandler}
            />
            {!inputState.isValid && inputState.touched && error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
            {!inputState.isValid && inputState.touched && !error && (
                <View style={styles.errorContainerLine}></View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    formControl: {
        width: "100%",
    },
    label: {
        fontFamily: "Roboto",
        marginVertical: 8,
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    errorContainer: {
        marginVertical: 5,
    },
    errorContainerLine: {
        borderWidth: 1,
        borderColor: "red",
    },
    errorText: {
        fontFamily: "Roboto",
        color: "red",
        fontSize: 13,
    },
});

export default Input;
