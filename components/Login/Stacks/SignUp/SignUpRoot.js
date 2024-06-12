import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './Stacks/SignUp';
import AddressSearchScreen from '../../../layout/FindAdress/AddressSearchScreen';

const Stack = createNativeStackNavigator();

function SignUpRoot({navigation, route}) {
  return (
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="AddressSearch" component={AddressSearchScreen} options={{headerShown: false}} />
      </Stack.Navigator>
  );
}

export default SignUpRoot;
