import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerfarm: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  },
  imgProfile: {
    width: 34,
    height: 34,
  },  
  name: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 48,
    marginTop: 8,
  },
});

export default styles;