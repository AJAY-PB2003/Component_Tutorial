import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import RecipeDetails from '../components/RecipeDetails';

function RecipeDetailsScreen({ route }) {
  const recipe = route.params;
//   console.log(recipe);

  return (
    <ScrollView>
      {recipe ? (
        <RecipeDetails
          imgUrl={recipe.imgUrl}
          name={recipe.title}
          cuisine={recipe.cuisine}
          difficulty={recipe.difficulty}
          rating={recipe.rating}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          servings={recipe.servings}
          calories={recipe.calories}
        />
      ) : null}
    </ScrollView>
  );
}

export default RecipeDetailsScreen;
