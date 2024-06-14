import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const ServiceTerms = () => <Text style={styles.content}>서비스 이용약관 내용</Text>;
const PersonalInformation = () => <Text style={styles.content}>개인정보 처리방침 내용</Text>;
const FinancialTerms = () => <Text style={styles.content}>전자금융거래 이용약관 내용</Text>;
const PrivacyTerms = () => <Text style={styles.content}>제3차 개인정보수집 동의 내용</Text>;
const MarketingTerms = () => <Text style={styles.content}>홍보 및 마케팅 이용 동의 내용</Text>;

const TermsDetail = ({ route }) => {
    const { initialTab } = route.params;

    const getInitialRouteName = () => {
        switch (initialTab) {
            case 'ServiceTerms':
                return 'ServiceTerms';
            case 'PersonalInformation':
                return 'PersonalInformation';
            case 'FinancialTerms':
                return 'FinancialTerms';
            case 'PrivacyTerms':
                return 'PrivacyTerms';
            case 'MarketingTerms':
                return 'MarketingTerms';
            default:
                return 'ServiceTerms';
        }
    };

    return (
        <NavigationContainer independent={true} style={styles.container}> 
            <Tab.Navigator initialRouteName={getInitialRouteName()} screenOptions={{
                    tabBarLabelStyle: { fontSize: 16 }, // 탭 레이블 폰트 크기
                    tabBarStyle: { height: 70 }, // 탭의 높이
                    tabBarScrollEnabled: true,
                }}>
                <Tab.Screen name="ServiceTerms" component={ServiceTerms} options={{ tabBarLabel: '서비스 이용약관' }} />
                <Tab.Screen name="PersonalInformation" component={PersonalInformation} options={{ tabBarLabel: '개인정보 처리방침' }} />
                <Tab.Screen name="FinancialTerms" component={FinancialTerms} options={{ tabBarLabel: '전자금융거래 이용약관' }} />
                <Tab.Screen name="PrivacyTerms" component={PrivacyTerms} options={{ tabBarLabel: '개인정보수집 동의' }} />
                <Tab.Screen name="MarketingTerms" component={MarketingTerms} options={{ tabBarLabel: '홍보 및 마케팅 이용 동의' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: "fff",
    },
    content: {
        padding: 20,
        fontSize: 16,
    },
});

export default TermsDetail;
