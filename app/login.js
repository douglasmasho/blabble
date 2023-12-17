import {SafeAreaView, TextareaHTMLAttributes, View, Text, Image} from 'react-native'
import {PageStyles, LoginPage, Typography, Utilities} from '../styles/styles';
import { Stack, Link } from 'expo-router';
import logo from "../assets/img/logo.png";
import Input from '../components/Input';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons'; 
import Colors from "../styles/Colors";
import Button from '../components/ButtonGradient';


const Login = () => {
    const Envelope = (<SimpleLineIcons name="envelope" size={24} color={Colors.blue} />);
    const Lock = (<SimpleLineIcons name="lock" size={24} color={Colors.blue} />)
    return (
        <SafeAreaView style={PageStyles.pageNoHeader}>
            <Stack.Screen
            options={{
                headerShown: false
            }}
            />
            <View style={[LoginPage.logoContainer, Utilities.marginBottom]}>
                <Image 
                source={logo}
                style={LoginPage.logo}/>
            </View>
            <Text style={[Typography.header, Utilities.marginBottomBig]}>Log In</Text>
            
            <Input Icon={Envelope} placeholder={"Email"} secureEntry={false} keyboardType={"email-address"}/>
            <Input Icon={Lock} placeholder={"Password"} secureEntry={true}/>
            <Button text="Log In"/>
        </SafeAreaView>
    )
}

export default Login
