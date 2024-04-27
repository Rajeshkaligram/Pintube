import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {images} from '../common/images';
import {colors} from '../common/config';

const NewsDetailScreen = ({navigation, route}) => {
  const {newsData} = route.params;

  const header = () => {
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.BACK_ICON} style={styles.imageStyle} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>{newsData?.source?.name}</Text>
        <View style={{width: '5%'}} />
      </View>
    );
  };

  const body = () => {
    return (
      <View style={styles.newsBody}>
        <Image source={{uri: newsData?.urlToImage}} style={styles.newsImage} />
        <Text style={styles.titleTXt}>{newsData?.title}</Text>
        <Text style={styles.descTxt}>{newsData?.description}</Text>
      </View>
    );
  };
  return (
    <View style={styles.main}>
      {header()}
      {body()}
    </View>
  );
};

export default NewsDetailScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 20,
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.black,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#17CF62',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
    paddingTop: 5,
  },
  newsImage: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    // borderRadius: 10,
  },
  newsBody: {
    paddingHorizontal: 0,
  },
  titleTXt: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.black,
    textAlign: 'left',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  descTxt: {
    fontSize: 15,
    fontWeight: '300',
    color: colors.black,
    textAlign: 'left',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
