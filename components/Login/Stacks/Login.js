import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginIMG from "../../../assets/m_logo.png"
import TrigerLongButton from '../../layout/TrigerLongButton.js';
import commonStyles from '../../layout/common/commonStyles.js'
import LongInput from '../../layout/TextInputList/LongInput.js';

const Login = ({ navigation }) => {
    
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    const [Wanning, setWanning] = useState('');

    const isInputsValid = ID.trim() !== '' && PW.trim() !== '';

    const handleLogin = async() => {

      const chkID = await AsyncStorage.getItem(ID) // AsyncStorage에 해당 ID/PW 존재하는지 확인
      const chkPW = await AsyncStorage.getItem(PW)
    
      isInputsValid ? setWanning('') : setWanning('아이디와 비밀번호 모두 입력해주세요.')

      if(isInputsValid) {
        setWanning('')
        if (chkID == null && chkPW == null) { //입력 아이디, 비밀번호 확인
          setWanning('아이디 혹은 비밀번호가 틀렸습니다. 다시 확인 해주세요.')
        }
        else {
          navigation.navigate('MainTab')
        }
      }
    };

  return (
    <View style={[commonStyles.mainContainer_1, commonStyles.justifyCntCneter]}>
      <View style={commonStyles.sectionContainer_1}>
        <Image style={styles.img} source={LoginIMG} resizeMode="contain" />
          <LongInput
            placeholder = "아이디 입력"
            value = {ID}
            onChangeText = {setID}
            secure = {false}
          />
          <LongInput
            placeholder = "비밀번호 입력"
            value = {PW}
            onChangeText = {setPW}
            secure = {true}
          />
          <Text style={styles.wanning}>{Wanning}</Text>
          <TrigerLongButton
            BtnText = "로그인"
            Triger = {isInputsValid}
            Handling = {handleLogin}
          />
          <View style={styles.doubleText}>
            <TouchableOpacity onPress={() => navigation.navigate('FindID')}><Text style={styles.notifyText} >아이디찾기</Text></TouchableOpacity>
            <Text style={styles.middleLine}>|</Text>
            <TouchableOpacity onPress={() => navigation.navigate('FindPW')}><Text style={styles.notifyText} >비밀번호찾기</Text></TouchableOpacity>
          </View>
          <View style={styles.doubleText}>
            <Text style={styles.notifyText}> 아직 계정이 없으신가요? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpRoot')}><Text style={styles.touchSignUpText}>회원가입</Text></TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img : {
    marginBottom : 36,    
  },
  wanning : {
    width: "92%",
    color: 'red',
    fontSize: 13,
  },
  doubleText : {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  notifyText : {
    fontSize: 14,
    fontWeight: "400",
  },
  touchSignUpText : {
    fontWeight: "bold",
    color: "#3D40E0",
    marginLeft: 6,
  },
  middleLine : {
    marginLeft : 8,
    marginRight : 8,
    fontSize: 16,
  }
  
});

export default Login;
