import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import DemoScreen from '../screens/DemoScreen';
import { CustomIcon } from '../components/CustomIcon';
import MyTabBar from '../components/MyTabBar';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const contactIcon = ({ color }) => (
  <CustomIcon iconName="contacts" color={color} />
);
const profileIcon = ({ color }) => (
  <CustomIcon iconName="account" color={color} />
);
// const foodIcon = ({ color }) => <CustomIcon iconName="food" color={color} />;
// const devIcon = ({ color }) => <CustomIcon iconName="dev-to" color={color} />;

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
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
const onTabPress = ({ navigation, route, isFocused }) => {
  // console.log('onTabPressed');
  const event = navigation.emit({
    type: 'tabPress',
    target: route.key,
    canPreventDefault: true,
  });

  if (!isFocused && !event.defaultPrevented) {
    navigation.navigate(route.name, route.params);
  }
};

const TabBar = ({ navigation, state, descriptors }) => (
  <MyTabBar
    navigation={navigation}
    state={state}
    descriptors={descriptors}
    onTabPress={onTabPress}
  />
);

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={TabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{
          tabBarLabel: 'Users',
          tabBarBadgeStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
      <Tab.Screen
        name="RecipeListScreen"
        component={RecipeListScreen}
        options={{
          tabBarLabel: 'Recipes',
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="DemoScreen"
        component={DemoScreen}
        options={{
          tabBarLabel: 'Demo',
        }}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />

      <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
    </Stack.Navigator>
  );
}

export default MyDrawer;
