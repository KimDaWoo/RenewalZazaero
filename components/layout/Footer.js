import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import Cart from '../cart/Cart';
import Like from '../favorite/Favorite';
import Construction from '../construction/Construction';
import Mypage from '../mypage/Mypage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon_Aws from 'react-native-vector-icons/FontAwesome';
import {Pressable, StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

function Footer() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#3D40E0',
        headerShadowVisible: false,
        
        headerStyle: {
          height: 48
        },
        tabBarIconStyle: {
        },
        tabBarStyle: {
          height: 64,
          marginBottom: 10,
          marginHorizontal: 20,
          borderRadius: 10,
          borderTopWidth: 0,
        },
        tabBarBadgeStyle: {
          padding: 0,
          marginTop: 10,
          marginBottom: 0,
        },
        tabBarLabelStyle: {
          padding: 0,
          marginTop: 0,
          marginBottom: 10,
        },
        headerRight: () => (
          <View style={styles.iconButtonWrapper}>
            <Pressable
              style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
              <Icon_Aws name="search" size={20} />
            </Pressable>
            <Pressable
              style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
              <Icon_Aws name="th-list" size={20} />
            </Pressable>
          </View>
        ),
      }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon_Aws name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="즐겨찾기"
        component={Like}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon_Aws name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="장바구니"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon_Aws name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="발주현황"
        component={Construction}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon_Aws name="list-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Mypage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon_Aws name="user-circle-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Footer;

const styles = StyleSheet.create({
  iconButtonWrapper: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
});
