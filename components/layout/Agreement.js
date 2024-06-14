import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SmallCheckBoxText from './CheckBox/SmallCheckBoxText';
import AgreementCheckBox from './CheckBox/AgreementCheckBoxText';

const Agreement = ({ completion, updateCompletion }) => {
    const [agreements, setAgreements] = useState({
        all: false,
        serviceTerms: false,
        personalInformation: false,
        financialTerms: false,
        privacyTerms: false,
        marketingTerms: false,
    });

    const allExceptAllTrue = () => {
        // 'all' 속성을 제외한 나머지 프로퍼티들의 값이 모두 true인지 확인
        const otherProperties = Object.keys(agreements).filter(key => key !== 'all');
        return otherProperties.every(key => agreements[key] === true);
    };

    

    const allReset = () => {
        setAgreements({
            all: false,
            serviceTerms: false,
            personalInformation: false,
            financialTerms: false,
            privacyTerms: false,
            marketingTerms: false
        });
    };

    const allSet = () => {
        setAgreements({
            all: true,
            serviceTerms: true,
            personalInformation: true,
            financialTerms: true,
            privacyTerms: true,
            marketingTerms: true
        });
    };

    const handleAgreementChange = (key) => {
        setAgreements(prevAgreements => {
            const newAgreements = {
                ...prevAgreements,
                [key]: !prevAgreements[key],
            };

            if (key !== 'all') {
                newAgreements.all = allExceptAllTrue() && newAgreements[key];
            }

            return newAgreements;
        });
    };

    useEffect(() => {
        if (allExceptAllTrue()) {
            setAgreements(prevAgreements => ({ ...prevAgreements, all: true }));
        } else {
            setAgreements(prevAgreements => ({ ...prevAgreements, all: false }));
        }

        const permmited = () => {
            // 'marketingTerms','all' 속성을 제외한 나머지 프로퍼티들의 값이 모두 true인지 확인 > 필수 사항 모두 체크 여부 확인
            const otherProperties = Object.keys(agreements).filter(key => key !== 'marketingTerms').filter(key => key !== 'all');
            return otherProperties.every(key => agreements[key] === true);
        };

        if(permmited()) {
            updateCompletion({
                ...completion,
                agreeToTerms: true,
            });
        }
        else {
            updateCompletion({
                ...completion,
                agreeToTerms: false,
            });
        }

    }, [agreements.serviceTerms, agreements.financialTerms, agreements.privacyTerms, agreements.marketingTerms, agreements.personalInformation]);

    const masterHandler = () => {
        if (agreements.all) {
            allReset();
        } else {
            allSet();
        }
    };

    return (
        <View>
            <SmallCheckBoxText text="전체 약관 동의" isChecked={agreements.all} onChange={masterHandler} />
            <AgreementCheckBox text="서비스 이용약관" isChecked={agreements.serviceTerms} onChange={() => handleAgreementChange('serviceTerms')} detailPage="ServiceTerms" />
            <AgreementCheckBox text="개인정보 처리방침 동의" isChecked={agreements.personalInformation} onChange={() => handleAgreementChange('personalInformation')} detailPage="PersonalInformation" />
            <AgreementCheckBox text="전자금융거래 이용약관" isChecked={agreements.financialTerms} onChange={() => handleAgreementChange('financialTerms')} detailPage="FinancialTerms" />
            <AgreementCheckBox text="제3차 개인정보수집 동의" isChecked={agreements.privacyTerms} onChange={() => handleAgreementChange('privacyTerms')} detailPage="PrivacyTerms" />
            <AgreementCheckBox text="홍보 및 마케팅 이용 동의" isChecked={agreements.marketingTerms} onChange={() => handleAgreementChange('marketingTerms')} detailPage="MarketingTerms" Essential={false} />
        </View>
    );
};

export default Agreement;
