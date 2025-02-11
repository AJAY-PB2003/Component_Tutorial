import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IRecipeCardProps {
  recipeId: string;
  imgUrl: string | null;
  title?: string | null;
  cuisine?: string | null;
  difficulty?: string | null;
  rating: string;
  ingredients: object;
  instructions: object;
  servings: number;
  calories: number;
}

function RecipeCard({
  recipeId,
  imgUrl,
  title,
  cuisine,
  difficulty,
  rating,
  ingredients,
  instructions,
  servings,
  calories,
}: IRecipeCardProps) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('RecipeDetails', {
      id: recipeId,
      imgUrl: imgUrl,
      title: title,
      cuisine: cuisine,
      difficulty: difficulty,
      rating: rating,
      ingredients:  ingredients ,
      instructions:  instructions ,
      servings: servings,
      calories: calories,
    });
  };

  return (
    <Pressable onPress={onPress}>
      <View style={[recipeCardStyles.cardContainer]}>
        <View style={recipeCardStyles.infoContainer}>
          {imgUrl ? (
            <Image src={imgUrl} style={recipeCardStyles.imageContainer} />
          ) : null}

          <View style={recipeCardStyles.detailsContainer}>
            <Text style={recipeCardStyles.title}>{title}</Text>
            <Text style={[recipeCardStyles.text, { marginTop: 8 }]}>
              Cuisine - {cuisine}
            </Text>
            <Text style={[recipeCardStyles.text, { marginTop: 8 }]}>
              Difficulty - {difficulty}
            </Text>
          </View>

          <View style={recipeCardStyles.logoContainer}>
            <Icon name="chevron-right" size={28} />
          </View>
        </View>

        <View style={recipeCardStyles.socialDetailsContainer}>
          <Text style={recipeCardStyles.text}>Rating</Text>
          <Text style={recipeCardStyles.text}> {rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const recipeCardStyles = StyleSheet.create({
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
    paddingLeft: 16,
    paddingTop:6
  },
  logoContainer: {
    justifyContent: 'center',
  },
  socialDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingRight:8,
    paddingLeft:8
  },
  title:{
    fontSize:18,
    fontFamily: 'Roboto-Bold',


  },
  text: {
    fontSize: 15,
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    fontFamily: 'Roboto-Bold',
    // marginTop:5
    // fontFamily:'Merriweather-Regular'
  },
});

export default RecipeCard;
