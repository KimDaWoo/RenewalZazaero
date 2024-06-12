import React from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';

const TrigerLongButton = ({BtnText, Triger, Handling}) => {
   return (
    <View style={styles.BtnContainer}>
        <TouchableOpacity style={Triger ? styles.BtnEnable : styles.BtnDisable} onPress={Handling}>
            <Text style={styles.BtnText}>{BtnText}</Text>
        </TouchableOpacity>
    </View>
   )
}

export default TrigerLongButton


const btn = {
    height: 40,
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    width: "100%",
}

const styles = StyleSheet.create({
    BtnContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop : 18,
    },
    BtnEnable : {
        ...btn,
        backgroundColor: '#3D40E0', 
        enabled : "true"
    },
    BtnDisable : {
        ...btn,
        backgroundColor: 'gray',
        enabled : "false"
    },
    BtnText : {
        color: '#fff', // 버튼 글자색상 추가
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        letterSpacing : 1.5,
    },
})