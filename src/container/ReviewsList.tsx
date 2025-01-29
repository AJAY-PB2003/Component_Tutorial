import React from 'react';
import { FlatList } from 'react-native';
import { Reviews } from '../const/data';
import ReviewCard from '../components/ReviewCard';

type ItemProps = {
  id: string;
  name: string;
  review: string;
};

function ReviewList() {
  const renderItem = ({ item }: { item: ItemProps }) => {
    const { name, review } = item;

    return <ReviewCard name={name} review={review} />;
  };

  return (
    <FlatList
      data={Reviews}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );
}

export default ReviewList;
