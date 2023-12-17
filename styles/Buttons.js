import { StyleSheet } from "react-native";
import Colors from "./Colors";
import generateBoxShadowStyle from "../utils/generateboxshadow";

const shadow = generateBoxShadowStyle(0,4,"#000",.12,12,10)

const Buttons = StyleSheet.create({
    buttonFullWidth: {
        width: "100%",
        backgroundColor: Colors.blue,
        // marginRight: SIZES.small,
        justifyContent: "center",
        paddingHorizontal: 15,
        alignItems: "center",
        borderRadius: 15,
        ...shadow,
        flexDirection: "row",
        height: 55,
        // position: "relative",
        overflow: "hidden"
    },

    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600"
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
});

export default Buttons;