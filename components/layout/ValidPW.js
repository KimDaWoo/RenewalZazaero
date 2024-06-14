import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import LongInput from './TextInputList/LongInput.js';
import commonStyles from './common/commonStyles.js';
import CheckResult from './TextInputList/CheckResult.js';

const ValidPW = ({ completion, updateCompletion }) => {
  const [PW, setPW] = useState("");
  const [PW2nd, setPW2nd] = useState("");
  const [textOn, setTextOn] = useState(false); // 텍스트 언제부터 보여줄건ㅈ;
  const [same, setSame] = useState(false); // 일치 여부 확인
  const [isValid, setIsValid] = useState(false); // 유효성 검사
  const [errorText, setErrorText] = useState(''); // 에러 텍스트 뭘로 쓸건지


  useEffect(() => {

    if(PW === PW2nd) setSame(true);
    else setSame(false)

    if(PW == "" && PW === PW2nd) setTextOn(false)
    else {
      setTextOn(true);
      setIsValid(validatePassword(PW)) // 첫 패스워드에 대한 유효성 확인
    }

    if(isValid) {
      if(PW2nd == "") {setTextOn(false); setErrorText('');}
      else {
        if(!same) {
          setErrorText("두 비밀번호가 일치하지 않습니다.");
          updateCompletion({ ...completion, PW: false });
        }
        else {
          setErrorText('사용 가능한 비밀번호입니다!');
          updateCompletion({ ...completion, PW: true });
        }
      }
    }

     
    
  }, [PW, PW2nd, isValid, same]);

  const validatePassword = (password) => {
    // 특수문자, 숫자, 문자 포함 여부 및 8자리 이상 확인
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 8;

    if (!isValidLength) {
      setErrorText("비밀번호는 8자리 이상이어야 합니다.");
      return false;
    }
    if (!(hasNumber && hasLetter && hasSpecialChar)) {
      setErrorText("비밀번호는 특수문자, 숫자, 문자가 포함되어야 합니다.");
      return false;
    }
    setErrorText(""); // Clear any previous error message
    return true;
  };

  const handlePasswordChange = (password) => {
    setPW(password);
    validatePassword(password);
  };

  return (
    <View style={[commonStyles.sectionContainer_2, commonStyles.mgTB14]}>
      <View style={commonStyles.sectionContainer_1}>
        <LongInput
          placeholder="비밀번호"
          value={PW}
          onChangeText={handlePasswordChange}
          secure={true}
          extraStyles={{ marginTop: 0 }}
        />
        <LongInput
          placeholder="비밀번호 확인"
          value={PW2nd}
          onChangeText={setPW2nd}
          secure={true}
          extraStyles={{ marginBottom: 0 }}
        />
      </View>
      <CheckResult
        visible={textOn}
        text={errorText}
        success={same}
      />
    </View>
  );
};

export default ValidPW;
