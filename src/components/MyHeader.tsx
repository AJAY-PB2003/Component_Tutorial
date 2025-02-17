import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { CustomIcon } from './CustomIcon';

function MyHeader({ onPress, title = 'Home', iconName = 'dots-grid' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> {title}</Text>
      <Pressable style={styles.iconContainer} onPress={onPress}>
        <CustomIcon iconName={iconName} color={'black'} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 16,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 23,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
});

export default MyHeader;
