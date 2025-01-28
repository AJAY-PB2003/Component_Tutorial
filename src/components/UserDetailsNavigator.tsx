import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomesScreen from '../screens/Home';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function UserDetailStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomesScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
}

export default UserDetailStack;
