import React from 'react';
import { Image, Dimensions, StyleSheet, Text, View, FlatList } from 'react-native';
import Texts from '../../components/Texts';
import { Details, Top } from './components';
import Item from './components/Item';
import styles from './styles';

const Basket = ({ top, details, items }) => {
  return <>
    <FlatList
      data={items.list}
      renderItem={Item}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={() => {
        return <>
          <Top {...top} />
          <View style={styles.containerBasket}>
            <Details {...details} />
            <Texts style={styles.title}>{ items.title }</Texts>
          </View>
        </>
      }}
    />
  </> 
}

export default Basket;
