import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  createContext,
  useReducer,
} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import DecrementBtn from './DecrementBtn';
import UserListScreen from '../screens/UserListScreen';
import InputBar from './InputBar';
import { useDispatch, useSelector } from 'react-redux';
import { increment, selectCount ,decrement} from '../redux/slices/counterslice';

export const DataContext = createContext('Search Here');

// function reducer(state,action){
//   switch (action.type) {
//     case 'incremented_count': {
//       return {
//         count:state.count + 1,
//       };
//     }
//     case 'decremented_count': {
//       return {
//        count:state.count - 1,
//       };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
// };

function Parent() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState('Decrement');
  // const [state, dispatch] = useReducer(reducer, { count: 0 });
  const count= useSelector(selectCount);
  const dispatch= useDispatch();

  let refCount = useRef(0);
  let ref = useRef(null);

  const login = useCallback(() => {
    console.log('Checking Context Provider');
  }, []);

  const contextValue = useMemo(
    () => ({
      data,
      login,
    }),
    [data, login],
  );

  const textInputHandler = () => {
    ref.current.clearText();
  };
  const UserListScreenM = useMemo(() => {
    return <UserListScreen />;
  }, []);
  // const onPress = () => {
  //   refCount.current = refCount.current + 1;
  //   setCount((c) => c + 1);
  // };

  // function decrementFn() {
  //   setCount((c) => c - 1);
  // }
  const onIncrementHandler = () => {
    dispatch(increment());
  };
  const onDecrementHandler = () => {
    dispatch(decrement());
  };

  const showRefCount = () => {
    Alert.alert(`Your Highest Count is ${refCount.current}`);
  };

  return (
    <DataContext.Provider value={contextValue}>
      <View style={styles.container}>
        <Text style={styles.text}> The count is {count}</Text>
        <Button title="Increment" onPress={onIncrementHandler} />
        <DecrementBtn decrementFn={onDecrementHandler} />
        <Button title="Show Ref Count" onPress={showRefCount} />
        <InputBar ref={ref} />
        <Button title="Clear Input" onPress={textInputHandler} />
        {UserListScreenM}
      </View>
    </DataContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  textBar: {
    borderWidth: 2,
  },
});

export default Parent;
