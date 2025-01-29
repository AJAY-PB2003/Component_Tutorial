import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/nav';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
