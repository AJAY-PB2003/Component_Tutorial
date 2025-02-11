import React from 'react';
import UserCard from '../components/UserCard';
import { DATA } from '../const/data';
import CardList from '../components/CardList';

type ItemProps = {
  id: string;
  imgUrl: string;
  title: string;
  address: string;
  phoneNo: string;
  socialMedia: string;
  socialCount: string;
};

function UserListScreen() {
  // console.log('User List fetched');
  const renderItem = ({ item }: { item: ItemProps }) => {
    const { id, imgUrl, title, address, phoneNo, socialMedia, socialCount } =
      item;

    return (
      <UserCard
        userId={id}
        imgUrl={imgUrl}
        title={title}
        address={address}
        phone={phoneNo}
        socialMedia={socialMedia}
        socialCount={socialCount}
      />
    );
  };

  return <CardList dataList={DATA} renderItem={renderItem} />;
}

export default UserListScreen;
