import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../../layout/common/commonStyles'
import Icon_Aws5 from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-clipboard/clipboard';


const ClipBoardText = ({text, clipboardOn, disabled=false }) => {

    const CopyClipBoard = () => {
        Clipboard.setString(text);
        Alert.alert('텍스트가 클립보드에 복사되었습니다.');
    }

    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={commonStyles.horizontalAlignment} onPress={CopyClipBoard} disabled={disabled}>
                <Text style={styles.text}>{text}</Text>
                {clipboardOn && <Icon_Aws5 style={styles.clipboardButton} name="clipboard" size={24} />}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 14,
        marginTop: 14,
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#141414"
    },
    clipboardButton : {
        marginLeft: 'auto',
    }
})

export default ClipBoardText