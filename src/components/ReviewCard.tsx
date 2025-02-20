import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

function ReviewCard({ name, review }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[reviewCardStyles.card, { width: width - 40 }]}>
      <Text style={reviewCardStyles.heading}>{name}</Text>
      <Text style={reviewCardStyles.text}>{review}</Text>
    </View>
  );
}

const reviewCardStyles = StyleSheet.create({
  card: {
    backgroundColor: 'lightgray',
    marginHorizontal: 16,
    // marginRight: 16,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    paddingTop: 10,
    fontFamily: 'Merriweather-Regular',
    // fontFamily:'Roboto-Bold'
  },
});

export default ReviewCard;
