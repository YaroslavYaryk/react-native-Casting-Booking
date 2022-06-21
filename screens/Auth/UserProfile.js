import React, { useEffect, useState, useCallback, useReducer } from "react";
import {
    View,
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
    Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButtonFontAwesome from "../../components/initial/CustomeHeaderButtonFontAwesome";
import Colors from "../../constants/Colors";
import { fetchUserData } from "../../booking/actions/Users";
import { HOST, PORT } from "../../constants/server";
import { eventImage } from "../../constants/Image";
import ShadowBlock from "../../components/ShadowBlock";
import UserInfo from "../../components/initial/UserInfo";

const UserProfile = (props) => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(error);
        if (error) {
            Alert.alert("An Error Occured", error, [
                { text: "Okay", onPress: setError(null) },
            ]);
        }
    }, [error]);

    const loadUser = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(fetchUserData());
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        }
        setIsLoading(false);
    }, [dispatch, setError, setIsLoading]);

    useEffect(() => {
        loadUser();
    }, [dispatch, loadUser]);

    const userDetails = useSelector((state) => state.user.userDetails);

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
                    onPress={loadUser}
                    color={Colors.primary}
                />
            </View>
        );
    }

    return (
        userDetails && (
            <ScrollView>
                <View style={styles.imageContainer}>
                    {userDetails.picture ? (
                        <Image
                            style={styles.image}
                            source={{
                                uri: `${HOST}:${PORT}${userDetails.picture}`,
                            }}
                        />
                    ) : (
                        <Image
                            style={styles.image}
                            source={{
                                uri: eventImage,
                            }}
                        />
                    )}
                </View>
                <ShadowBlock style={{ marginBottom: 10 }}>
                    <View style={styles.eventInfoTitleWrapper}>
                        <Text style={styles.eventInfoTitle}>
                            {" "}
                            Profile Settings
                        </Text>
                    </View>
                    <UserInfo userDetails={userDetails} />
                </ShadowBlock>
            </ScrollView>
        )
    );
};

export const screenOptions = (navData) => {
    // console.log(userDetail);
    return {
        headerTitle: "User Profile",
        headerRight: () => (
            <HeaderButtons
                HeaderButtonComponent={CustomHeaderButtonFontAwesome}
            >
                <Item
                    title="User Edit"
                    iconName="user-edit"
                    onPress={() => {
                        navData.navigation.navigate("UserProfile");
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "99%",
        height: 300,
        borderRadius: 20,
    },
    eventInfoTitleWrapper: {
        marginTop: 5,
        marginHorizontal: 10,
        // marginBottom: -5,
        borderBottomColor: "white",
        borderBottomWidth: 2,
    },
    eventInfoTitle: {
        fontSize: 20,
    },

    eventTeam: {
        marginBottom: 10,
        padding: 10,
    },
    eventArtistTeam: {
        marginBottom: 20,
        padding: 10,
    },
    eventProducts: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "98%",
    },
    eventProductsButton: {
        backgroundColor: Colors.success,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 10,
    },
    eventProductsButtonText: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 10,
        color: "grey",
        fontWeight: "700",
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default UserProfile;
