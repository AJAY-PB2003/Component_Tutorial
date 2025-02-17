import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomIcon = ({ iconName, iconSize = 30, color }) => {
  return <Icon color={color} name={iconName} size={iconSize} />;
};
