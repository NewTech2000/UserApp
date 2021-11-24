import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: colors.white,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    height: 100,
    flexDirection: 'row',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.darkGray,
    alignSelf: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:Dimensions.get('window').height * 0.060,
  },
});

export default styles;
