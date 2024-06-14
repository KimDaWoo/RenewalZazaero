import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import commonStyles from "../../../../layout/common/commonStyles.js";
import ValidPW from '../../../../layout/ValidPW.js';
import PhoneNumberVerification from '../../../../layout/TextInputList/PhoneNumberVerification.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import HorizontalLine from '../../../../layout/HorizontalLine.js';
import AddressSearchComponent from '../../../../layout/FindAdress/AddressSearchComponent.js';
import Agreemnet from '../../../../layout/Agreement.js';
import IdCheckComponent from './IdCheckComponent.js';
import LongInput from '../../../../layout/TextInputList/LongInput.js';
import BusinessNumberInput from '../../../../layout/TextInputList/BusinessNumberInput.js';
import CompanyNameSet from './CompanyNameSet.js';
import TrigerLongButton from '../../../../layout/TrigerLongButton.js';

const SignUp = ({ navigation, route }) => {
    
    const [postcode, setPostcode] = useState('');
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');

    const [completion, setCompletion] = useState({
        ID: false, // 아이디 입력 여부 초기값 설정
        PW: false,
        company: false,
        phone: false,
        chargePerson: false,
        address: false,
        agreeToTerms: false,
        busNum: false,
    });

    


    const allTrue = Object.values(completion).every(value => value === true); // completion의 모든 값이 true 인지 확인

    const handleUpdateCompletion = (updatedCompletion) => {
        setCompletion(updatedCompletion);
    };

    const handleAddressSelected = (postcode, address) => {
        setPostcode(postcode);
        setAddress(address);
    };

    const sharedProps = {
        completion,
        updateCompletion: handleUpdateCompletion
    };

    const handleSignUp = () => {

        if(!allTrue) {
            Alert.alert("모든 항목을 정상적으로 입력해주세요.")
        }
        else{
            // 회원 DB에 저장하는 로직 필요
            Alert.alert(
                "회원가입이 완료되었습니다!",
                "로그인 페이지로 이동합니다.",
                [
                    { text: "OK", onPress: () => navigation.navigate('Login') }
                ]
            );
        }
    }

    return (
        <KeyboardAwareScrollView
            style={commonStyles.mainContainer_2}
            extraScrollHeight={50}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="always"
        >
            <View style={commonStyles.sectionContainer_3}>
                <IdCheckComponent {...sharedProps} />
                <ValidPW {...sharedProps} />
            </View>

            <HorizontalLine />

            <View style={commonStyles.sectionContainer_3}>
                <CompanyNameSet {...sharedProps} />
                <PhoneNumberVerification {...sharedProps} />
                <BusinessNumberInput {...sharedProps} />
                <AddressSearchComponent
                    navigation={navigation}
                    route={route}
                    onAddressSelected={handleAddressSelected}
                    {...sharedProps}
                />
            </View>
            
            <HorizontalLine />
            
            <View style={commonStyles.sectionContainer_3}>
                <Agreemnet {...sharedProps} />

                <TrigerLongButton
                    BtnText = "회원가입"
                    Triger = {allTrue}
                    Handling = {handleSignUp}
                />
            </View>

        </KeyboardAwareScrollView>
    );
};

export default SignUp;
