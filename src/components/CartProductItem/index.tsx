/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { View, Text,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import styles from './styles';
import QuantitySelector from '../QuantitySelector';
import { DataStore } from 'aws-amplify';
import { updateProduct } from '../../graphql/mutations';
import { CartProduct } from '../../models';


interface CartProductItemProps {
  cartItem: {
  id: string,
  quantity: number,
  option?: string,
    product: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number,
    }
}
}

const CartPoductItem = ({cartItem}: CartProductItemProps) => {
    const {product, ...cartProduct } = cartItem;
    

    const updateQuantity = async (newQuantity: number) => {

      const original = await DataStore.query(CartProduct, cartProduct.id);
      
      await DataStore.save(

        CartProduct.copyOf(original, upadated => {
          upadated.quantity = newQuantity;
        }),
      );
    };

    return (
    <View style={styles.root}>
      <View style={styles.row}>
          <Image style={styles.image} source={{ uri: product.image}}/>
            <View style={styles.rightContainer}>
              <Text style={styles.title} numberOfLines={3} >{product.title}</Text>
          {/*rating*/}
          <View style={styles.ratingsContainer}>
            {[0,0,0,0,0].map((el, i) =>
            <FontAwesome
            key={`${product.id}-${i}`}
            style={styles.star}
            name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
            size={18}
            color={'#e47911'}
            />
            )}
            <Text >{product.ratings}</Text>
          </View>
          <Text style={styles.price}> from ${product.price}
          {product.oldPrice &&
           <Text style={styles.oldPrice}>  ${product.oldPrice}</Text>
           }
                  </Text>
                </View>
              </View>
            <View style={styles.quantityContainer}>
        <QuantitySelector
         quantity={cartProduct.quantity}
          setQuantity={updateQuantity} />
      </View>
    </View>
  );
};

export default CartPoductItem;
