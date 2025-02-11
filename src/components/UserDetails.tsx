import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

function UserDetails({ imgUrl, name, address, aboutUs, phoneNo, email }) {
  const [review, setReview] = useState<string | undefined>();
  const onSubmit = () => {
    setReview('');
    Alert.alert('Your Review Successfully Submitted');
  };

  return (
    <View style={userDetailsStyles.container}>
      <View style={userDetailsStyles.basicInfoContainer}>
        <Image style={userDetailsStyles.image} src={imgUrl} />
        <View style={userDetailsStyles.detailContainer}>
          <Text style={[userDetailsStyles.title]}>{name}</Text>
          <Text style={userDetailsStyles.normalText}>{address}</Text>
          <Text style={userDetailsStyles.normalText}>{phoneNo}</Text>
          <Text style={userDetailsStyles.normalText}>{email}</Text>
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
          onChange={setReview}
          clearButtonMode="while-editing"
          onSubmitEditing={onSubmit}
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
    marginTop: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  detailContainer: {
    paddingLeft: 25,
  },
  aboutContainer: {
    padding: 16,
    marginTop: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 25,
  },
  reviewContainer: {
    // paddingTop: 16,
    padding: 16,
    marginTop: 35,
    // backgroundColor:'lightgrey',
    borderRadius: 25,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Roboto-bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Roboto-Regular',
    paddingTop: 10,
    marginBottom: 10,
  },
  normalText: {
    fontSize: 15,
    // padding: 6,
    paddingBottom: 4,
    fontFamily: 'Merriweather-Regular',
  },
  textInputBox: {
    // margin: 16,
    padding: 16,
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 15,
    borderRadius: 15,
  },
});

export default UserDetails;
