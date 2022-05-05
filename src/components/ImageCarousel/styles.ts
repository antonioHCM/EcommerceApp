/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root:{
      
    },
    image:{
        height: 250,
        resizeMode: 'contain',
        padding: 20,
    },
    dots:{
        flexDirection: 'row',
        justifyContent: 'center',

    },
    dot:{
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        backgroundColor: '#ededed',
        margin: 5,
    },
  });

  export default styles;
