import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import LongInput from './LongInput'; // LongInput 컴포넌트를 불러옵니다

const BusinessNumberInput = ({ completion, updateCompletion }) => {
    const [busNum, setBusNum] = useState('');

    useEffect(()=> {
        if(busNum.length === 12) {
            updateCompletion({
                ...completion,
                busNum: true,
            });
        }
        else {
            updateCompletion({
                ...completion,
                busNum: false,
            });
        }
    }, [busNum])

    // 사업자 번호 형식에 맞추기 위한 함수
    const formatBusinessNumber = (text) => {
        // 숫자만 남기기
        const cleaned = ('' + text).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,5})$/);
        if (match) {
            return !match[2]
                ? match[1]
                : `${match[1]}-${match[2]}${match[3] ? `-${match[3]}` : ''}`;
        }
        return text;
    };


    const handleChange = (text) => {
        const formatted = formatBusinessNumber(text);
        setBusNum(formatted);
    };


    return (
        <View>
            <LongInput
                placeholder="사업자 번호"
                value={busNum}
                onChangeText = {handleChange}
                keyboardType="phone-pad"
                maxLength={12} // 예시 길이
            />
        </View>
    );
};

export default BusinessNumberInput;
