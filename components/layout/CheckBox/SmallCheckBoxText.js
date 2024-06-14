import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import commonStyles from '../common/commonStyles';


// mgBT 속성으로 체크박스텍스트에 마진바텀 여부를 결정할 수 있습니다.
const SmallCheckBoxText = ({ text, onChange, isChecked, mgBT = true }) => {
    return (
        <View style={[commonStyles.horizontalAlignment, mgBT ? styles.mgBT : null]}>
            <Pressable
                style={[styles.checkbox, isChecked && styles.checkedCheckbox]}
                onPress={onChange}
            >
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mgBT: {
        marginBottom: 14,
    },
    margin: {
        marginRight: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#3D40E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkedCheckbox: {
        borderColor: "#3D40E0",
        backgroundColor: "#E4E4FA",
    },
    checkmark: {
        color: '#3D40E0',
        fontSize: 12,
        marginLeft: 2,
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
    },
});

export default SmallCheckBoxText;
