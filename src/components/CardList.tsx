import React from 'react';
import { FlatList } from 'react-native';

function CardList({ dataList, renderItem, horizontalBool = false }) {
  console.log('Recipe list rendered');

  return (
    <FlatList
      data={dataList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={horizontalBool}
    />
  );
}

export default CardList;
