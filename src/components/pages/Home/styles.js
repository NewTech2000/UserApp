import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: Dimensions.get('window').height * 0.05,
    color: colors.white,
  },
  subTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingLeft: Dimensions.get('window').height * 0.02,
    color: colors.white,
  },
  searchBar: {
    marginTop: Dimensions.get('window').height * 0.04,
  },
  ProfileContainer: {
    margin: 5,
    paddingTop: 10,
  },
});

export default styles;
