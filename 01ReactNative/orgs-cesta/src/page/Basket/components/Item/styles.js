import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerItems: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  names: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646', 
  }
});

export default styles;