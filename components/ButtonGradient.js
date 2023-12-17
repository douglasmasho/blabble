import { TouchableOpacity, Text } from "react-native";
import {Buttons} from "../styles/styles";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../styles/Colors";

const Button = ({color, icon, handlePress, text}) => {

    return (
        <TouchableOpacity handlePress={handlePress} style={Buttons.buttonFullWidth}>
            <LinearGradient
        // Button Linear Gradient
        colors={[Colors.blue, Colors.darkBlue]}
        start={{x:1,y: 1}}
        end={{x:0, y:0}}
        style={Buttons.background}>
            <Text style={Buttons.buttonText}>{text}</Text>
        </LinearGradient>
            
        </TouchableOpacity>
    )
}

export default Button
