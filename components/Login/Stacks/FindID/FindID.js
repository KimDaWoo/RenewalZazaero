import React from 'react';
import { View, StyleSheet } from 'react-native';

const AlignItemsExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // 주 축을 가로 방향으로 설정
    alignItems: 'center', // 교차 축 중앙에 정렬
    justifyContent: 'center', // 주 축 중앙에 정렬
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});

export default AlignItemsExample;