import {SafeAreaView, TextareaHTMLAttributes, View, Text, Image, ScrollView} from 'react-native'
import {PageStyles, LoginPage, Typography, Utilities} from '../styles/styles';

import { Stack, Link } from 'expo-router';
import logo from "../assets/img/logo.png";
import Input from '../components/Input';
import { SimpleLineIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import Colors from "../styles/Colors";
import Button from '../components/ButtonGradient';
import ButtonBlack from '../components/ButtonBlack';



const Login = () => {
    const Envelope = (<SimpleLineIcons name="envelope" size={24} color={Colors.blue} />);
    const Lock = (<SimpleLineIcons name="lock" size={24} color={Colors.blue} />);
    const LoginIcon = <AntDesign name="login" size={24} color={Colors.white} style={Utilities.margin}/>;
    const Google = <MaterialCommunityIcons name="google" size={24} color={Colors.white} style={Utilities.margin}/>
    const User = <AntDesign name="user" size={24} color={Colors.blue} style={Utilities.margin} />
    return (
        <ScrollView>

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
            <Text style={[Typography.header, Utilities.marginBottomBig]}>Sign Up</Text>
            <Input Icon={User} placeholder={"Username"} secureEntry={false} keyboardType={"default"}/>
            <Input Icon={Envelope} placeholder={"Email"} secureEntry={false} keyboardType={"email-address"}/>
            <Input Icon={Lock} placeholder={"Password"} secureEntry={true}/>
            <Input Icon={Lock} placeholder={"Confirm Password"} secureEntry={true}/>
            <View style={Utilities.marginBottomBig}>
            <Button text="Sign Up" Icon={LoginIcon}/>
            </View>
            <Text style={[Typography.centerText, Typography.boldText, Typography.biggerText, Utilities.marginBottomBig]}>OR</Text>
            <View style={Utilities.marginBottom}>
            <ButtonBlack text="Sign In With Google" Icon={Google}/>
            </View>
            <Text style={[Typography.centerText, Typography.normalText]}>Already have an account? <Link href="/login" style={Typography.blueText}>Sign In</Link></Text>
            
        </SafeAreaView>
        </ScrollView>

    )
}

export default Login
