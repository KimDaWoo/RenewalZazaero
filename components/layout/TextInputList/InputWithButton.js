import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CheckResult from './CheckResult'; // CheckResult 컴포넌트를 임포트합니다
import commonStyles from '../../layout/common/commonStyles.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const InputWithButton = ({ 
  placeholder, 
  value, 
  onChangeText, 
  buttonText, 
  onButtonPress, //버튼 클릭 시 발생 이벤트
  checkResultVisible, // 인풋 창 아래의 안내문구 visiblity
  checkResultText, // 안내 문구 > 호출 시 조건문으로 케이스에 맞게 설정하시오.
  checkResultSuccess, // 안내 문구의 스타일 지정을 위한 스위치. 회원가입에서는 위 속성으로 안내 문구의 색을 변경.
  keyboardType,
  maxLength,
  disabled, // 추가된 속성
  editable,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[commonStyles.sectionContainer_2, commonStyles.mgTB14]} >
      <View style={commonStyles.horizontalAlignment}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          keyboardType ={keyboardType}
          maxLength={maxLength}
          editable={editable}
        />
        <TouchableOpacity 
          style={[styles.button, disabled && styles.buttonDisabled]} 
          onPress={disabled ? null : onButtonPress}
          disabled={disabled}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View> 
      <CheckResult 
        visible={checkResultVisible} 
        text={checkResultText} 
        success={checkResultSuccess} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  input: {
    height: 40,
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontWeight: '400',
    paddingLeft : 16,
    
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: '#6C6C6C',
  },
  button: {
    backgroundColor: '#3D40E0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginLeft: 8,
    width: "24%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonDisabled: {
    backgroundColor: '#A0A0A0', // 비활성화된 버튼 색상
  },
});

export default InputWithButton;
