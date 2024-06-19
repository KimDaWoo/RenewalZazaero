import React, { useState, useRef, useEffect } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneAuthScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmResult, setConfirmResult] = useState(null);
  const [message, setMessage] = useState('');
  const recaptchaVerifier = useRef(null);

  const sendVerificationCode = () => {
    const appVerifier = recaptchaVerifier.current;
    auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((result) => {
        setConfirmResult(result);
        setMessage('Verification code has been sent to your phone.');
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  };

  const confirmCode = () => {
    
    if (confirmResult && verificationCode.length) {
      confirmResult.confirm(verificationCode)
        .then((user) => {
          setMessage('Phone number verified successfully!');
        })
        .catch((error) => {
          setMessage(`Error: ${error.message}`);
        });
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
      <Button title="Send Verification Code" onPress={sendVerificationCode} />

      <TextInput
        placeholder="Verification Code"
        onChangeText={setVerificationCode}
        value={verificationCode}
      />
      <Button title="Confirm Verification Code" onPress={confirmCode} />

      <Text>{message}</Text>
      <View id="recaptcha-container" ref={recaptchaVerifier} />
    </View>
  );
};

export default PhoneAuthScreen;
