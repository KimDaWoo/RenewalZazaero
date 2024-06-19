// ToastModule.js
import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const showToast = ({ type = 'info', text1, text2, visibilityTime = 1500 }) => {
  Toast.show({
    type,
    text1,
    text2,
    visibilityTime,
    text1Style : {
      fontSize: 16,
      fontWeight: 'bold',
      color: "#3D40E0"
    },
    text2Style: {
      fontSize: 14,
      fontWeight: '500',
    }
  });
};

const ToastModule = () => <Toast />;

export { showToast, ToastModule };

/**
import { showToast } from '../layout/common/ToastModule'; 

const handleShowToast = () => {
  showToast({
    text1: '자재로 안내',
    text2: '당신의 방문을 환영합니다.',      
  });
};

return (
  <View>
    <Button title="Show Toast" onPress={handleShowToast} />
  </View>
)

이런식으로 추출해서 쓰면 됩니다.
*/