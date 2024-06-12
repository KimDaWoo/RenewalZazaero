import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

import commonStyles from "../../../../layout/common/commonStyles.js"
import InputWithButton from '../../../../layout/TextInputList/InputWithButton.js';
import LongInput from '../../../../layout/TextInputList/LongInput.js';
import ValidPW from '../../../../layout/ValidPW.js';
import PhoneNumberVerification from '../../../../layout/TextInputList/PhoneNumberVerification.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HorizontalLine from '../../../../layout/HorizontalLine.js';
import AddressSearchComponent from '../../../../layout/FindAdress/AddressSearchComponent.js';
import Agreemnet from '../../../../layout/Agreement.js';

const SignUp = ({ navigation, route }) => {
    const [ID, setID] = useState('');
    const [ckID, setCkID] = useState(true);
    const [ckBtnClicked, setCkBtnClicked] = useState(false);
    const [company, setCompany] = useState('');
    const [chargePerson, setChargePerson] = useState('');
    const [busNum, setBusNum] = useState('');
    const [postcode, setPostcode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');

    const handleCkID = async () => {
      if (!ckBtnClicked) {
        setCkBtnClicked(true);
      }

      try {
        const asyncID = await AsyncStorage.getItem(ID);
        const isIDValid = asyncID !== null && asyncID !== ''; // 해당 값이 true라면, 입력한 아이디는 사용이 불가능함.

        isIDValid ? setCkID(false) : setCkID(true);
      } catch (error) {
        console.error('Error while getting item from AsyncStorage:', error);
        Alert.alert('중복 확인 중 오류가 발생했습니다.');
      }
    };

    const handleAddressSelected = (postcode, address) => {
      setPostcode(postcode);
      setAddress(address);
    };

    return (
      <KeyboardAwareScrollView
        style={commonStyles.mainContainer_2}
        extraScrollHeight={100}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="always"
      >
        <View style={commonStyles.sectionContainer_3}>
          <InputWithButton
            placeholder="아이디 입력"
            value={ID}
            onChangeText={setID}
            onButtonPress={handleCkID}
            buttonText="중복확인"
            checkResultVisible={ckBtnClicked}
            checkResultText={ckID ? '사용 가능한 아이디입니다!' : '이미 존재하는 아이디입니다.'}
            checkResultSuccess={ckID}
          />
          <ValidPW />
        </View>
        <HorizontalLine />
        <View style={commonStyles.sectionContainer_3}>
          <LongInput
            placeholder="업체명"
            value={company}
            onChangeText={setCompany}
          />
          <LongInput
            placeholder="담당자명"
            value={chargePerson}
            onChangeText={setChargePerson}
          />
          <PhoneNumberVerification />
          <LongInput
            placeholder="사업자 번호"
            value={busNum}
            onChangeText={setBusNum}
          />
          <AddressSearchComponent 
            navigation={navigation}
            route={route}
            onAddressSelected={handleAddressSelected}
          />
        </View>
        <HorizontalLine />
        <View style={commonStyles.sectionContainer_3}>
            <Agreemnet/>
        </View>
      </KeyboardAwareScrollView>
    );
  };

export default SignUp;
