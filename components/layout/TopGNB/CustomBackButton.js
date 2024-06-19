import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon_Aws from 'react-native-vector-icons/FontAwesome';

const CustomBackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon_Aws name="angle-left" size={30} />
  </TouchableOpacity>
);

export default CustomBackButton