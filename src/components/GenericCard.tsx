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
  onDeleteHandler,
  shadowShowbool,
}) {
  return (
    // <Pressable onPress={onPress}>
    <View
      style={[
        styles.cardContainer,
        shadowShowbool ? styles.cardContainerShadow : null,
      ]}>
      <View style={styles.infoContainer}>
        {imgUrl ? <Image src={imgUrl} style={styles.imageContainer} /> : null}

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.text, { marginTop: 8 }]}>{subtitle1}</Text>
          <Text style={[styles.text, { marginTop: 8 }]}>{subtitle2}</Text>
        </View>

        <View style={styles.logoContainer}>
          <Pressable style={styles.deleteIcon} onPress={onDeleteHandler}>
            <CustomIcon
              iconName={'close-circle'}
              color={'grey'}
              iconSize={25}
            />
          </Pressable>
          <Pressable style={styles.arrowIcon} onPress={onPress}>
            <CustomIcon
              iconName={'chevron-right'}
              color={'black'}
              iconSize={35}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.socialDetailsContainer}>
        <Text style={styles.text}>{footerLeft}</Text>
        <Text style={styles.text}> {footerRight}</Text>
      </View>
    </View>
    // </Pressable>
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
  cardContainerShadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // shadowOpacity:1,
    // shadowRadius:20
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
    alignItems: 'center',
    // justifyContent: 'center',
  },
  deleteIcon: {
    // paddingTop:
  },
  arrowIcon: {
    paddingTop: 21,
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
