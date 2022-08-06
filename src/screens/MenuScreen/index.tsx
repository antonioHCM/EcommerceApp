/* eslint-disable prettier/prettier */
import { SafeAreaView } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {Auth} from 'aws-amplify';

const MenuScreen = () => {
    const onLogOut = () => {
        Auth.signOut();
    };
  return (
    <SafeAreaView>
        <Button text="Sigh Out" onPress={onLogOut}/>
    </SafeAreaView>
  );
};
export default MenuScreen;
