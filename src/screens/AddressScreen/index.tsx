/* eslint-disable prettier/prettier */
import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import styles from '../AddressScreen/styles';
import countryList from 'country-list';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';
import { DataStore, Auth } from 'aws-amplify';
import {Order, OderProduct, CartProduct} from '../../models';
import { OrderProduct } from '../../models';
import { useNavigation } from '@react-navigation/native';


const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('Please fix the fields before checking out');



    const navigation = useNavigation();

    const saveOrder = async () =>{
      //Get user
      const userData = await Auth.currentAuthenticatedUser();
      // New order
        const newOrder = await DataStore.save(
          new Order({
            userSub: userData.attributes.sub,
            fullName: fullname,
            phoneNumber: phonenumber,
            country,
            address,
          }),
        );
      // fetch user's cart items
          const cartItems = await DataStore.query(CartProduct, cp =>
            cp.userSub('eq', userData.attributes.sub),
            );
      // Attch products to order
            await Promise.all(
              cartItems.map(cartItem => DataStore.save(new OrderProduct({
                quantity:cartItem.quantity,
                option: cartItem.option,
                productID: cartItem.productID,
                orderID: newOrder.id,
                })))
            );
      // Delete cart items
            await Promise.all(cartItems.map(cartItem => DataStore.delete(cartItem)));

            navigation.navigate('Home');

    };
    const onCheckout = () =>{
      if(!fullname) {
        Alert.alert('Please fill in the full Name field');
        return;
      }
      if(!phonenumber) {
        Alert.alert('Please fill in the phone number field');
        return;
      }
      console.warn('Checkout Complete')
    }
    const validateAddress = () => {
      if (address.length < 6){
        setAddressError('Address is too short');
      }
    };

  return (
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
   <ScrollView style={styles.root}>
        <View style={styles.row}>
            <Picker selectedValue={country} onValueChange={setCountry}>
                {countries.map(country => (
                    <Picker.Item value={country.code} label={country.name} />
                    ))}
            </Picker>
        </View>
    {/* Full Name*/}
        <View style={styles.row}>
                  <Text style={styles.label}>Full Name</Text>
                  <TextInput style={styles.input} placeholder="Full Name" value={fullname} onChangeText={setFullName} />
        </View>
    {/* Phone Number*/}
   <View style={styles.row}>
             <Text style={styles.label}>Phone Number</Text>
             <TextInput style={styles.input}
             keyboardType={'phone-pad'}
             placeholder="Phone Number"
             value={phonenumber}
             onChangeText={setPhoneNumber}
              />
   </View>
   {/* Address*/}
   <View style={styles.row}>
             <Text style={styles.label}>Address</Text>
             <TextInput style={styles.input}
             onEndEditing={validateAddress}
             onChangeText={text => {
               setAddress(text);
               setAddressError('');
             }}as
              />
              {!!addressError && (
                <Text style={styles.errorLabel}>{addressError}</Text>
              )}
   </View>
   <Button text='Checkout' onPress={onCheckout}/>
   </ScrollView>
   </KeyboardAvoidingView>

  );
};
export default AddressScreen;
