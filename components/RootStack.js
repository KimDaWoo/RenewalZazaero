import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Footer from './layout/Footer';
import LoginRoot from './Login/LoginRoot';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon_Aws from 'react-native-vector-icons/FontAwesome';


const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainTab" component={Footer} options={{headerShown: false}} />
      <Stack.Screen name="LoginRoot" component={LoginRoot} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default RootStack;
