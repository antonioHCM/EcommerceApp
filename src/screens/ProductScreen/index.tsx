/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import {Picker} from '@react-native-picker/picker';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    console.log(selectedOption);
  return (
    <View>
      <Text  style={styles.title}>Product screen</Text>
      {/* Image corousel*/}

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
        <QuantitySelector/>
      {/* Button*/}
      
    </View>
  );
};

export default ProductScreen;
