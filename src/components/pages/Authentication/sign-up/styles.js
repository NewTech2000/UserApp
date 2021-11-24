import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  title: {
    flex: 0.2,
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: Dimensions.get('window').height * 0.09,
  },
  subtitles: {
    fontSize: 16,
    color: colors.black,
    paddingLeft: Dimensions.get('window').width * 0.04,
    paddingTop: Dimensions.get('window').height * 0.01,
  },
  imageText: {
    alignSelf: 'flex-start',
    color: colors.black,
    paddingTop: Dimensions.get('window').height * 0.05,
  },
  userProfile: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  userDetailSection: {
    flex: 1,
    marginTop: '5%',
  },
  textInput: {
    marginTop: 10,
  },
  imageChangeButton: {
    position: 'absolute',
    width: 110,
    marginTop: '20%',
    marginLeft: 5,
    backgroundColor: 'white',
    opacity: 0.5,
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },

  snackbar: {
    alignSelf: 'center',
    width: '104%',
    marginTop: '10%',
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
    bottom: 20,
  },

  radioButtonContainer: {},
  passwordText: {
    alignSelf: 'flex-start',
    color: colors.black,
  },
  details: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: colors.darkBlue,
  },

  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default styles;
