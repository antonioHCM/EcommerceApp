/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MenuScreen from '../screens/MenuScreen/index';
import HomeScreen from '../screens/HomeScreen/Index';
import ShoppingCartStack from './ShoppingCartStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
       tabBarInactiveTintColor: '#ffbd7d',
        tabBarActiveTintColor: '#e47911'}}>
        <Tab.Screen
         component={HomeStack}
          name="Home"
          options={{
            tabBarIcon: ({color}) =>(
             <AntDesign name="home" color={color} size={19}/>
             ),
          }}
        />
        <Tab.Screen
         component={HomeScreen}
          name="Profile"
          options={{
            tabBarIcon: ({color}) =>(
             <AntDesign name="profile" color={color} size={19}/>
             ),
          }}
        />
        <Tab.Screen
         component={ShoppingCartStack}
          name="ShoppingCart"
          options={{
            tabBarIcon: ({color}) =>(
             <AntDesign name="shoppingcart" color={color} size={19}/>
             ),
          }}
        />
        <Tab.Screen
         component={MenuScreen}
          name="More"
          options={{
            tabBarIcon: ({color}) =>(
             <AntDesign name="ellipsis1" color={color} size={19}/>
             ),
          }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
