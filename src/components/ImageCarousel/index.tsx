/* eslint-disable prettier/prettier */
import { View, FlatList, Image, useWindowDimensions } from 'react-native';
import React, { useState, useCallback } from 'react';
import styles from './styles';




const ImageCarousel = ({ images }: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onFlatLisUpdate = useCallback (({viewableItems}) => {
    if (viewableItems.length > 0 ) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  }, []);

  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.root}>
      <FlatList 
        data={images}
        renderItem={({item}) =>(
        <Image style={[styles.image, {width: windowWidth -40 }]}  source={{ uri: item }} />
       )}
         horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 21}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatLisUpdate}
        />
        <View style={styles.dots}>
        {images.map((image, index)=>
        <View style={[
          styles.dot,
          {backgroundColor: index == activeIndex ? '#c9c9c9' : '#ededed' }]} />
        ) }
        </View>
    </View>
  );
};

export default ImageCarousel;
