import React from 'react';
import {Text, Button, View} from 'react-native';

function Mypage({ navigation }) {
  return (
    <View>
      <Button title="Go to Login" onPress={() => navigation.navigate('LoginRoot')}/>
    </View>
  );
}

export default Mypage;
