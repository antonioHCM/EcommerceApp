/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page:{
      padding: 10,
    },
    root: {
      borderWidth: 1,
      borderColor: '#d1d1d1',
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
    },
    row:{
      flexDirection: 'row',
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
    oldPrice: {
      fontSize: 11,
      fontWeight: 'bold',
      textDecorationLine : 'line-through',
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
    quantityContainer: {
      marginLeft: 30,
      marginVertical: 10,
    },
  });

  export default styles;