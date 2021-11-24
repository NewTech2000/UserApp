import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
  },
  title: {
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.white,
    paddingTop: Dimensions.get('window').height * 0.05,
    fontStyle: 'italic',
  },
  name: {
    alignSelf: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: colors.white,
    paddingTop: Dimensions.get('window').height * 0.05,
  },
  image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: Dimensions.get('window').width * 0.2,
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
    bottom: 20,
    flexDirection: 'row',
    position: 'absolute',
  },
});

export default styles;
