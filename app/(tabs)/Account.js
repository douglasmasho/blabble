import { SafeAreaView, aView, Text } from 'react-native'
import React from 'react'
import PageStyles from '../../styles/PageStyles'
import { Link } from 'expo-router'

const Account = () => {
  return (
    <SafeAreaView style={PageStyles.page}>
      <Link href="../signup">Sign Up</Link>
      <Link href="../login">Sign In</Link>
    </SafeAreaView>
  )
}

export default Account