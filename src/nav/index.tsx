import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import MyHeader from '../components/MyHeader';
import Parent from '../learning/Temp';
import { icon } from '../components/iconProvider';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const contactIcon = ({ color }) => icon('contacts', 30, color);
const profileIcon = ({ color }) => icon('account', 30, color);
const foodIcon = ({ color }) => icon('food', 30, color);
const devIcon = ({ color }) => icon('dev-to', 30, color);

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        // header: ({ navigation }) => MyHeader((navigation = { navigation })),
        headerStyle: {
          // height:200,
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Users"
        component={StackNavigator}
        options={{
          drawerIcon: contactIcon,
          header: ({ navigation }) => MyHeader((navigation = { navigation })),

          // headerShown:false
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: profileIcon,
        }}
      />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Users"
        component={UserListScreen}
        options={{
          tabBarIcon: contactIcon,
          tabBarBadgeStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
      <Tab.Screen
        name="Recipies"
        component={RecipeListScreen}
        options={{ tabBarIcon: foodIcon }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: profileIcon }}
      />
      <Tab.Screen
        name="Demo"
        component={Parent}
        options={{ tabBarIcon: devIcon }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          // headerShown: false ,
          header: ({ navigation }) => MyHeader((navigation = { navigation })),
        }}
      />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />

      <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
    </Stack.Navigator>
  );
}

export default MyDrawer;
