import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon_Aws from 'react-native-vector-icons/FontAwesome';

const CustomBackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon_Aws name="angle-left" size={30} />
  </TouchableOpacity>
);

const getHeaderOptionsType1 = (title, navigation) => ({
  headerShadowVisible: false,
  headerShown: true,
  title: title,
  headerStyle: {
    backgroundColor: '#ffffff',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerTitleAlign: 'center',
  headerLeft: () => (
    <CustomBackButton onPress={() => navigation.goBack()} />
  ),
});

export default getHeaderOptionsType1;