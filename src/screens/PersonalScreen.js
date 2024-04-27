import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserData} from '../redux/actions';
import {colors} from '../common/config';

const PersonalScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.data);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const filterData = userData.filter(data => data?.personal === true);

  return (
    <View style={styles.main}>
      <Text style={styles.headingTxt}>Personal User:</Text>
      {filterData && filterData !== null ? (
        <FlatList
          data={filterData}
          keyExtractor={item => item._id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.cardContainer}
                onPress={() =>
                  navigation.navigate('UserDetailScreen', {userData: item})
                }>
                <Text style={styles.normalTxt}>
                  Name: {item?.firstName} {item?.lastName}
                </Text>
                <Text style={styles.normalTxt}>
                  Email Address: {item?.email}
                </Text>
                <Text style={styles.normalTxt}>
                  Type: {item?.personal && 'Personal'}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text style={styles.notFound}>No Accounts Found!</Text>
      )}
    </View>
  );
};

export default PersonalScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  cardContainer: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: colors.white,
    elevation: 5,
    margin: 5,
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    paddingBottom: 10,
    paddingRight: 10,
  },
  normalTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    paddingBottom: 10,
    paddingRight: 10,
  },
  notFound: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black,
    paddingBottom: 10,
    paddingRight: 10,
    textAlign: 'center',
    paddingTop: 20,
  },
});
