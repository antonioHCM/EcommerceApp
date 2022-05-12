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
    <View style={{padding: 10}}>
      {/* Render Product Componet */}
      <FlatList
        data={cartProducts}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({cartProducts.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default ShoppingCartScreen;
