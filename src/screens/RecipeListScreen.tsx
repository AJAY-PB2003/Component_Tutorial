import React, {
  useState,
  useEffect,
  useCallback,
  useDeferredValue,
  useMemo,
  memo,
} from 'react';
import { ActivityIndicator, View } from 'react-native';
import RecipeCard from '../components/RecipeCard';
// import { Text } from 'react-native-gesture-handler';
import SearchTextBar from '../components/SearchTextBar';
// import { blue } from 'react-native-reanimated/lib/typescript/Colors';
// import { debounce } from 'lodash-es';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRecipes,
  selectFilteredRecipes,
  selectStatus,
  searchFilterHandler,
} from '../redux/slices/recipeslice';
import API_STATUS from '../const/apiStatus';
import { Text } from 'react-native-gesture-handler';
import CardList from '../components/CardList';

type ItemProps = {
  id: string;
  image: string;
  name: string;
  cuisine: string;
  difficulty: string;
  rating: string;
  ingredients: object;
  instructions: object;
  servings: number;
  caloriesPerServing: number;
};

const MemoizedRecipeList = memo(CardList);

function RecipeListScreen() {
  // const [loading, setLoading] = useState(true);
  // const [recipeData, setrecipeData] = useState(null);
  const dispatch = useDispatch();
  const recipeDataStatus = useSelector(selectStatus);
  const filteredData = useSelector(selectFilteredRecipes);

  // const [filteredList, setfilteredList] = useState(filteredData);

  //used deferred value hook
  // const deferredList = useDeferredValue(filteredList);
  // console.log(recipeData);

  // const RecipeListM = useMemo(() => {
  //   return <RecipeList deferredList={deferredList} />;
  // }, [deferredList]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://dummyjson.com/recipes?limit=0');
  //     const data = await response.json();
  //     // console.log(data);
  //     setrecipeData(data.recipes);
  //     setfilteredList(data.recipes);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  // useEffect(() => {
  //   if (recipeDataStatus === 'succeeded') {
  //     setfilteredList(filteredData);
  //   }
  // }, [recipeDataStatus, filteredData]);

  // // Search logic using Debouncing
  // const debouncedFilterHandler = debounce((text) => {
  //   setfilteredList(
  //     recipeData?.filter((item) =>
  //       item.name.toLowerCase().startsWith(text?.toLowerCase()),
  //     ),
  //   );
  // }, 1000, {'leading':false});

  // const filterHandler = (text) => {
  //   setfilteredList(
  //     recipeData?.filter((item) =>
  //       item.name.toLowerCase().startsWith(text?.toLowerCase()),
  //     ),
  //   );
  // };

  const filterHandler = (text) => {
    dispatch(searchFilterHandler(text));
  };

  const renderItem = ({ item }: { item: ItemProps }) => {
    const {
      id,
      image,
      name,
      cuisine,
      difficulty,
      rating,
      ingredients,
      instructions,
      servings,
      caloriesPerServing,
    } = item;

    return (
      <RecipeCard
        recipeId={id}
        imgUrl={image}
        title={name}
        cuisine={cuisine}
        difficulty={difficulty}
        rating={rating}
        ingredients={ingredients}
        instructions={instructions}
        servings={servings}
        calories={caloriesPerServing}
      />
    );
  };

  switch (recipeDataStatus) {
    case API_STATUS.PENDING:
      return (
        <View
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      );

    case API_STATUS.ERROR:
      return <Text> 'ErrorMessage'</Text>;

    default:
      return (
        <>
          <SearchTextBar onChangeText={filterHandler} />
          <MemoizedRecipeList dataList={filteredData} renderItem={renderItem} />
        </>
      );
  }
}

export default RecipeListScreen;
