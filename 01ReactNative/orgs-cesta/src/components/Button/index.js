import  React from 'react';
import { TouchableOpacity } from 'react-native';
import Texts from '../Texts';
import styles from './styles';

const Button = ({text}) => {
  return <>
    <TouchableOpacity style={styles.containerButton}>
      <Texts style={styles.buttonText}>{text}</Texts>
    </TouchableOpacity>
  </>
}

export default Button;
