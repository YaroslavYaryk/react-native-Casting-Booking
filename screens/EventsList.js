import React, { Component, useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import EventItem from "../components/eventItem";
import Colors from "../constants/Colors";

const EventList = (props) => {
  const events = useSelector((state) => state.events.userEvents);

  const selectItemHandler = (id, title) => {
    props.navigation.navigate("EventDetails", {
      eventId: id,
      eventTitle: title,
    });
  };

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <EventItem
          item={itemData.item}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <View style={styles.content}>
            <View></View>
            <Button
              style={styles.buttonStyle}
              color={Colors.primary}
              title="View Details"
              onPress={() => {
                selectItemHandler(
                  itemData.item.id,
                  `${itemData.item.customer} - ${itemData.item.artist}`
                );
              }}
            />
          </View>
        </EventItem>
      )}
    />
  );
};

export default EventList;

export const screenOptions = (navData) => {
  return {
    headerTitle: "Events",
  };
};

const styles = StyleSheet.create({
  content: {
    // flex: 0.5,
    flexDirection: "row",
    // display: "flex",
    width: "100%",
    justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: 10,
  },
  buttonStyle: {
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "grey",
    fontSize: "30px",
  },
});
