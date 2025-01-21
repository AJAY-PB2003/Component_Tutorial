import React from 'react';
import { Image, StyleSheet, View, Text, Button, Alert, TextInput, useWindowDimensions } from 'react-native';

function Card() {
    const { width, height } = useWindowDimensions()

    const welcomeFunction = () => {
        Alert.alert('Welcome to PolicyBazaaar')
    }
    return (

        <View style={cardStyles.cardContainer}>
            <View style={{ flex: 1 }}>
                <Image
                    src='https://etimg.etb2bimg.com/photo/92142828.cms'
                    style={[cardStyles.image, { width: width - 48, height: (width - 48) * 0.75 }]}
                />
            </View>
            <View style={cardStyles.container2}>
                <Text style={cardStyles.title}>
                    Policybazaar was founded in 2008 with one objective: bringing transparency in insurance. The founders wanted to reimagine insurance, so they started by simplifying all the information around plans, ending the rampant mis-selling, and preventing policy lapses.
                </Text>
                {/* <TextInput
                style={cardStyles.textInput}
                numberOfLines={1}
                editable
                keyboardType='ascii-capable'
                maxLength={15}
                placeholder='Enter your Name'
                // onChangeText={}
                /> */}
                <View style={cardStyles.buttonContainer}>
                    <Button
                        title='Join'
                        color={'white'}
                        onPress={welcomeFunction}
                    />
                </View>
            </View>

        </View>

    );


}

const cardStyles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'blue',
        borderWidth: 4

    },
    image: {
        // height: 400,
        resizeMode: 'contain',
        // height:'90%',
        borderColor: 'grey',
        borderWidth: 5

    },
    container2: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 25,
        borderColor: 'black',
        borderWidth: 5,
        alignItems: 'center',


    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        borderColor: 'black',
        borderWidth: 5


    },
    textInput: {
        height: 30,
        width: 100,
        borderBottomColor: "black",
        borderBottomWidth: 2

    },
    buttonContainer: {
        backgroundColor: 'blue',
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 5,
        width: 100,
        // fontWeight:'900'
        // alignItems:'center',
        // justifyContent:'center',

    }
})

export default Card