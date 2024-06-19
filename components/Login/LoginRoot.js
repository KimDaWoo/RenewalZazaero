import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './Stacks/Login';
import FindID from './Stacks/FindID/FindID';
import FindPW from './Stacks/FindPW/FindPW';
import SignUpRoot from './Stacks/SignUp/SignUpRoot';
import getHeaderOptionsType1 from '../layout/TopGNB/Type1';
import getHeaderOptionsType2 from '../layout/TopGNB/Type2';

const Stack = createNativeStackNavigator();

function LoginRoot({navigation, route}) {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={({ navigation }) => getHeaderOptionsType1('로그인', navigation)}/>
            <Stack.Screen name="SignUpRoot" component={SignUpRoot} options={{headerShown: false}}/>
            <Stack.Screen name="FindID" component={FindID} options={({ navigation }) => getHeaderOptionsType2('아이디 찾기', navigation, "발주신청")}/>
            <Stack.Screen name="FindPW" component={FindPW} options={({ navigation }) => getHeaderOptionsType1('비밀번호 찾기', navigation)}/>
        </Stack.Navigator>
    );
}

export default LoginRoot