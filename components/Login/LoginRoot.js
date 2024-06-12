import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import Login from './Stacks/Login';
import FindID from './Stacks/FindID/FindID';
import FindPW from './Stacks/FindPW/FindPW';
import SignUpRoot from './Stacks/SignUp/SignUpRoot';

import Icon_Aws from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import getHeaderOptionsType1 from '../layout/TopGNB/Type1';

const Stack = createNativeStackNavigator();



function LoginRoot({navigation, route}) {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={({ navigation }) => getHeaderOptionsType1('로그인', navigation)}/>
            <Stack.Screen name="SignUpRoot" component={SignUpRoot} options={({ navigation }) => getHeaderOptionsType1('회원가입', navigation)}/>
            <Stack.Screen name="FindID" component={FindID} options={({ navigation }) => getHeaderOptionsType1('아이디 찾기', navigation)}/>
            <Stack.Screen name="FindPW" component={FindPW} options={({ navigation }) => getHeaderOptionsType1('비밀번호 찾기', navigation)}/>
        </Stack.Navigator>
    );
}

export default LoginRoot