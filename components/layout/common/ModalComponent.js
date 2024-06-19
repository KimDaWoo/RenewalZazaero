import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet, Animated } from 'react-native';

const ModalComponent = ({
  isVisible,
  closeModal,
  modalType,
  innerText,
  modalImage,
  buttonCount,
  button1Text,
  button1Color = "#3D40E0",
  button1Action,
  button2Text,
  button2Color = "#3D40E0",
  button2Action,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // 초기 값 설정

  useEffect(() => {
    if (isVisible) {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 300, // 0.3초 동안 애니메이션 수행
          useNativeDriver: true,
        }
      ).start();
    }
  }, [isVisible]);

  // 모달의 기본 스타일
  const modalStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 반투명 배경
    },
    modalContent: {
      width: 300, // 모달 가로 길이
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      opacity: fadeAnim, // 투명도 애니메이션 적용
      transform: [
        {
          translateY: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0], // 시작 위치에서부터 위로 100 이동
          }),
        },
      ],
    },
    modalImage: {
      width: '100%',
      height: 200, // 이미지 높이, 필요에 따라 조정 가능
      resizeMode: 'cover',
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    button: {
      flex: buttonCount === 1 ? 1 : 0, // 버튼이 1개인 경우 가로 폭을 균등하게, 2개인 경우 고정 폭
      paddingVertical: 8,
      paddingHorizontal: 16,
     
      backgroundColor: '#3D40E0', // 버튼 배경색
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: buttonCount === 2 ? "47%" : "100%",
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    innerText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#141414",
      marginBottom: 14,
    }
  });

  return (
    <Modal
      animationType="none" // 애니메이션은 커스텀으로 처리하기 때문에 'none'으로 설정
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={modalStyles.modalContainer}>
        <Animated.View style={modalStyles.modalContent}>
          {modalImage && <Image source={modalImage} style={modalStyles.modalImage} />}
          <Text style={modalStyles.innerText}>{innerText}</Text>
          <View style={modalStyles.buttonContainer}>
            {buttonCount >= 1 && (
              <TouchableOpacity style={modalStyles.button} onPress={button1Action}>
                <Text style={modalStyles.buttonText}>{button1Text}</Text>
              </TouchableOpacity>
            )}
            {buttonCount === 2 && (
              <TouchableOpacity style={[modalStyles.button, { marginLeft: "6%", backgroundColor: button2Color }]} onPress={button2Action}>
                <Text style={modalStyles.buttonText}>{button2Text}</Text>
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalComponent;


// <ModalComponent
//     isVisible={modalVisible}
//     closeModal={() => setModalVisible(false)} 즉, 
//     innerText="로그인 페이지로 돌아 가시겠습니까?"
//     buttonCount={2}
//     button1Text="예"
//     button1Action={() => {
//         navigation.navigate('Login'); // 로그인 페이지로 이동
//         setModalVisible(false); // 모달을 닫습니다.
//     }}
//     button2Text="아니오"
//     button2Action={() => setModalVisible(false)} // 모달을 닫습니다.
// />

// 위와 같은 형식으로 호출합니다.