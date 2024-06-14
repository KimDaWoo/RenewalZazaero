import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './Stacks/SignUp';
import AddressSearchScreen from '../../../layout/FindAdress/AddressSearchScreen';
import TermsDetail from './Stacks/TermsDetail';
import getHeaderOptionsType1 from '../../../layout/TopGNB/Type1';

const Stack = createNativeStackNavigator();

function SignUpRoot({navigation, route}) {
  return (
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUp} options={({ navigation }) => getHeaderOptionsType1('회원가입', navigation)} />
        <Stack.Screen name="AddressSearch" component={AddressSearchScreen} options={({ navigation }) => getHeaderOptionsType1('주소찾기', navigation)} />
        <Stack.Screen name="TermsDetail" component={TermsDetail} options={({ navigation }) => getHeaderOptionsType1('약관/개인정보처리 방침', navigation)} />
      </Stack.Navigator>
  );
}

export default SignUpRoot;
