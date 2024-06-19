// 발주현황 상세 페이지의 상단 GNB

import React from 'react';
import CustomBackButton from './CustomBackButton';
import Tag from '../tag';

const getHeaderOptionsType2 = (title, navigation, tagName) => ({
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
  headerRight: () => (
    <Tag 
      text={tagName} 
      backgroundColorcolor
      boarderColor
    />  // 태그 텍스트를 원하는대로 변경할 수 있습니다. 
  ),
});

export default getHeaderOptionsType2;