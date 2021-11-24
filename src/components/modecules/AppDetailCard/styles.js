import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  detailContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    width: '100%',
    height: 76,
    backgroundColor: colors.white,
    marginTop: '6%',
    flexDirection:"row",
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.black,
  },
  detail: {
    fontSize: 13,
    top: 5,
    color: colors.darkGray,
  },
  iconContainer: {
    paddingTop: Dimensions.get('window').height * 0.02,
    paddingLeft: Dimensions.get('window').width * 0.05,
  },
  BottomDetailContainer: {
  
    paddingLeft: Dimensions.get('window').width * 0.15,
    paddingTop: Dimensions.get('window').height * 0.02,
  },
});

export default styles;
