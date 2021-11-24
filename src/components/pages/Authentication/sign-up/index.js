import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StatusBar, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Yup from 'yup';
import {connect} from 'react-redux';

import colors from '../../../../constants/colors';
import AppButton from '../../../atoms/AppButton/index';
import AppTextInput from '../../../atoms/AppTextInput/index';
import ErrorText from '../../../atoms/ErrorText';
import AppAlert from '../../../atoms/AppAlert/index';
import AppRadioButtonContainer from '../../../modecules/AppRadioButtonContainer/index';
import AppPicker from '../../../atoms/AppPicker/index';

import styles from './styles';
import AppText from '../../../atoms/AppText';
import AppImagePicker from '../../../organisams/AppImagePicker/index';
import AppDateTimePicker from '../../../atoms/AppDateTimePicker/index';
import Routes from '../../../../navigation/routes';

import {genders} from '../../../../constants/const';

function Signup(props) {
  const [Success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [checked, setChecked] = React.useState('');

  const {navigation, errorMessage, error} = props;

  useEffect(() => {
    if (profilePicture !== null) {
      setProfilePicture(
        'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      );
    } else {
    }
  }, []);

  const validationSchema = Yup.object().shape({
    fName: Yup.string().required().label('First Name'),
    lName: Yup.string().required().label('Last Name'),
    dob: Yup.date().max(new Date()).label('Date of Birth'),
    password: Yup.string().required().label('password'),
    gender: Yup.string().required().label('Gender'),
    remark: Yup.string().required().label('Remark'),
  });

  handleSignup = async values => {
    setSuccess(true);

    let params = {
      title: checked,
      fname: values.fName,
      lname: values.lName,
      dob: values.dob,
      password: values.password,
      gender: values.gender,
      remark: values.remark,
      profile_picture: profilePicture,
    };

    props.signup(params);
  };

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="LIGHT-content"
        hidden={false}
        backgroundColor={colors.primary}
        translucent={true}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <AppText style={styles.title}>SIGN UP</AppText>
        <AppText style={styles.subtitles}>Enter Your Details Here</AppText>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}>
          <AppText style={styles.imageText}>Select Your Photo</AppText>
          <View>
            <Image
              source={{
                uri: profilePicture,
              }}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.imageChangeButton}
              onPress={() => setModal(true)}>
              <Icon name="camera-outline" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Formik
          enableReinitialize
          initialValues={{
            fName: '',
            lName: '',
            dob: new Date(),
            password: '',
            gender: '',
            remark: '',
          }}
          onSubmit={handleSignup}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, errors, touched, values}) => (
            <View style={{flex: 1}}>
              <View style={styles.userDetailSection}>
                <View style={styles.radioButtonContainer}>
                  <AppText style={styles.imageText}>Select Your Title</AppText>
                  <AppRadioButtonContainer
                    text={'MR'}
                    value={'MR'}
                    status={checked}
                    onPress={() => setChecked('MR')}
                  />
                  <AppRadioButtonContainer
                    text={'MRS'}
                    value={'MRS'}
                    status={checked}
                    onPress={() => setChecked('MRS')}
                  />
                </View>
                <View style={styles.textInput}>
                  <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="First Name"
                    defaultValue={values.fName}
                    onChangeText={handleChange('fName')}
                    placeholder="Enter your name"
                    isRequired
                  />
                  {touched.fName && <ErrorText>{errors.fName}</ErrorText>}
                </View>

                <View style={styles.textInput}>
                  <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    label=" Last Name"
                    defaultValue={values.lName}
                    onChangeText={handleChange('lName')}
                    placeholder="Enter your name"
                    isRequired
                  />
                  {touched.lName && <ErrorText>{errors.lName}</ErrorText>}
                </View>

                <View style={styles.textInput}>
                  <AppDateTimePicker
                    label="Date of Birth"
                    incomingDate={values.dob}
                    onValueChange={handleChange('dob')}
                    isRequired
                  />
                  {touched.dob && <ErrorText>{errors.dob}</ErrorText>}
                </View>

                <View style={styles.textInput}>
                  <AppText style={styles.passwordText}>password</AppText>
                  <AppTextInput
                    required
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyBoardType="default"
                    onChangeText={handleChange('password')}
                    placeholder="Enter your password"
                    secureTextEntry
                    textContentType="password"
                  />
                  {touched.password && <ErrorText>{errors.password}</ErrorText>}
                </View>
                <View style={styles.textInput}>
                  <AppPicker
                    label="Gender"
                    items={genders}
                    selectedValue={values.gender}
                    onValueChange={handleChange('gender')}
                    isRequired
                  />
                  {touched.gender && <ErrorText>{errors.gender}</ErrorText>}
                </View>
                <View style={styles.textInput}>
                  <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    label="Remark"
                    defaultValue={values.remark}
                    onChangeText={handleChange('remark')}
                    placeholder="Enter your remark"
                    required
                    multiline
                  />
                  {touched.remark && <ErrorText>{errors.remark}</ErrorText>}
                </View>
              </View>
              <View style={{marginTop: '10%'}}>
                <View style={styles.buttonContainer}>
                  <AppButton
                    title="Sign Up"
                    mode="contained"
                    onPress={() => handleSubmit()}
                    labelStyle={{color: colors.white}}
                    loading={loading}
                  />
                </View>

                <View style={styles.bottomContainer}>
                  <AppText style={styles.details}>Already Sign up ? </AppText>

                  <TouchableOpacity style={{}}>
                    <AppText style={styles.details}>LOGIN</AppText>
                  </TouchableOpacity>
                </View>
                <View style={styles.snackbar}>
                  {error &&
                    errorMessage ===
                      ''(
                        <AppAlert
                          visible
                          message={errorMessage}
                          alertType={'error'}
                          onDismiss={() => {
                            clearError();
                            setLoading(false);
                          }}
                        />,
                      )}
                  {Success !== false && (
                    <AppAlert
                      visible
                      message={'Successful.'}
                      alertType={'success'}
                      onDismiss={() => {
                        setSuccess(false);
                        navigation.navigate(Routes.HOME);
                      }}
                    />
                  )}
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>

      <AppImagePicker
        modal={modal}
        setModal={() => setModal()}
        setPicture={setProfilePicture}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatch = dispatch => ({
  signup: payload => dispatch.auth.signup(payload),
});

export default connect(mapStateToProps, mapDispatch)(Signup);
