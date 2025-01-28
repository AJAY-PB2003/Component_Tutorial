import React from 'react'
import {Text,View} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import{Button} from '@react-navigation/elements'

function DetailsScreen({route}){
    const navigation=useNavigation();

    const {firstName}= route.params;
    return (
        <View>
            <Text>Welcome to Details Screen , {firstName}</Text>
            <Button onPress={()=> navigation.push('Details')}>
                Go to Details.. Again
            </Button>
            <Button onPressIn={()=> navigation.goBack()}>
                Go Back
            </Button>
            <Button onPressIn={()=> navigation.popTo('Home')}>
                Go to Home
            </Button>
        </View>
    )
}

export default DetailsScreen;