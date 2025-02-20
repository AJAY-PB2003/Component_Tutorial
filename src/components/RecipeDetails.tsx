import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function RecipeDetails({ title, imgUrl, instructions, ingredients }) {
  return (
    <View style={userDetailsStyles.container}>
      <Image style={userDetailsStyles.image} src={imgUrl} />

      <Text style={[userDetailsStyles.title]}>{title}</Text>

      <View style={userDetailsStyles.infoContainer}>
        <Text style={userDetailsStyles.heading}>Instructions</Text>
        <Text style={userDetailsStyles.normalText}>{instructions}</Text>
        <Text style={userDetailsStyles.heading}>Ingredients</Text>
        <Text style={userDetailsStyles.normalText}>{ingredients}</Text>
      </View>
    </View>
  );
}

const userDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 15,
  },
  infoContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    paddingTop: 10,

    padding: 16,
    marginTop: 20,
    // alignItems:'center',
  },
  aboutContainer: {
    // margin:4
  },
  reviewContainer: {
    paddingTop: 16,
  },
  title: {
    fontSize: 25,
    padding: 16,
    fontFamily: 'Roboto-Bold',
  },
  subTitle: {
    fontSize: 18,
    padding: 3,
    // fontFamily: 'Merriweather-Regular',
    fontFamily: 'Roboto-Bold',
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  normalText: {
    fontSize: 15,
    fontFamily: 'Merriweather-Regular',
    // textAlign:'center'
  },
});

export default RecipeDetails;
