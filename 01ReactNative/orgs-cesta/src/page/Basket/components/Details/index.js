import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import Button from '../../../../components/Button';
import Texts from '../../../../components/Texts';
import styles from './styles';

const Details = ({ 
  name, 
  url, 
  author, 
  description, 
  price,
  button
}) => {
  return <>
    <Text style={styles.name}>{name}</Text>
    <View style={styles.containerfarm}>
      <Image source={url} style={styles.imgProfile} />
      <Texts style={styles.author}>{author}</Texts>
    </View>
    <Texts style={styles.description}>{description}</Texts>
    <Texts style={styles.price}>{`RS: ${price}`}</Texts>

    <Button text={button} />
  </>
}

export default Details;