import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/nav';
import { SafeAreaView } from 'react-native';
import Parent from './src/learning/Temp';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <MyDrawer />
      {/* <Parent/> */}

    </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
