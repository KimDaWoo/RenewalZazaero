import React, { useState } from 'react';
import { View } from 'react-native';
import InputWithButton from '../../../../layout/TextInputList/InputWithButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import commonStyles from '../../../../layout/common/commonStyles';

const IdCheckComponent = ({ completion, updateCompletion }) => {
    const [ID, setID] = useState('');
    const [ckID, setCkID] = useState(true);
    const [ckBtnClicked, setCkBtnClicked] = useState(false);
    const [errorText, setErrorText] = useState('');

    const handleCkID = async () => {
        if (!ckBtnClicked) {
            setCkBtnClicked(true);
        }

        // 유효성 검사 로직 추가
        const isValid = validateID(ID);
        if (!isValid) {
            setErrorText("아이디는 5글자 이상이어야 하며, 숫자와 문자를 포함해야 합니다.");
            setCkID(false); // 아이디 유효성 검사 실패
            updateCompletion({ ...completion, ID: false });
            return;
        }

        try {
            const asyncID = await AsyncStorage.getItem(ID);
            const isIDValid = asyncID !== null && asyncID !== '';

            if (isIDValid) {
                setCkID(false); // 이미 존재하는 아이디
            } else {
                setCkID(true); // 사용 가능한 아이디
            }
            updateCompletion({ ...completion, ID: !isIDValid }); // 아이디 유효성 검사 성공 시
        } catch (error) {
            console.error('Error while getting item from AsyncStorage:', error);
            Alert.alert('중복 확인 중 오류가 발생했습니다.');
        }
    };

    // 아이디 유효성 검사 함수
    const validateID = (id) => {
        // 1. 5글자 이상
        if (id.length < 5) {
            return false;
        }
        // 2. 숫자와 문자 포함 여부
        const hasNumber = /\d/.test(id);
        const hasLetter = /[a-zA-Z]/.test(id);
        if (!(hasNumber && hasLetter)) {
            return false;
        }
        return true;
    };

    return (
        <InputWithButton
                placeholder="아이디 입력"
                value={ID}
                onChangeText={setID}
                onButtonPress={handleCkID}
                buttonText="중복확인"
                checkResultVisible={ckBtnClicked}
                checkResultText={ckID ? '사용 가능한 아이디입니다!' : errorText}
                checkResultSuccess={ckID}
                keyboardType="default"
                maxLength={20} // 예시 길이
                editable={true}
        />
    );
};

export default IdCheckComponent;
