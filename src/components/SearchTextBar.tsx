import React, { useState } from 'react';
import { TextInput, Alert, View, StyleSheet } from 'react-native';
function SearchTextBar() {
  const [searchName, setSearchName] = useState('');
  const onSubmit = () => {
    Alert.alert(`Looking for ${searchName}`);
  };
  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={{
          margin: 10,
          padding: 10,
          borderBlockColor: 'black',
          borderWidth: 2,
          flex: 1,
        }}
        placeholder="type your search here"
        value={searchName}
        onChangeText={setSearchName}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
}

const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // flex:1
  },
});

export default SearchTextBar;
