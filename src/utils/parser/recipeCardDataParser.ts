import { RecipeStaticText } from '../../const/staticText';

const recipeCardDataParser = (apiResponse) => {
  const recipeCardDataList = [];
  apiResponse.recipes.forEach((item) => {
    recipeCardDataList.push({
      id: item?.id,
      imgUrl: item?.image,
      title: item?.name,
      subtitle1: `${RecipeStaticText.Cuisine} - ${item?.cuisine}`,
      subtitle2: `${RecipeStaticText.Difficulty} - ${item?.difficulty}`,
      footerLeft: RecipeStaticText.Rating,
      footerRight: item?.rating,
      details:{
        instructions: item?.instructions,
        ingredients: item?.ingredients,
      }
    });
  });
  return recipeCardDataList;
};

export { recipeCardDataParser };
