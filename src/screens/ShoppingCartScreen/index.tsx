/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import CartPoductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import products from '../../data/cart';
import styles from './styles';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce((sumPrice, product) => sumPrice + product.item.price * product.quantity, 0 );
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.subtotal}>Subtotal({products.length} items): 
        <Text style={styles.price}>${totalPrice.toFixed(2)}</Text>
        </Text>
        <Button text="Procede to checkout" onPress={() => console.warn('go to checkout')}/>
      </View>
      {/*Render Product component*/}
      <FlatList
        data={products}
        renderItem={({item}) => <CartPoductItem cartItem={item} />}
         />
    </View>
  );
};

export default ShoppingCartScreen;
