import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {images} from '../common/images';
import {colors} from '../common/config';
import {useDispatch, useSelector} from 'react-redux';
import {getUserData} from '../redux/actions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.data);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleLogin = () => {
    const userValid = userData.find(
      usr => usr?.email === email && usr.password === password,
    );
    if (userValid) {
      navigation.navigate('HomeScreen');
    } else {
      ToastAndroid.show(
        'Please enter valid login credential',
        ToastAndroid.SHORT,
      );
    }
  };

  const header = () => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.BACK_ICON} style={styles.imageStyle} />
        </TouchableOpacity>
      </>
    );
  };
  return (
    <ImageBackground source={images.SCREEN_BACK} style={styles.main}>
      {header()}
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <Text style={styles.titleName}>Email :</Text>
          <TextInput
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={txt => setEmail(txt)}
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleName}>PassWord :</Text>
          <TextInput
            placeholder="PassWord"
            value={password}
            keyboardType="visible-password"
            editable={true}
            onChangeText={txt => setPassword(txt)}
            style={styles.inputStyle}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text
            style={{
              ...styles.titleName,
              paddingBottom: 0,
              color: colors.white,
            }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
    // paddingTop: 70,
  },
  inputContainer: {
    width: '80%',
    height: 80,
    marginTop: 20,
  },
  inputStyle: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 15,
  },
  titleName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.black,
    paddingBottom: 10,
  },
  buttonContainer: {
    width: '80%',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.leadColor,
    borderRadius: 10,
    marginTop: 100,
  },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.black,
    margin: 20,
  },
  body: {
    alignItems: 'center',
    paddingTop: 70,
  },
});
