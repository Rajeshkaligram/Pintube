import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const URL = 'https://newsapi.org/';

export const fetchNewsApi = () => {
  return axios
    .get(
      `${URL}v2/top-headlines?country=in&apiKey=7c94c4bf82af4e18a0ba534482945782`,
    )
    .then(response => response.data);
};

export const fetchUserData = async () => {
  const jsonValue = await AsyncStorage.getItem('my-key');
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
