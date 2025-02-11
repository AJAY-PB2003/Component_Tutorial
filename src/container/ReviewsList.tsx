import React from 'react';
import { Reviews } from '../const/data';
import ReviewCard from '../components/ReviewCard';
import CardList from '../components/CardList';

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
    <CardList
      dataList={Reviews}
      renderItem={renderItem}
      horizontalBool={true}
    />
  );
}

export default ReviewList;
