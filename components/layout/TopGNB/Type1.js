import React from 'react';
import CustomBackButton from './CustomBackButton';

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