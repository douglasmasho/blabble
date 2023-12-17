import { TouchableOpacity, Text } from "react-native";
import {Buttons} from "../styles/styles";

const Button = ({color, icon, handlePress, text}) => {

    return (
        <TouchableOpacity handlePress={handlePress} style={Buttons.buttonFullWidth}>
            <Text style={Buttons.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
