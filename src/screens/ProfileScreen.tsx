import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { profileImageUrl } from '../const/imgUrl';

function ProfileScreen() {
  // const navigation = useNavigation();
  // const { width } = useWindowDimensions();

  // const [count, setCount] = useState(0);

  // //   useEffect(() => {
  // //     console.log('component mount');

  // //     return () => {
  // //       console.log('compenent unmount');
  // //     };
  // //   }, []);

  // useEffect(() => {
  //   console.log('component updated', count);

  //   return () => {
  //     console.log('compenent unmount');
  //     // console.log('effect unmounted');
  //   };
  // }, [count]);

  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Pressable
  //       onPress={() => {
  //         setCount(count + 1);
  //       }}>
  //       <Text>increase count</Text>
  //     </Pressable>
  //     <Pressable
  //       onPress={() => {
  //         setCount(count - 1);
  //         //  console.log('dec count', count);
  //       }}>
  //       <Text>decrease count</Text>
  //     </Pressable>
  //     <Text>{count}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        src={
          profileImageUrl
        }
      />
      <Text style={styles.title}>Ajay Jhabak</Text>
      <Text style={styles.text}>9239939933</Text>
      <Button style={styles.button}>View Profile</Button>
    </View>
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
