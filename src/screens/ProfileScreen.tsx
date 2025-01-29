import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

function ProfileScreen() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack('Home');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 20 }}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        Welcome to Profile Screen
      </Text>
      <Button onPress={onPress}>Go to Home</Button>
    </View>
  );
}

export default ProfileScreen;
