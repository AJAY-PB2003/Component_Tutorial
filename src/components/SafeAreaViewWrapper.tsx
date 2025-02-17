import { StyleSheet, View } from 'react-native';
import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';

export default function SafeAreaViewWrapper({ children }) {
  return <SafeAreaView style={styles.main}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
