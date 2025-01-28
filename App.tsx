import './gesture-handler';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/card';
import ElevatedCard from './src/components/elevatedCard';
import UserCard from './src/components/UserCard';
import ListContainer from './src/components/ListContainer';
import SearchTextBar from './src/container/SearchTextBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import HomesScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import { Button } from '@react-navigation/elements';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import UserDetailStack from './src/components/UserDetailsNavigator';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Users"
          component={UserDetailStack}
          options={{
            tabBarIcon: () => <Icon name="home" size={30} />,
            headerShown: false,
            tabBarActiveTintColor:'blue',
            tabBarBadgeStyle:{
              backgroundColor:'blue'
            }
          }}
        />
        {/* <Tab.Screen name="Details" component={DetailsScreen} initialParams={{ firstName: 'User' }} /> */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarIcon: () => <Icon name="account" size={30} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <RootStack/>
    // </NavigationContainer>
    // <Navigation/>

    // <SafeAreaView style={{ flex: 1 }}>

    // </SafeAreaView>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView ,SafeAreaView} from 'react-native';

// const App = () => {
//   const Arr1 = ['Self', 'Wife', 'Son', 'Daughter'];
//   const Arr2 = ['Self', 'Son', 'Son', 'Daughter','Daughter','Wife'];

//   // Initialize countMap
//   let countMap = {};

//   // Count occurrences in Arr1
//   Arr1.forEach(element => {
//     countMap[element] = (countMap[element] || 0) + 1;
//   });

//   // Count occurrences in Arr2
//   Arr2.forEach(element => {
//     countMap[element] = (countMap[element] || 0) + 1;
//   });

//   // State to store filtered tabs (elements with count >= 2 and sum condition for Son and Daughter)
//   const [tabs, setTabs] = useState([]);

//   useEffect(() => {
//     // Filter elements with count >= 2
//     const filteredTabs = Object.keys(countMap)
//       .filter(key => countMap[key] >= 2)
//       .filter(key => {
//         if (key === 'Son' || key === 'Daughter') {
//           // Check if combined count of Son and Daughter is <= 6
//           const combinedCount = (countMap['Son'] || 0) + (countMap['Daughter'] || 0);
//           return combinedCount <= 6;
//         }
//         return true;
//       });

//     setTabs(filteredTabs);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       {tabs.length > 0 ? (
//         tabs.map(tab => (
//           <View key={tab} style={styles.tab}>
//             <Text style={styles.tabText}> {tab}</Text>
//           </View>
//         ))
//       ) : (
//         <Text>No elements with count >= 2 or sum of Son and Daughter count exceeds 6</Text>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//   },
//   tab: {
//     backgroundColor: '#4CAF50', // Green background
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 5,
//   },
//   tabText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default App;
