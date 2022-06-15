import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const EventItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: props.item.venueImage }}
              />
              <Text style={styles.dateText}>{props.item.date}</Text>
            </View>
            <View style={styles.details}>
              <View style={styles.titleBlock}>
                <Text style={styles.title}>{props.item.customer}</Text>
                <Text style={styles.title}>{props.item.artist}</Text>
              </View>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 280,
    margin: 20,
  },
  titleBlock: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // gap: "20px",
    // borderWidth: 5,
    width: "90%",
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  dateText: {
    backgroundColor: "white",
    position: "absolute",
    margin: 10,
    padding: 5,
    borderRadius: 5,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  bottomTitle: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});

export default EventItem;
