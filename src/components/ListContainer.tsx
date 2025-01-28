import React, { useState } from 'react';
import { View, FlatList, TextInput, Alert } from 'react-native';
import UserCard from './UserCard';
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
  const renderItem = ({ item, index }: { item: ItemProps }) => {
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
