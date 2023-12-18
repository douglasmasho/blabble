import { TouchableOpacity, Text } from "react-native";
import {Buttons} from "../styles/styles";

const Button = ({color, Icon, handlePress, text}) => {

    return (
        <TouchableOpacity handlePress={handlePress} style={Buttons.buttonFullWidth}>
            {Icon}
            <Text style={Buttons.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
