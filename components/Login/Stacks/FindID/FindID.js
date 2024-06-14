import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LongInput from '../../../layout/TextInputList/LongInput';
import commonStyles from '../../../layout/common/commonStyles';
import PhoneNumberVerification from '../../../layout/TextInputList/PhoneNumberVerification';
import ClipBoardText from '../../../layout/TextList/ClipBoardText';
import TrigerLongButton from '../../../layout/TrigerLongButton';

const FindID = ({ navigation, route }) => {
  const [chargePerson, setChargePerson] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userChecked, setUserChecked] = useState(false); // 인증 변수
  const [userID, setUserID] = useState('dawoo32**');
  const [modalVisible, setModalVisible] = useState(false); // 모달의 표시 여부 상태 변수


  const [completion, setCompletion] = useState({
    phone: false,
  });


  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
  };

  const handleUpdateCompletion = (updatedCompletion) => {
    setCompletion(updatedCompletion);
  };

  const handleNavigationToLogin = () => {
    navigation.navigate('Login');
  };

  const sharedProps = {
    completion,
    updateCompletion: handleUpdateCompletion,
    onPhoneNumberChange: handlePhoneNumberChange, // phoneNumber 변경 핸들러 추가
  };

  useEffect(() => { 
    if (completion.phone === true && chargePerson !== '' ) {
      // 지금은 없지만, 두 데이터를 포함한 컬럼이 서버에 존재하는 경우, userID 값과 userChecked 값을 올바르게 바꿔준다. 일단은 임의로 위 조건만 만족하면 true로 전환했다.
      setUserChecked(true);
    } else {
      setUserChecked(false);
    }
  }, [completion, chargePerson]); // userChecked이 변경될 때마다 effect가 호출됩니다.

  return (
    <View style={[commonStyles.mainContainer_1, commonStyles.justifyCntCneter]}>
      {userChecked ? 
        <View>
          <View style={commonStyles.sectionContainer_1}>
            <LongInput
              placeholder="담당자명"
              value={chargePerson}
              onChangeText={setChargePerson}
            />
          </View>
          <PhoneNumberVerification {...sharedProps} />
        </View>
        :
        <View>
          <Text>당신의 아이디는 다음과 같습니다.</Text>
          <ClipBoardText
            text={userID}
            clipboardOn={false}
            disabled={true}
          />
          <TrigerLongButton
            BtnText="로그인 바로가기"
            Triger={true}
            Handling = {handleNavigationToLogin}
          />
        </View>
      }
      
      
    </View>
  );
};

export default FindID;