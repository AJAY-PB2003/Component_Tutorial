import React, { useState } from 'react'
import { TextInput, Alert, View, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function SearchTextBar() {
    const { height, width } = useWindowDimensions();

    const [searchName, setSearchName] = useState('')
    return (
        <View style={searchBarStyles.container}>
            {/* <Icon name="account" /> */}





            <TextInput
                style={{ margin: 10, padding: 10, borderBlockColor: 'black', borderWidth: 2, flex: 1 }}
                placeholder='type your search here'
                value={searchName}
                onChangeText={(text) => setSearchName(text)}
                onSubmitEditing={(text) => Alert.alert(`Looking for ${searchName}`)}

            />

        </View>

    )

}

const searchBarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // flex:1
    }

})

export default SearchTextBar