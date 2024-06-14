import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import InputWithButton from './InputWithButton'; // 기존 InputWithButton 컴포넌트를 임포트합니다
import commonStyles from '../../layout/common/commonStyles.js';

const PhoneNumberVerification = ({ completion, updateCompletion, onPhoneNumberChange}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isVerificationButtonDisabled, setIsVerificationButtonDisabled] = useState(false);



  useEffect(()=> {
        if(isVerified) {
            updateCompletion({
                ...completion,
                phone: true,
            });
        }
        else {
            updateCompletion({
                ...completion,
                phone: false,
            });
        }
    }, [isVerified])

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^(\d{3})-(\d{4})-(\d{4})$/;
    return phoneRegex.test(number);
  };

  const handlePhoneNumberChange = (text) => {
    setIsVerified(false); // 전화번호 변경 시 인증 상태 해제
    setIsVerificationButtonDisabled(false); // 전화번호 변경 시 재발급 버튼 활성화
    const cleaned = ('' + text).replace(/\D/g, '');
    let formattedNumber = '';
    if (cleaned.length <= 3) {
      formattedNumber = cleaned;
    } else if (cleaned.length <= 7) {
      formattedNumber = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else {
      formattedNumber = `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
    }
    setPhoneNumber(formattedNumber);
    onPhoneNumberChange(formattedNumber);
  };


  const sendVerificationCode = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setIsVerificationSent(true);
      Alert.alert('인증번호가 발송되었습니다.');
      
    } else {
      Alert.alert('전화번호를 다시 입력해주세요.');
    }
  };

  const verifyCode = () => {
    if (verificationCode === '123456') { // 예시로 '123456'을 올바른 코드로 가정합니다.
      setIsVerified(true);
      setIsVerificationButtonDisabled(true); // 인증 완료 시 재발급 버튼 비활성화
      Alert.alert('인증이 완료되었습니다.');
      setIsVerificationSent(false);
      setVerificationCode('');
    } else {
      Alert.alert('잘못된 인증번호입니다.');
    }
  };

  return (
    <View style={commonStyles.container_2}>
      <InputWithButton
        placeholder="전화번호 입력"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        onButtonPress={sendVerificationCode}
        buttonText={isVerificationSent ? '재발급' : '인증번호'}
        keyboardType="phone-pad"
        maxLength={13} // 010-XXXX-XXXX 형식의 최대 길이 설정
        disabled={isVerificationButtonDisabled} // 인증 완료 시 재발급 버튼 비활성화
      />
      {isVerificationSent && !isVerified && (
        <InputWithButton
          placeholder="인증번호 입력"
          value={verificationCode}
          onChangeText={setVerificationCode}
          onButtonPress={verifyCode}
          buttonText="확인"
          checkResultVisible={false}
          keyboardType="number-pad"
          maxLength={6} // 인증번호의 최대 길이 설정
        />
      )}
    </View>
  );
};


export default PhoneNumberVerification;
