import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../common/images';
import {colors} from '../common/config';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import { storeUserData } from '../redux/actions';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [personal, setPersonal] = useState(false);
  const [business, setBusiness] = useState(false);
  const [userData, setUserData] = useState({
    _id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cPassword: '',
    personal: false,
    business: false,
  });

  const handleSetData = (key, data) => {
    setUserData(prevState => ({
      ...prevState,
      [key]: data,
    }));
  };

  const handleClick = data => {
    if (data === 'personal') {
      handleSetData('personal', true);
      handleSetData('business', false);
      setPersonal(true);
      setBusiness(false);
    } else {
      handleSetData('business', true);
      handleSetData('personal', false);
      setPersonal(false);
      setBusiness(true);
    }
  };

  const handleSubmit = async () => {
    if (
      userData.firstName &&
      userData.lastName &&
      userData.email &&
      userData.password &&
      userData.cPassword &&
      userData.firstName.length > 0 &&
      userData.lastName.length > 0 &&
      userData.email.length > 0 &&
      userData.password.length > 0 &&
      userData.cPassword.length > 0
    ) {
      if (userData.password !== userData.cPassword) {
        ToastAndroid.show('Password mismatch', ToastAndroid.SHORT);
      } else {
        handleSetData('_id', +1);
        await dispatch(storeUserData(userData));
        // console.log(userData);
        ToastAndroid.show('Account create sucessfylly!', ToastAndroid.LONG);
      }
    } else {
      ToastAndroid.show('Enter all fields', ToastAndroid.SHORT);
    }
  };
  return (
    <ImageBackground source={images.SCREEN_BACK} style={styles.main}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleName}>First Name :</Text>
        <TextInput
          placeholder="First Name"
          value={userData.firstName}
          editable={true}
          keyboardType="default"
          onChangeText={txt => handleSetData('firstName', txt)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titleName}>Last Name :</Text>
        <TextInput
          placeholder="Last Name"
          value={userData.lastName}
          keyboardType="default"
          onChangeText={txt => handleSetData('lastName', txt)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titleName}>Email :</Text>
        <TextInput
          placeholder="Email"
          value={userData.email}
          keyboardType="email-address"
          onChangeText={txt => handleSetData('email', txt)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titleName}>PassWord :</Text>
        <TextInput
          placeholder="PassWord"
          value={userData.password}
          keyboardType="visible-password"
          editable={true}
          onChangeText={txt => handleSetData('password', txt)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titleName}>Confirm PassWord :</Text>
        <TextInput
          placeholder="Confirm PassWord"
          value={userData.cPassword}
          keyboardType="visible-password"
          editable={true}
          onChangeText={txt => handleSetData('cPassword', txt)}
          style={styles.inputStyle}
        />
      </View>
      <View
        style={{
          ...styles.row,
          paddingTop: 20,
          justifyContent: 'space-between',
          width: '70%',
        }}>
        <View style={styles.row}>
          <CheckBox
            boxType="circle"
            disabled={false}
            value={personal}
            onValueChange={() => handleClick('personal')}
          />
          <Text>Personal</Text>
        </View>
        <View style={styles.row}>
          <CheckBox
            boxType="circle"
            disabled={false}
            value={business}
            onValueChange={() => handleClick('business')}
          />
          <Text>Business</Text>
        </View>
      </View>
      <View style={{...styles.row, paddingTop: 10}}>
        <Text>Existing User....</Text>
        <TouchableOpacity
          style={{paddingLeft: 10}}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.loginTxt}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text
          style={{...styles.titleName, paddingBottom: 0, color: colors.white}}>
          Submit
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
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
    position: 'absolute',
    bottom: 20,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginTxt: {
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
