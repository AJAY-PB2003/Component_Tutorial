import React from 'react';
import { TextInput, Alert, View, StyleSheet } from 'react-native';

function SearchTextBar({ onChangeText }) {
  const onSubmit = () => {
    Alert.alert(`Checking ...`);
  };
  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.textBar}
        placeholder="Search the recipe here"
        autoCapitalize={'none'}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        clearButtonMode="while-editing"
      />
    </View>
  );
}

const searchBarStyles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // flex:1
  },
  textBar: {
    // margin: 16,
    marginRight: 16,
    marginLeft: 16,
    margin: 10,
    padding: 10,
    borderBlockColor: 'grey',
    borderWidth: 2,
    borderRadius: 15,
    flex: 1,
    fontSize: 17,
  },
});

export default SearchTextBar;
