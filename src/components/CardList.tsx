import React from 'react';
import { FlatList } from 'react-native';

function CardList({ dataList, renderItem, horizontalBool = false }) {
  // console.log('Recipe list rendered');

  return (
    <FlatList
      // style={{ paddingTop: 16 }}
      data={dataList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal={horizontalBool}
      contentContainerStyle={{ flexGrow: 1 ,paddingVertical:16}}
    />
  );
}

export default CardList;
