/* eslint-disable prettier/prettier */
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const QuantitySelector  = () => {

    const onMinus = () => {

    }

    const onPlus = () => {

    }

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
         <Text style={styles.buttonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>0</Text>

      <Pressable onPress={onPlus} style={styles.button}>
         <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
};

export default QuantitySelector;
