import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import CardList from '../components/CardList';
import MyHeader from '../components/MyHeader';
import { useNavigation } from '@react-navigation/native';
import SafeAreaViewWrapper from '../components/SafeAreaViewWrapper';
import GenericCard from '../components/GenericCard';
import { useDispatch, useSelector } from 'react-redux';
import API_STATUS from '../const/apiStatus';
import { deleteUser, fetchUsers } from '../redux/users/action';

type ItemProps = {
  id: string;
  imgUrl: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  footerLeft: string;
  footerRight: string;
  aboutUser: Object;
};

function UserListScreen() {
  const userDataStatus = useSelector((state) => state?.user?.status);
  // console.log(userDataStatus);
  const usersList = useSelector((state) => state?.user?.usersList);
  // console.log(usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const navigation = useNavigation();
  // console.log('User List fetched');
  const onCardPress = (item) => {
    navigation.navigate('UserDetailsScreen', {
      title: item.title,
      imgUrl: item.imgUrl,
      city: item.subtitle1,
      phone: item.subtitle2,
      aboutUser: item.details.aboutUser,
    });
  };

  const onDeleteHandler = (id) => {
    dispatch(deleteUser(id));
  };
  const renderItem = ({ item }: { item: ItemProps }) => {
    const { imgUrl, title, subtitle1, subtitle2, footerLeft, footerRight } =
      item;

    return (
      <GenericCard
        imgUrl={imgUrl}
        title={title}
        subtitle1={subtitle1}
        subtitle2={subtitle2}
        footerLeft={footerLeft}
        footerRight={footerRight}
        onPress={() => onCardPress(item)}
        onDeleteHandler={() => onDeleteHandler(item.id)}
        shadowShowbool={true}
      />
    );
  };

  const headerOnPress = () => {
    navigation.toggleDrawer();
  };

  switch (userDataStatus) {
    case API_STATUS.PENDING:
      return (
        <SafeAreaViewWrapper>
          <View
            style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size={'large'} color={'blue'} />
          </View>
        </SafeAreaViewWrapper>
      );

    case API_STATUS.ERROR:
      return <Text> 'ErrorMessage'</Text>;

    default:
      return (
        <SafeAreaViewWrapper>
          <MyHeader onPress={headerOnPress} />
          <CardList dataList={usersList} renderItem={renderItem} />
        </SafeAreaViewWrapper>
      );
  }
}

export default UserListScreen;
