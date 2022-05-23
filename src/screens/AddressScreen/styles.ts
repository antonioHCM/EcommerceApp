/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row:{
      fontSize: 18,
      marginVertical: 5,
    },
    root:{
      padding: 10,
    },
    label:{
      fontWeight: 'bold',
    },
    input:{
      backgroundColor:'white',
      padding: 5,
      marginVertical: 5,
      height: 40,
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 3,
    },
    errorLabel:{
      color: 'red',
    },
  });

  export default styles;
