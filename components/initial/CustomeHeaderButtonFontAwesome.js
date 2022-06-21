import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const CustomHeaderButtonFontAwesome = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={FontAwesome5}
            iconSize={23}
            color={Platform.OS === "android" ? "black" : Colors.primary}
        />
    );
};

export default CustomHeaderButtonFontAwesome;
