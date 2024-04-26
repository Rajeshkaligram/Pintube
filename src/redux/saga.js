import {put, takeLatest} from 'redux-saga/effects';
import {STORE_USER_DATA, GET_USER_DATA} from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* storeUserDataSaga(action) {
  try {
    const {payload} = action;
    yield AsyncStorage.setItem('userData', JSON.stringify(payload));
  } catch (error) {
    console.error('Error storing user data:', error);
  }
}

function* getUserDataSaga() {
  try {
    const userDataString = yield AsyncStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    yield put({type: 'SET_USER_DATA', payload: userData});
  } catch (error) {
    console.error('Error getting user data:', error);
  }
}

export default function* rootSaga() {
  yield takeLatest(STORE_USER_DATA, storeUserDataSaga);
  yield takeLatest(GET_USER_DATA, getUserDataSaga);
}
