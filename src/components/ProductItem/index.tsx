/* eslint-disable prettier/prettier */
import { View, Text,Image ,Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';
import products from '../../data/products';
import { useNavigation } from '@react-navigation/native';


interface ProductItemProps {
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice?: number,
    }
}

const PoductItem = (props : ProductItemProps) => {
    const { item } = props;
    const navigation = useNavigation();

    const onPress = () => {
      console.warn('item pressed');
      navigation.navigate('ProductScreen', {id: item.id});
    };
  return (
    <Pressable onPress={onPress} style={styles.root}>
        <Image style={styles.image} source={{ uri: item.image}}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3} >{item.title}</Text>
          {/*rating*/}
          <View style={styles.ratingsContainer}>
            {[0,0,0,0,0].map((el, i) =>
            <FontAwesome
            key={`${item.id}-${i}`}
            style={styles.star}
            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
            size={18}
            color={'#e47911'}
            />
            )}
            <Text >{item.ratings}</Text>
          </View>
          <Text style={styles.price}> from ${item.price.toFixed(2)}
          {item.oldPrice &&
           <Text style={styles.oldPrice}>  ${item.oldPrice.toFixed(2)}</Text>
           }
          </Text>
        </View>
      </Pressable>
  )
}

export default PoductItem;
