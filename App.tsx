import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/nav';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
