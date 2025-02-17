import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { CustomIcon } from './CustomIcon';

function GenericCard({
  imgUrl,
  title,
  subtitle1,
  subtitle2,
  footerLeft,
  footerRight,
  onPress,
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.cardContainer]}>
        <View style={styles.infoContainer}>
          {imgUrl ? <Image src={imgUrl} style={styles.imageContainer} /> : null}

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.text, { marginTop: 8 }]}>{subtitle1}</Text>
            <Text style={[styles.text, { marginTop: 8 }]}>{subtitle2}</Text>
          </View>

          <View style={styles.logoContainer}>
            <CustomIcon iconName={'chevron-right'} color={'black'} />
          </View>
        </View>

        <View style={styles.socialDetailsContainer}>
          <Text style={styles.text}>{footerLeft}</Text>
          <Text style={styles.text}> {footerRight}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'lightgray',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 6,
  },
  logoContainer: {
    justifyContent: 'center',
  },
  socialDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingRight: 8,
    paddingLeft: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
  },
});
export default GenericCard;
