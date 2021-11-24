import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  imageChangeButton: {
    position: 'absolute',
    width: '40%',
    marginTop: '28%',
    alignSelf: 'center',
    backgroundColor: 'white',
    opacity: 0.5,
    alignItems: 'center',
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  title: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: '700',
  },
  edit: {
    fontSize: 14,
    alignSelf: 'center',
    color: colors.primary,
  },
  subTitle: {
    // flex: 1,
    alignSelf: 'flex-start',
    marginTop: '10%',
  },
  subText: {
    fontSize: 14,
  },
  addressContainer: {
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
  },
  locationIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: colors.primary,
    opacity: 0.5,
    borderRadius: 5,
    top: 20,
    left: 10,
  },
  address: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.black,
  },
  dilivary: {
    fontSize: 10,
    color: colors.darkGray,
  },
  addNew: {
    marginTop: '8%',
    width: '100%',
    height: 60,
    backgroundColor: colors.lightGray,
  },
  addText: {
    alignSelf: 'center',
    marginTop: '5%',
    fontSize: 14,
    fontWeight: '700',
  },
  appdetailContainer: {
    paddingTop: Dimensions.get('window').height * 0.05,
  },
});

export default styles;
