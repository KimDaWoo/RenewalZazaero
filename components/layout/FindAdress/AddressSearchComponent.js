import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import InputWithButton from '../TextInputList/InputWithButton';
import LongInput from '../TextInputList/LongInput';

const AddressSearchComponent = ({ navigation, route, onAddressSelected, completion, updateCompletion }) => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  useEffect(()=> {
      if(postcode !== '' && address !== '' && detailAddress !=='') {
          updateCompletion({
              ...completion,
              address: true,
          });
      }
      else {
          updateCompletion({
              ...completion,
              address: false,
          });
      }
  }, [postcode, address, detailAddress])

  useEffect(() => {
    if (route?.params?.postcode && route?.params?.address) {
      setPostcode(route.params.postcode);
      setAddress(route.params.address);
      onAddressSelected(route.params.postcode, route.params.address);
    }
  }, [route?.params]);

  return (
    <View>
      <InputWithButton
        placeholder="우편번호"
        value={postcode}
        editable={false}
        buttonText="주소찾기"
        onButtonPress={() => navigation.navigate('AddressSearch')}
      />
      <LongInput
        placeholder="주소"
        value={address}
        editable={false}
      />
      <LongInput
        placeholder="상세주소"
        value={detailAddress}
        onChangeText={setDetailAddress}
        editable={address !== '' ? true : false}
      />
    </View>
  );
};

export default AddressSearchComponent;
