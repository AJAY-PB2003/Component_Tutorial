import React from 'react';
import { FlatList } from 'react-native';
import UserCard from '../components/UserCard';
import { DATA } from '../const/data';

type ItemProps = {
  id: string;
  imgUrl: string;
  title: string;
  address: string;
  socialMedia: string;
  socialCount: string;
};

function ListContainer() {
  const renderItem = ({ item }: { item: ItemProps }) => {
    const { id, imgUrl, title, address, socialMedia, socialCount } = item;

    return (
      <UserCard
        userId={id}
        imgUrl={imgUrl}
        title={title}
        address={address}
        socialMedia={socialMedia}
        socialCount={socialCount}
      />
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListContainer;
