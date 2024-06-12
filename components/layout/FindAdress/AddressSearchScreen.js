import React from 'react';
import { View, StyleSheet } from 'react-native';
import Postcode from '@actbase/react-daum-postcode';

const AddressSearchScreen = ({ navigation }) => {
  const handleSelectPostcode = (data) => {
    // 주소 선택 시 이전 화면으로 돌아가고 주소 데이터를 전달
    navigation.navigate({
      name: 'SignUp',
      params: { postcode: data.zonecode, address: data.address },
      merge: true,
    });
  };

  return (
    <View style={styles.container}>
      <Postcode
        style={styles.postcode}
        jsOptions={{ animation: true, autoClose: true }}
        onSelected={handleSelectPostcode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postcode: {
    width: '100%',
    height: '100%',
  },
});

export default AddressSearchScreen;
