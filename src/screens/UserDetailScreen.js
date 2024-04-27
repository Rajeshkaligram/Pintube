import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {images} from '../common/images';
import {colors} from '../common/config';

const UserDetailScreen = ({navigation, route}) => {
  const {userData} = route.params;

  const header = () => {
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.BACK_ICON} style={styles.imageStyle} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>User Details</Text>
        <View style={{width: '5%'}} />
      </View>
    );
  };

  const body = () => {
    return (
      <View style={styles.bodyMain}>
        <View style={styles.imageAvtar}>
          <Text
            style={{...styles.commonTxt, color: colors.white, paddingTop: 0}}>
            {userData?.lastName[0]}
          </Text>
        </View>
        <Text style={styles.commonTxt}>
          Name: {userData?.firstName} {userData?.lastName}
        </Text>
        <Text style={styles.commonTxt}>Email: {userData?.email}</Text>
        <Text style={styles.commonTxt}>
          User Type: {userData?.business ? 'Business' : 'Personal'}
        </Text>
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

export default UserDetailScreen;

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
  bodyMain: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  commonTxt: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
    paddingTop: 20,
  },
  imageAvtar: {
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: '#2789E7',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
