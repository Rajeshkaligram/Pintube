export const STORE_USER_DATA = 'STORE_USER_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SAVE_USER_DATA_FAILURE = 'SAVE_USER_DATA_FAILURE';

export const storeUserData = userData => ({
  type: STORE_USER_DATA,
  payload: userData,
});

export const getUserData = () => ({
  type: GET_USER_DATA,
});
