import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tag = ({ text, backgroundColorcolor="#3D40E0", boarderColor="#3D40E0" }) => { 
  return (
    <View style={[styles.tag, {backgroundColor: backgroundColorcolor, borderColor: boarderColor}]}>
      <Text style={[styles.tagText]}>{text}</Text> 
    </View>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
  tag: {
    paddingVertical: 4, 
    paddingHorizontal: 8,
    borderRadius: 14,
    borderWidth: 1,
    alignSelf: 'flex-start', // 내부 컴포넌트(Text)에 맞게 크기 자동 조절
   }, 
  tagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: "700"
  },
});

export default Tag;
