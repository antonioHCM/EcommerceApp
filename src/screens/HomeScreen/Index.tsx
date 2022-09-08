/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View,StyleSheet, FlatList } from 'react-native';
import PoductItem from '../../components/ProductItem';
import { DataStore } from 'aws-amplify';
import {Product} from "../../models"

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect( () => {
        DataStore.query(Product).then(setProducts);
  }, []);
  return (
    <View style={styles.page}>
      {/*Render Product component*/}
      <FlatList
        data={products}
        renderItem={({item}) => <PoductItem item={item} />}
        showsVerticalScrollIndicator= {true}
         />
    </View>
  );
};

const styles = StyleSheet.create({

  page: {
    padding:10,
  },
});

export default HomeScreen;
