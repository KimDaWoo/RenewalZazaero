import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import SmallCheckBoxText from './SmallCheckBoxText'; // SmallCheckBoxText 컴포넌트의 경로를 맞춰주세요.
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../common/commonStyles'

const AgreementCheckBox = ({ text, onChange, isChecked, detailPage, Essential = true }) => {
    const navigation = useNavigation();

    const handleViewPress = () => {
        navigation.navigate('TermsDetail', { initialTab: detailPage });
    };

    return (
        <View style={[styles.container, commonStyles.horizontalAlignment]}>
            <View style={styles.textContainer}>
                <SmallCheckBoxText text={text} onChange={onChange} isChecked={isChecked} mgBT={false} />
                {Essential && <Text style={styles.duty}>(필수)</Text>}
            </View>
            <Pressable onPress={handleViewPress} style={styles.viewButton}>
                <Text style={styles.viewText}>보기</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    duty: {
        marginLeft: 4,
        color: "#3D40E0",
    },
    viewButton: {
        marginLeft: 'auto',
    },
    viewText: {
        color: '#8284EB',
        textDecorationLine: 'underline',
    },
});

export default AgreementCheckBox;