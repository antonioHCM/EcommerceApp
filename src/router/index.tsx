/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './bottomTabNav';

const Root = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
    <Root.Navigator>
        <Root.Screen component={BottomTabNav} name="HomeTabs"/>
    </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
