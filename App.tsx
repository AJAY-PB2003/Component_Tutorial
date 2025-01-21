import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/card';
import ElevatedCard from './src/components/elevatedCard';
import UserCard from './src/components/UserCard';
import ListContainer from './src/components/ListContainer';
import SearchTextBar from './src/container/SearchTextBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




function App(): React.JSX.Element {

  // imagePressIn();
  function imagePress() {
    console.log('Image Pressed successfully');

  }
  function imagePressIn() {
    console.log('Image Pressed In successfully');

  }
  function imagePressOut() {
    console.log('Image Pressed Out successfully');

  }
  function imageLongPress() {
    console.log('Image Long Pressed successfully');

  }
  function buttonPress() {
    Alert.alert('Button Pressed successfully');

  }
  const flexBoxPress = (boxNumber) => {
    Alert.alert(`Flexbox ${boxNumber} pressed`);
  }



  return (

    <SafeAreaView style={{ flex: 1 }}>
      <Icon name='chevron-right' size={100} />

      <SearchTextBar />
      <ListContainer />
      {/* <UserCard></UserCard> */}
      {/* <ElevatedCard /> */}
      {/* <Card /> */}
      {/* Text properties
      <View>
        <Text style={styles.sectionTitle}>hello ,how are you</Text>
        <Text style={styles.text1} accessibilityHint='name' aria-disabled>My name is Ajay</Text>
        <Text style={styles.text2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum suscipit natus repellat incidunt debitis doloremque, odio rerum animi. Praesentium laudantium repellendus dolor asperiores! Tempore obcaecati aspernatur ipsam debitis sint assumenda?

        </Text>
      
      </View>
      <View style={styles.view2}>
        <Text style={styles.text2}>PolicyBazaar</Text>

      </View>
      <View style={styles.flexView}>
        <Pressable 
        onPressIn={imagePressIn}
        onPressOut={imagePressOut}
        onLongPress={imageLongPress}
        onPress={imagePress}>
        <Image 
        style={styles.image1}
        src='https://reactnative.dev/img/tiny_logo.png'/>
        </Pressable>
        <Text style={styles.text1}> App Development </Text>
      </View>
      <View style={styles.view2}>
      <Button 
      title="ClickMe"
      onPress={buttonPress}
      color="#f194ff"
      
      ></Button>
      </View>
      <View>
        <TouchableHighlight 
        onPress={buttonPress}
        underlayColor={'white'}
        style={styles.touchableButton}> 
        <Text style={styles.text3}>Press me</Text>
        
        </TouchableHighlight>
      </View> */}
      {/* Flexbox */}
      {/* <View style={flexstyles.container}>
        <View style={[{ backgroundColor: 'blue',}, flexstyles.box]}>
          <Text style={flexstyles.text}>Box1</Text>
        </View>
        <View style={[{ backgroundColor: 'red',}, flexstyles.box]}>
          <Text style={flexstyles.text}>Box2</Text>
        </View>
        <View style={[{ backgroundColor: 'plum',}, flexstyles.box]}>
          <Text style={flexstyles.text}>Box3</Text>
        </View>
        <View style={[{ backgroundColor: 'green', }, flexstyles.box]}>
          <Text style={flexstyles.text}>Box4</Text>
        </View>
        <View style={[{ backgroundColor: 'yellow',}, flexstyles.box]}>
        <Pressable onPress={()=>flexBoxPress(5)}>
          <Text style={flexstyles.text}>Box5</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: 'pink',}, flexstyles.box]}>
          <Pressable onPress={()=>flexBoxPress(6)}>
          <Text style={flexstyles.text}>Box6</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: 'yellow',}, flexstyles.box]}>
        <Pressable onPress={()=>flexBoxPress(7)}>
          <Text style={flexstyles.text}>Box7</Text>
          </Pressable>
        </View>
        <View style={[{ backgroundColor: 'yellow',}, flexstyles.box]}>
        <Pressable onPress={()=>flexBoxPress(8)}>
          <Text style={flexstyles.text}>Box8</Text>
          </Pressable>
        </View>

      </View> */}
    </SafeAreaView>
  );
}

const flexstyles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    // justifyContent: 'space-between',
    // alignItems:'center',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    // rowGap:20,
    // columnGap:20,
    // gap:50,
    // position:'relative',

  },
  box: {
    height: 200,
    width: 100,
    // flexBasis:100,

    justifyContent: 'center'

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
const styles = StyleSheet.create({
  text3: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  touchableButton: {
    backgroundColor: 'black',
    width: 200,
    height: 40,
    padding: 10,
    borderRadius: 25,

    alignSelf: 'center'

  },
  flexView: {
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',

  },
  image1: {
    height: 200,
    width: 150,
    borderColor: 'red',
    borderWidth: 5


  },

  text1: {
    fontSize: 25,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    textAlign: 'center'


  },
  text2: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: '800',
    fontStyle: 'italic',
    padding: 20,
    margin: 10,
    textAlign: 'center',

  },
  view2: {
    backgroundColor: 'grey',
    borderRadius: 32,
    margin: 10,
    elevation: 50,

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'blue'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'red',
    backgroundColor: 'orange'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
