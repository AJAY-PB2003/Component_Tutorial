import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import UserDetails from '../components/UserDetails';
import ReviewList from '../container/ReviewsList';
import MyHeader from '../components/MyHeader';
import { SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function UserDetailsScreen({ route }) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };

  const user = route.params;
  const onSubmit = () => {
    // setReview('');
    Alert.alert('Your Review Successfully Submitted');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyHeader onPress={onPress} title="User Details" iconName="arrow-left" />
      <ScrollView>
        <UserDetails user={user} onSubmit={onSubmit} />
        <ReviewList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserDetailsScreen;
