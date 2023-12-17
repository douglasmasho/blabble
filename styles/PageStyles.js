import { StyleSheet } from "react-native";
import Colors from "./Colors";
const PageStyles = StyleSheet.create({
    page: {
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        flex: 1
    },

    pageNoHeader: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 10,
        flex: 1
    }
});

export default PageStyles;