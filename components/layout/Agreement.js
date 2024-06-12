import React, { useState } from 'react';
import { View } from 'react-native';
import SmallCheckBoxText from './CheckBox/SmallCheckBoxText';

const Agreement = () => {
    const [masterManager, setMasterManager] = useState(false); // 전체 동의를 눌러서 모두 선택이 된건지 혹은 하나씩 눌러서 모두 선택이 된건지 판단하는 변수

    const [agreements, setAgreements] = useState({
        all: false,
        serviceTerms: false,
        financialTerms: false,
        privacyTerms: false,
        marketingTerms: false,
    });

    const allReset = () => {
        setAgreements({
            all: false,
            serviceTerms: false,
            financialTerms: false,
            privacyTerms: false,
            marketingTerms: false
        });
    };

    const allSet = () => {
        setAgreements({
            all: true,
            serviceTerms: true,
            financialTerms: true,
            privacyTerms: true,
            marketingTerms: true
        });
    };

    const allExceptAllTrue = () => {
        // all 속성을 제외한 나머지 프로퍼티들의 값이 모두 true인지 확인
        const otherProperties = Object.keys(agreements).filter(key => key !== 'all');
        return otherProperties.every(key => agreements[key] === true);
    };

    const masterController = () => {
        if (masterManager) {
            allReset();
        } else {
            allSet();
        }
        setMasterManager(!masterManager);
        setAgreements({ ...agreements, all: !agreements.all });
    };

    if(allExceptAllTrue &&  !agreements.all) setAgreements({ ...agreements, all: true })

    return (
        <View>
            <SmallCheckBoxText text="전체 약관 동의" isChecked={agreements.all} onChange={masterController} />
            <SmallCheckBoxText text="서비스 이용약관" isChecked={agreements.serviceTerms} Duty={true} onChange={() => setAgreements({ ...agreements, serviceTerms: !agreements.serviceTerms })} />
            <SmallCheckBoxText text="전자금융거래 이용약관" isChecked={agreements.financialTerms} Duty={true} onChange={() => setAgreements({ ...agreements, financialTerms: !agreements.financialTerms })} />
            <SmallCheckBoxText text="제3차 개인정보수집 동의" isChecked={agreements.privacyTerms} Duty={true} onChange={() => setAgreements({ ...agreements, privacyTerms: !agreements.privacyTerms })} />
            <SmallCheckBoxText text="홍보 및 마케팅 이용 동의" isChecked={agreements.marketingTerms} Duty={true} onChange={() => setAgreements({ ...agreements, marketingTerms: !agreements.marketingTerms })} />
        </View>
    );
};

export default Agreement;
