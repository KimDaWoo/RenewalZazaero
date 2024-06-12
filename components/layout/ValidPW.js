import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import LongInput from './TextInputList/LongInput.js';
import commonStyles from './common/commonStyles.js';
import CheckResult from './TextInputList/CheckResult.js';

const ValidPW = () => {
  const [PW, setPW] = useState("");
  const [PW2nd, setPW2nd] = useState("");
  const [textOn, setTextOn] = useState(false);
  const [same, setSame] = useState(false);

  useEffect(() => {
    if (PW2nd !== "" && PW !== "") {
      setTextOn(true);
      if (PW2nd === PW) {
        setSame(true);
      } else {
        setSame(false);
      }
    } else {
      setTextOn(false);
    }
  }, [PW, PW2nd]);

  return (
    <View style={[commonStyles.sectionContainer_2, commonStyles.mgTB14]}>
      <View style={commonStyles.sectionContainer_1}>
        <LongInput
          placeholder="비밀번호"
          value={PW}
          onChangeText={setPW}
          secure={true}
          extraStyles = {{marginTop: 0}}
        />
        <LongInput
          placeholder="비밀번호 확인"
          value={PW2nd}
          onChangeText={setPW2nd}
          secure={true}
          extraStyles = {{marginBottom: 0}}
        />
      </View>
      <CheckResult
        visible={textOn}
        text={same ? "비밀번호가 일치합니다." : "비밀번호를 다시 확인해주세요."}
        success={same}
      />
    </View>
  );
}

export default ValidPW;
