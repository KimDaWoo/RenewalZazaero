import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import commonStyles from '../common/commonStyles'

const SmallCheckBoxText = ({text, Duty, onChange, isChecked}) => {
    
    return (
        <View style={[commonStyles.horizontalAlignment, styles.container]}>
            <Pressable
                style={[styles.checkbox, isChecked && styles.checkedCheckbox]}
                onPress={onChange}
            >
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
            <Text style={styles.text}>{text}</Text>
            {Duty && (<Text style={styles.duty}>(필수)</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 14,
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
    text : {
      fontSize: 14,
      marginRight: 4,
      fontWeight: '700',
    },
    duty: {
        color: "#3D40E0"
    },
    noneDuty: {
        color: "#6c6c6c"
    }
});

export default SmallCheckBoxText