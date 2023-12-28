import React from 'react'
import {View, Text, SafeAreaView} from "react-native";
import {Stack, useRouter, Link, Redirect} from "expo-router";
import {PageStyles} from "../styles/styles";



const Home = () => {
    console.log(PageStyles)
    return (
       
         
            <Redirect href="Home"/>

    )
}

export default Home
