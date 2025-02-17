import React from 'react';
import { View, Pressable, useWindowDimensions, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Text } from '@react-navigation/elements';
import { CustomIcon } from './CustomIcon';
import { BOTTOM_TAB } from '../const';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MyTabBar({ state, descriptors, navigation, onTabPress }) {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();

  // console.log('Tab Bar Rendered');

  return (
    <View
      style={{
        flexDirection: 'row',
        width: width,
        // height:85,
        justifyContent: 'space-between',
        paddingBottom: bottom,
        paddingTop: 10,
        paddingHorizontal: 16,
        backgroundColor: 'white',
      }}>
      {state.routes.map((route, index) => {
        // console.log(route.name);
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => onTabPress({ navigation, route, isFocused });

        return (
          <Pressable key={index} onPress={onPress} style={styles.tabBar}>
            <CustomIcon
              iconName={BOTTOM_TAB[route.name].icon}
              color={isFocused ? colors.primary : colors.text}
            />
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    alignItems: 'center',
  },
});

export default MyTabBar;
