/* eslint-disable prettier/prettier */
import { View, Text, ScrollView } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import {Picker} from '@react-native-picker/picker';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { useRoute } from '@react-navigation/native';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    const route = useRoute();
    console.log(route.params);
  return (
    <ScrollView style={styles.root}>
      <Text  style={styles.title}>Product screen</Text>
      {/* Image corousel*/}
      <ImageCarousel images={product.images}/>
      {/* Option selector*/}
        <Picker selectedValue={selectedOption} onValueChange={(itemValue) => setSelectedOption(itemValue)}>
         {product.options.map(option => (
         <Picker.Item label={option} value={option} />
         ))}
        </Picker>
      {/* Price*/}
      <Text style={styles.price}> from ${product.price}
          {product.oldPrice &&
           <Text style={styles.oldPrice}>  ${product.oldPrice}</Text>
           }
          </Text>

      {/* Description*/}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector*/}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
      {/* Button*/}
      <Button text={'Add to cart'} onPress={() => {console.warn('Add to cart')}} />
      <Button text={'Buy now'} onPress={() => {console.warn('Buy now')}} />
    </ScrollView>
  );
};

export default ProductScreen;
