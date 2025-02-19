import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  createContext,
} from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import DecrementBtn from '../learning/DecrementBtn';
import UserListScreen from './UserListScreen';
import InputBar from '../learning/InputBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  selectCount,
  decrement,
} from '../redux/slices/counterSlice';
import SafeAreaViewWrapper from '../components/SafeAreaViewWrapper';
import { asyncIncrement } from '../redux/actions';

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

function DemoScreen() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState('Decrement');
  // const [state, dispatch] = useReducer(reducer, { count: 0 });
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const refCount = useRef(0);
  const ref = useRef(null);

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

  const onAsyncIncrementHandler = () => {
    dispatch(asyncIncrement());
  };

  const onDecrementHandler = () => {
    dispatch(decrement());
  };

  const showRefCount = () => {
    Alert.alert(`Your Highest Count is ${refCount.current}`);
  };

  return (
    <DataContext.Provider value={contextValue}>
      <SafeAreaViewWrapper>
        <View style={styles.container}>
          <Text style={styles.text}> The count is {count}</Text>
          <Button title="Increment" onPress={onIncrementHandler} />
          <Button
            title="Increment after 1 sec"
            onPress={onAsyncIncrementHandler}
          />
          <DecrementBtn decrementFn={onDecrementHandler} />
          <Button title="Show Ref Count" onPress={showRefCount} />
          <InputBar ref={ref} />
          <Button title="Clear Input" onPress={textInputHandler} />
        </View>
      </SafeAreaViewWrapper>
    </DataContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  textBar: {
    borderWidth: 2,
  },
});

export default DemoScreen;
