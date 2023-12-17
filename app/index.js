import React from 'react'
import {View, Text, SafeAreaView} from "react-native";
import {Stack, useRouter, Link} from "expo-router";
import {PageStyles} from "../styles/styles";



const Home = () => {
    console.log(PageStyles)
    return (
        <SafeAreaView style={PageStyles.page}>
            <Stack.Screen
            options={
                {
                    headerTitle: "Home",
                    headerStyle: {
                        backgroundColor: "#fff"
                    },
                    headerShadowVisible: false
                }
            }/>
            <Text>Hello</Text>
            <Link href="/login">Go to Test</Link>
        </SafeAreaView>
    )
}

export default Home
