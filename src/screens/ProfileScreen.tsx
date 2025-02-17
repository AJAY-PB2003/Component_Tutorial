import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { profileImageUrl } from '../const/imgUrl';
import MyHeader from '../components/MyHeader';
import { ProfileData } from '../const/staticText';

function ProfileScreen() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.toggleDrawer();
  };

  return (
    <SafeAreaView>
      <MyHeader onPress={onPress} />
      <View style={styles.container}>
        <Image style={styles.image} src={profileImageUrl} />
        <Text style={styles.title}>{ProfileData.Name}</Text>
        <Text style={styles.text}>{ProfileData.PhoneNo}</Text>
        <Button style={styles.button}>View Profile</Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 75,
  },
  title: {
    fontFamily: 'Roboto-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    marginTop: 9,
  },
  button: {
    marginTop: 20,
  },
});

export default ProfileScreen;
