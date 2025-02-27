import React, { useEffect, memo, useRef } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteRecipe,
  fetchRecipes,
  filterRecipes,
} from '../redux/recipes/action';
import API_STATUS from '../const/apiStatus';
import { Text } from 'react-native-gesture-handler';
import CardList from '../components/CardList';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import MyHeader from '../components/MyHeader';
import GenericCard from '../components/GenericCard';
import SafeAreaViewWrapper from '../components/SafeAreaViewWrapper';

type ItemProps = {
  id: string;
  title: string;
  imgUrl: string;
  subtitle1: string;
  subtitle2: string;
  footerLeft: string;
  footerRight: string;
  ingredients: object;
  instructions: object;
};
const MemoizedRecipeList = memo(CardList);

function RecipeListScreen() {
  const dispatch = useDispatch();
  const recipeDataStatus = useSelector((state) => state?.recipes?.status);
  // console.log(recipeDataStatus);
  const filteredData = useSelector(
    (state) => state?.recipes?.filteredRecipesList,
  );
  const navigation = useNavigation();

  const inputRef = useRef(null);
  const onClear = () => {
    inputRef?.current?.clear();
    dispatch(filterRecipes(''));
  };

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

  // // Search logic using Debouncing
  // const debouncedFilterHandler = debounce((text) => {
  //   setfilteredList(
  //     recipeData?.filter((item) =>
  //       item.name.toLowerCase().startsWith(text?.toLowerCase()),
  //     ),
  //   );
  // }, 1000, {'leading':false});

  const filterHandler = (text) => {
    // inputRef.current.value=text;
    inputRef.current.setError(null);
    dispatch(filterRecipes(text));
  };

  const onCardPress = (item) => {
    navigation.navigate('RecipeDetailsScreen', {
      title: item.title,
      imgUrl: item.imgUrl,
      instructions: item.details.instructions,
      ingredients: item.details.ingredients,
    });
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteRecipe(id));
  };

  const searchBarOnSubmit = ({ nativeEvent: { text } }) => {
    if (text) {
      Alert.alert(`Looking for :- ${text} `);
    } else {
      inputRef.current.setError('Please Enter Something');
    }
  };
  const onHeaderPress = () => {
    navigation.toggleDrawer();
  };

  const renderItem = ({ item }: { item: ItemProps }) => {
    const { title, imgUrl, subtitle1, subtitle2, footerLeft, footerRight } =
      item;

    return (
      <GenericCard
        title={title}
        imgUrl={imgUrl}
        subtitle1={subtitle1}
        subtitle2={subtitle2}
        footerLeft={footerLeft}
        footerRight={footerRight}
        onPress={() => onCardPress(item)}
        onDeleteHandler={() => onDeleteHandler(item.id)}
        shadowShowbool={false}
      />
    );
  };

  switch (recipeDataStatus) {
    case API_STATUS.PENDING:
      return (
        <SafeAreaView
          style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </SafeAreaView>
      );

    case API_STATUS.ERROR:
      return <Text> 'ErrorMessage'</Text>;

    default:
      return (
        <SafeAreaViewWrapper>
          <MyHeader onPress={onHeaderPress} />
          <SearchBar
            placeholder="Search the recipe here"
            ref={inputRef}
            onClear={onClear}
            onChangeText={filterHandler}
            onSubmit={searchBarOnSubmit}
          />
          <MemoizedRecipeList dataList={filteredData} renderItem={renderItem} />
        </SafeAreaViewWrapper>
      );
  }
}

export default RecipeListScreen;
