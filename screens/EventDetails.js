import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import EventAddStaff from "../components/EventAddStaff";
import ShadowBlock from "../components/ShadowBlock";
import EventInfo from "../components/EventInfo";
import EventTimeClock from "../components/EventTimeClock";
import EventTeam from "../components/eventTeam";
import ArtistTeam from "../components/ArtistTeam";

const EventDetails = (props) => {
    const eventId = props.route.params.eventId;
    const selectedEvent = useSelector((state) =>
        state.events.userEvents.find((prod) => prod.id === eventId)
    );
    const eventTimeClock = useSelector(
        (state) => state.timeClocks.eventTimeClocks
    );
    const eventTeam = useSelector((state) => state.eventTeam.eventTeam);
    const eventArtistTeam = useSelector(
        (state) => state.eventArtistTeam.artistTeam
    );

    const eventProductRedirect = (id, title) => {
        props.navigation.navigate("EventProducts", {
            eventId: id,
            eventTitle: title,
        });
    };

    const dispatch = useDispatch();
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: selectedEvent.venueImage }}
                />
            </View>
            <ShadowBlock style={{ marginBottom: 10 }}>
                <View style={styles.eventInfoTitleWrapper}>
                    <Text style={styles.eventInfoTitle}> Event Info</Text>
                </View>
                <EventInfo selectedEvent={selectedEvent} />
            </ShadowBlock>
            <ShadowBlock style={{ marginBottom: 10, padding: 10 }}>
                <View style={styles.eventInfoTitleWrapper}>
                    <Text style={styles.eventInfoTitle}> Time Clock</Text>
                </View>
                <EventTimeClock eventTimeClock={eventTimeClock} />
            </ShadowBlock>
            <ShadowBlock style={styles.eventTeam}>
                <View style={styles.eventInfoTitleWrapper}>
                    <Text style={styles.eventInfoTitle}> Event Team</Text>
                </View>
                <EventTeam eventTeam={eventTeam} />
            </ShadowBlock>
            <ShadowBlock style={styles.eventArtistTeam}>
                <View style={styles.eventInfoTitleWrapper}>
                    <Text style={styles.eventInfoTitle}> Artist Team</Text>
                </View>
                <ArtistTeam artistTeam={eventArtistTeam} />
            </ShadowBlock>
            <ShadowBlock style={styles.eventArtistTeam}>
                <View style={styles.eventProducts}>
                    <Text style={styles.eventInfoTitle}> Event Products</Text>
                    <TouchableOpacity
                        style={styles.eventProductsButton}
                        onPress={() => {
                            eventProductRedirect(
                                eventId,
                                `${selectedEvent.customer} - ${selectedEvent.artist}`
                            );
                        }}
                    >
                        <Text style={styles.eventProductsButtonText}>
                            Products
                        </Text>
                    </TouchableOpacity>
                </View>
            </ShadowBlock>
        </ScrollView>
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: navData.route.params.eventTitle,
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
});

export default EventDetails;
