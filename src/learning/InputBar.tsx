import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputBar = forwardRef(function InputBar(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        clearText() {
          inputRef.current.clear();
        },
      };
    },
    [],
  );
  return (
    <TextInput
      style={styles.textBar}
      placeholder="Search the recipe here"
      autoCapitalize={'none'}
      // onChangeText={inputRefHandler}
      clearButtonMode="while-editing"
      ref={inputRef}
    />
  );
});
const styles = StyleSheet.create({
  textBar: {
    borderWidth: 2,
    margin: 16,
    padding: 5,
  },
});

export default InputBar;
