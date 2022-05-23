/* eslint-disable prettier/prettier */
import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import styles from '../AddressScreen/styles';
import countryList from 'country-list';
import { Picker } from '@react-native-picker/picker';
import Button from '../../components/Button';

const countries = countryList.getData();
console.log(countries);
const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code);
    const [fullname, setFullName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('Please fix the fields before checking out');
    console.log(fullname);

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
