import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTab from './BottomTab';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import UserDetailScreen from '../screens/UserDetailScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={BottomTab} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
