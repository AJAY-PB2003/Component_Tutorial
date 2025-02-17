import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import RecipeDetails from '../components/RecipeDetails';
import { SafeAreaView } from 'react-native';
import MyHeader from '../components/MyHeader';
import { useNavigation } from '@react-navigation/native';

function RecipeDetailsScreen({ route }) {
  const recipe = route.params;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.goBack();
  };
  //   console.log(recipe);

  return (
    <SafeAreaView>
      <MyHeader onPress={onPress} title="RecipeDetails" iconName="arrow-left" />
      <ScrollView>
        {recipe ? (
          <RecipeDetails
            imgUrl={recipe.imgUrl}
            title={recipe.title}
            instructions={recipe.instructions}
            ingredients={recipe.ingredients}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecipeDetailsScreen;
