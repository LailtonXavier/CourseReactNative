import React from 'react';
import { Image } from 'react-native';
import Texts from '../../../../components/Texts';
import topImg from '../../../../assets/topo.png';
import styles from './styles';

const Top = ({ title }) => {
  return <>
    <Image source={topImg} style={styles.top} />
    <Texts style={styles.title}>{title}</Texts>
  </>
}

export default Top;