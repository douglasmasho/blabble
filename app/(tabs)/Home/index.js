import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
const Home = () => {
  return (
    
    <View>
      <Stack.Screen options={{
                headerShown: false
            }}/>
      <Text>Home</Text>
      <Link href="/Home/test/1">Test route</Link>
      <Link href="/Home/test/2">Test route 2</Link>

    </View>
  )
}

export default Home