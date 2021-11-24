import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  innerContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    paddingLeft: Dimensions.get('window').width * 0.15,
  },
  icon: {
    alignSelf: 'flex-end',
    paddingBottom: Dimensions.get('window').height * 0.05,
    paddingLeft: Dimensions.get('window').width * 0.18,
  },
  avatar: {
    paddingLeft: Dimensions.get('window').height * 0.01,
    paddingTop: Dimensions.get('window').height * 0.01,
    backgroundColor: colors.white,
  },
});

export default styles;
