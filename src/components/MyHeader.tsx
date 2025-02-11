import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function MyHeader({ navigation }) {
  const onPress = () => {
    // console.log(navigation.toggleDrawer);
    navigation.toggleDrawer();
  };
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={onPress}>
        <Icon  name="dots-grid" size={30} />
      </Pressable>
      <Text style={styles.heading}> Home</Text>
    </View>
    //  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'lightgrey',
    // borderRadius:5
  },
  icon: {
    // paddingLeft: 16,
    position:'absolute',
    left:16
  },
  heading: {
    fontSize: 23,
    fontFamily:'Roboto-Bold'

  },
});

export default MyHeader;
