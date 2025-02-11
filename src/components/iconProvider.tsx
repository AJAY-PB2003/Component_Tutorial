import React from'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const icon = (iconName,iconSize,color)=>{
  return (<Icon color={color} name={iconName} size={iconSize} />)
};