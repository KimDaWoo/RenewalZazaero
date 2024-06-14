import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LongInput from '../../../../layout/TextInputList/LongInput';

const CompanyNameSet = ({ completion, updateCompletion }) => {

    const [company, setCompany] = useState('');
    const [chargePerson, setChargePerson] = useState('');

    useEffect(()=> {
        if(company !== '' && chargePerson !== '') {
            updateCompletion({
                ...completion,
                company: true,
                chargePerson: true
            });
        }
        else {
            updateCompletion({
                ...completion,
                company: false,
                chargePerson: false
            });
        }
    }, [company, chargePerson])

    

    return (
        <View>
            <LongInput
                placeholder="업체명"
                value={company}
                onChangeText = {setCompany}
            />
            <LongInput
                placeholder="담당자명"
                value={chargePerson}
                onChangeText = {setChargePerson}
            />
        </View>
    )
}

export default CompanyNameSet