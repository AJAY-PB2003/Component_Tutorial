import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View, Image, Text, Alert } from 'react-native'

function ElevatedCard() {
    const [name, setName] = useState<string>('User');

    const helloMessage = () => {
        Alert.alert(`Hello ${name}, Welcome to PolicyBazaar `)
    }

    return (
        <View style={elevatedCardstyles.container}>
            <View style={elevatedCardstyles.imageContainer}>
                <Image
                    style={elevatedCardstyles.image}
                    src='https://static.pbcdn.in/cdn/images/home/og_pb_logo.png'
                ></Image>
            </View>
            <View style={elevatedCardstyles.container2}>
                <View style={elevatedCardstyles.inputContainer}>
                    <TextInput
                        style={elevatedCardstyles.textInput}
                        placeholder='Enter your Name'
                        keyboardType='email-address'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    ></TextInput>
                    <Pressable
                        onPress={helloMessage}>
                        <View style={elevatedCardstyles.buttonContainer}>
                            <Text style={elevatedCardstyles.buttonText}>Join Us</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={elevatedCardstyles.footerContainer} ></View>
            </View>

        </View>
    );
}

const elevatedCardstyles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        // margin:15,
        padding: 15,
        height: '27%',
        width: '100%',
        // objectFit:'contain',
        // borderRadius:200

    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 40
    },
    container2: {
        flex: 1,
        // justifyContent: 'space-between',
        // position: 'relative',


    },
    inputContainer: {
        top: 10,
        backgroundColor: 'lightskyblue',
        // margin: 20,
        // padding:10,
        height: '50%',
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 30,
        zIndex:10

    },
    textInput: {
        // padding:20,
        height: 40,
        width: '60%',
        backgroundColor: 'white',
        borderRadius: 15,

    },
    buttonContainer: {
        backgroundColor: 'navy',
        width: '50%',
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 17,
        color: 'white'

    },
    footerContainer: {
        // top: 50,
        // position:'absolute',
        height: 500,
        width: '100%',
        backgroundColor: 'dodgerblue',
        zIndex:-10
    }
});

export default ElevatedCard;