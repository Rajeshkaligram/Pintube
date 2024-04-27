import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {URL} from '../Api/Api';
import {colors} from '../common/config';

const NewsScreen = ({navigation}) => {
  const [newsData, setNewsdata] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `${URL}v2/top-headlines?country=in&apiKey=7c94c4bf82af4e18a0ba534482945782`,
      );
      setNewsdata(response.data.articles);
      console.log(response.data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.main}>
      <Text style={{...styles.commonTxt, textAlign: 'left', marginTop: 10}}>
        News:{' '}
      </Text>
      <FlatList
        data={newsData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.container}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('NewsDetailScreen', {newsData: item})
              }>
              <ImageBackground
                source={{uri: item?.urlToImage}}
                style={styles.imageStyle}
              />
              <Text style={styles.commonTxt}>{item?.source?.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    width: '100%',
    height: 150,
    borderColor: colors.black,
    borderWidth: 1,
    marginTop: 50,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  commonTxt: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
    paddingTop: 5,
  },
});
