/* eslint-disable prettier/prettier */
import React from 'react';
import { View,StyleSheet, FlatList } from 'react-native';
import CartPoductItem from '../../components/CartProductItem';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.page}>
      {/*Render Product component*/}
      <FlatList
        data={products}
        renderItem={({item}) => <CartPoductItem cartItem={item} />}
        showsVerticalScrollIndicator= {false}
         />
    </View>
  );
};

const styles = StyleSheet.create({

  page: {
    padding:10,
  }
});

export default ShoppingCartScreen;
