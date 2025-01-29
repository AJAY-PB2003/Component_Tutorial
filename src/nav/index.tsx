import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomesScreen from '../screens/Home';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const homeIcon = ({ color }) => {
  return <Icon color={color} name="home" size={30} />;
};
const profileIcon = ({ color }) => {
  return <Icon color={color} name="account" size={30} />;
};

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          drawerIcon: homeIcon,
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
export default MyDrawer;

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Users"
        component={UserDetailStack}
        options={{
          tabBarIcon: homeIcon,
          headerShown: false,
          tabBarBadgeStyle: {
            backgroundColor: 'blue',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: profileIcon }}
      />
    </Tab.Navigator>
  );
}
// export default MyTabs;

const Stack = createStackNavigator();

function UserDetailStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
}
