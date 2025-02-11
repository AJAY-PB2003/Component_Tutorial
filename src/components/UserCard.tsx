import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IUserCardProps {
  userId: string;
  imgUrl: string | null;
  title?: string | null;
  address?: string | null;
  phone: string | null;
  socialMedia?: string | null;
  socialCount?: string | null;
}

function UserCard({
  userId,
  imgUrl,
  title,
  address,
  phone,
  socialMedia,
  socialCount,
}: IUserCardProps) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('UserDetails', { id: userId });
  };

  return (
    <Pressable onPress={onPress}>
      <View style={[userCardStyles.cardContainer]}>
        <View style={userCardStyles.infoContainer}>
          {imgUrl ? (
            <Image src={imgUrl} style={userCardStyles.imageContainer} />
          ) : null}

          <View style={userCardStyles.detailsContainer}>
            <Text style={userCardStyles.heading}>{title}</Text>
            <Text style={[userCardStyles.text]}>{address}</Text>
            <Text style={userCardStyles.text}>{phone}</Text>
          </View>

          <View style={userCardStyles.logoContainer}>
            <Icon name="chevron-right" size={28} />
          </View>
        </View>

        <View style={userCardStyles.socialDetailsContainer}>
          <Text style={userCardStyles.text}>{socialMedia}</Text>
          <Text style={userCardStyles.text}> {socialCount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const userCardStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'lightgray',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 25,
    paddingTop: 6,
  },
  logoContainer: {
    justifyContent: 'center',
    paddingRight:16
  },
  socialDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingRight:16,
    paddingLeft:16,
  },
  heading: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    marginBottom: 8,
  },
  text: {
    marginBottom: 5,
    fontSize: 16,
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    fontFamily: 'Roboto-Bold',
    // fontFamily:'Merriweather-Regular'
  },
});

export default UserCard;
