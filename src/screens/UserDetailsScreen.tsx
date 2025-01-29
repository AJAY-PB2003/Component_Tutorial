import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import UserDetails from '../components/UserDetails';
import { DATA } from '../const/data';
import ReviewList from '../container/ReviewsList';

function UserDetailsScreen({ route }) {
  const targetId = route.params;
  const user = DATA.find((item) => item.id === targetId.id);

  return (
    <ScrollView>
      {user ? (
        <UserDetails
          imgUrl={user.imgUrl}
          name={user.title}
          address={user.address}
          aboutUs={user.aboutUs}
          phoneNo={user.phoneNo}
          email={user.email}
        />
      ) : null}
      <ReviewList />
    </ScrollView>
  );
}

export default UserDetailsScreen;
