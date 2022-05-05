/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

title: {
    fontSize: 18,
},
price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 11,
    fontWeight: 'bold',
    textDecorationLine : 'line-through',
  },
  description:{
    marginVertical: 10,
    lineHeight: 29,
  },
  root:{
    padding: 10,
    backgroundColor: 'white',

  },
});

export default styles;
