import { Tabs, Stack, Link } from "expo-router"
import { Text } from "react-native"
import Colors from "../../styles/Colors"

export default ()=>{
    return ( 
    
    <Tabs name="tabs">
        <Tabs.Screen name="Home" options={{headerTitleAlign: "center", headerShadowVisible: false, headerTitleStyle:{fontFamily: "MMedium", color: Colors.blue}}}/>
        <Tabs.Screen name="Search" options={{headerTitleAlign: "center", headerShadowVisible: false, headerTitleStyle:{fontFamily: "MMedium", color: Colors.blue}}}/>
        <Tabs.Screen name="Account" options={{headerTitleAlign: "center", headerShadowVisible: false, headerTitleStyle:{fontFamily: "MMedium", color: Colors.blue}}}/>
    </Tabs>)


}