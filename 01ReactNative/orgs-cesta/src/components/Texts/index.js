import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Texts = ({children, style}) => {
  let styleDesfault = styles.text;

  if(style?.fontWeight === 'bold') {
    styleDesfault = styles.textNegrito; 
  }
  return <Text style={[style, styleDesfault]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textNegrito: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  }
})

export default Texts;
