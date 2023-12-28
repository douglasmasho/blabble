import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Stack , useGlobalSearchParams} from 'expo-router';

const Id = () => {
    const {id} = useGlobalSearchParams();
    return (
        <View>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <Text>{id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Id;
