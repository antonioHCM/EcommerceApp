/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import CartPoductItem from '../../components/CartProductItem';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import styles from './styles';
import {Product, CartProduct} from '../../models';

import { DataStore, Auth } from 'aws-amplify';
import { ListProductsQuery } from '../../API';
import { listCartProducts } from '../../graphql/queries';



const ShoppingCartScreen = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);


    useEffect(() =>{
      const fetchProducts = async () => {
        //query usere's cart items
        const userData = await Auth.currentAuthenticatedUser();

        DataStore.query(CartProduct, cp =>
          cp.userSub('eq', userData.attributes.sub),).then(setCartProducts);
      };
      fetchProducts();
    }, []);

    useEffect(() => {
      if (cartProducts.filter(cp => !cp.product).length === 0) {


        return;
      }
      const fetchProducts = async () => {
        // query all products that are used in cart
        const products = await Promise.all(
          cartProducts.map(cartProduct =>
            DataStore.query(Product, cartProduct.productID),
          ),
        );

        // assign the products to the cart items
        setCartProducts(currentCartProducts =>
          currentCartProducts.map(cartProduct => ({
            ...cartProduct,
            product: products.find(p => p.id === cartProduct.productID),
          })),
        );
      };

      fetchProducts();
    }, [cartProducts]);

    useEffect (() => {
      const subscriptions = cartProducts.map(cp =>
        DataStore.observe(CartProduct, cp.id).subscribe(msg => {
          if (msg.opType === 'UPDATE') {
            setCartProducts(curCartProducts =>
              curCartProducts.map(cp => {
                if (cp.id !== msg.element.id) {
                  console.log('differnt id');
                  return cp;
                }
                return {
                  ...cp,
                  ...msg.element,
                };
              }),
            );
          }
        }),
      );

      return () => {
        subscriptions.forEach(sub => sub.unsubscribe());
      };
    }, [cartProducts]);

console.log(cartProducts);

  const navigation = useNavigation();

  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + (product?.product?.price || 0) * product.quantity,
    0,
  );

  const onCheckOut = () =>{
    navigation.navigate('Address');

  };
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.subtotal}>Subtotal({cartProducts.length} items):
        <Text style={styles.price}>${totalPrice.toFixed(2)}</Text>
        </Text>
        <Button text="Procede to checkout" onPress={onCheckOut}/>
      </View>
      {/*Render Product component*/}
      <FlatList
        data={cartProducts}
        renderItem={({item}) => <CartPoductItem cartItem={item} />}
         />
    </View>
  );
};

export default ShoppingCartScreen;
