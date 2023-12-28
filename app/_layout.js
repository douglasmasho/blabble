import {Stack} from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Layout = ()=>{
    let [fontsLoaded] = useFonts({
        "MRegular": require("../assets/fonts/Montserrat-Regular.ttf"),
        "MMedium": require("../assets/fonts/Montserrat-Medium.ttf"),
        "MBold": require("../assets/fonts/Montserrat-Bold.ttf"),
      });

      console.log(fontsLoaded);

   if(!fontsLoaded){
    return <AppLoading/>
   }

    return <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
}


export default Layout;