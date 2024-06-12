import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import commonStyles from '../common/commonStyles'

const BigCheckBoxText = ({text, onChange, isChecked}) => {
    return (
        <View style={commonStyles.horizontalAlignment}>
            <Pressable
                style={[styles.checkbox, isChecked && styles.checkedCheckbox]}
                onPress={onChange}
            >
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
      width: 24,
      height: 24,
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
      fontSize: 14,
      marginLeft: 2,
    },
    text : {
      fontSize: 16,
      fontWeight: '700',
    }
});

export default BigCheckBoxText