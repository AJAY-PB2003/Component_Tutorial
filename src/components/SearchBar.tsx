import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native';
import { CustomIcon } from './CustomIcon';

const SearchBar = forwardRef(
  ({ placeholder, onClear, onChangeText, onSubmit }, ref) => {
    const inputRef = useRef();
    const [errorMsg, setErrorMsg] = useState(null);

    useImperativeHandle(ref, () => ({
      focus() {
        inputRef?.current?.focus();
      },
      clear() {
        inputRef?.current?.clear();
      },
      setError(msg?: string) {
        if (msg) {
          setErrorMsg(msg);
        } else {
          setErrorMsg(null);
        }
      },
    }));

    return (
      <View style={searchBarStyles.container}>
        <View
          style={[
            searchBarStyles.searchBarContainer,
            errorMsg ? { borderColor: 'red' } : null,
          ]}>
          <TextInput
            ref={inputRef}
            style={searchBarStyles.textBar}
            placeholder={placeholder}
            autoCapitalize="none"
            onChangeText={onChangeText}
            onSubmitEditing={onSubmit}
          />
          <Pressable style={searchBarStyles.clearButton} onPress={onClear}>
            <CustomIcon
              iconName={'close-circle'}
              color={'grey'}
              iconSize={25}
            />
          </Pressable>
        </View>
        {errorMsg ? (
          <Text style={searchBarStyles.errorText}>{errorMsg}</Text>
        ) : null}
      </View>
    );
  },
);

const searchBarStyles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  searchBarContainer: {
    // paddingTop: 5,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // flex:1
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 12,
  },
  textBar: {
    // margin: 16,
    marginRight: 5,
    marginLeft: 10,
    paddingVertical: 10,
    // margin: 10,
    // padding: 10,
    // borderBlockColor: 'grey',
    // borderWidth: 2,
    // borderRadius: 15,
    flex: 1,
    fontSize: 17,
    // width:"90%"
  },
  clearButton: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    paddingLeft: 10,
    // paddingTop: 5,
    paddingVertical: 5,
    // fontFamily:'Roboto-Bold'
  },
});

export default SearchBar;
