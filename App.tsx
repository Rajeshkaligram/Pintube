import {StyleSheet} from 'react-native';
import React from 'react';
import {MainStack} from './src/navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
