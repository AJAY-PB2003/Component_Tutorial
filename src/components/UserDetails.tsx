import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

function UserDetails({ imgUrl, name, address, aboutUs }) {
  const [review, setReview] = useState('');
  return (
    <View style={userDetailsStyles.container}>
      <View style={userDetailsStyles.basicInfoContainer}>
        <Image
          style={userDetailsStyles.image}
          src={imgUrl}
          width={100}
          height={100}
        />
        <View>
          <Text style={userDetailsStyles.normalText}>{name}</Text>
          <Text style={userDetailsStyles.normalText}>{address}</Text>
        </View>
      </View>
      <View style={userDetailsStyles.aboutContainer}>
        <Text style={userDetailsStyles.heading}>About User</Text>
        <Text style={userDetailsStyles.normalText}>{aboutUs}</Text>
      </View>
      <View style={userDetailsStyles.reviewContainer}>
        <Text style={userDetailsStyles.heading}>Review</Text>
        <TextInput
          style={userDetailsStyles.textInputBox}
          placeholder="Enter Your Review Here"
          value={review}
          onChange={(text) => setReview(text)}
          clearButtonMode="while-editing"
          onSubmitEditing={() => {
            setReview('');
            Alert.alert('Your Review Successfully Submitted');
          }}
        />
      </View>
    </View>
  );
}

const userDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  basicInfoContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  aboutContainer: {
    paddingTop: 16,
  },
  reviewContainer: {
    paddingTop: 16,
  },
  heading: {
    fontSize: 21,
    fontFamily: 'Roboto-bold',
  },
  normalText: {
    fontSize: 15,
    padding: 16,
    fontFamily: 'Merriweather-Regular',
  },
  textInputBox: {
    margin: 16,
    padding: 16,
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 15,
  },
});

export default UserDetails;
