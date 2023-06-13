import React from 'react';
import { Image, View } from 'react-native';
import Texts from '../../../../components/Texts';
import styles from './styles';

const Item = ({item: { name, url }}) => {
  return (
    <View style={styles.containerItems}>
      <Image source={url} style={styles.image} />
      <Texts style={styles.names}>{name}</Texts>
    </View>
    )
}

export default Item;
