/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg'}}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3} >Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB</Text>
          {/*rating*/}
          <View style={styles.ratingsContainer}>
            <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'}/>
            <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'}/>
            <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'}/>
            <FontAwesome style={styles.star} name="star-half-full" size={18} color={'#e47911'}/>
            <FontAwesome style={styles.star} name="star-o" size={18} color={'#e47911'}/>
          </View>
          <Text style={styles.price}> from $14.56</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page:{
    padding: 10,
  },
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  image: {
    flex: 2,
    width:150,
    height:150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  star: {
    margin: 2,
  },
});
export default HomeScreen;
