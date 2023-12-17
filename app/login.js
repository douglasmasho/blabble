import {SafeAreaView, TextareaHTMLAttributes, View, Text, Image} from 'react-native'
import {PageStyles, LoginPage, Typography, Utilities} from '../styles/styles';
import { Stack, Link } from 'expo-router';
import logo from "../assets/img/logo.png";
const Login = () => {
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
            <Text style={Typography.header}>Log In</Text>
            
        </SafeAreaView>
    )
}

export default Login
