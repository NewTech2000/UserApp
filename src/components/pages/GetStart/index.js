import React, {useState, useEffect} from 'react';
import {Image, View, StatusBar, Alert} from 'react-native';
import {connect} from 'react-redux';
import colors from '../../../constants/colors';
import Routes from '../../../navigation/routes';
import AppButton from '../../atoms/AppButton';
import AppText from '../../atoms/AppText';
import styles from './styles';

function GetStart(props) {
  const {navigation} = props;

  useEffect(() => {
    if (props.authenticated === true) {
      setTimeout(() => {
        navigation.navigate(Routes.HOME);
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.navigate(Routes.SIGNUP);
      }, 2000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="LIGHT-content"
        hidden={false}
        backgroundColor={colors.primary}
        translucent={true}
      />
      <AppText style={styles.title}> GetStart With </AppText>
      <Image source={require('../../../asset/user.jpg')} style={styles.image} />
      <AppText style={styles.name}> User</AppText>

      <View style={styles.buttonContainer}>
        <AppButton
          title={'GET START'}
          mode="contained"
          labelStyle={{color: colors.primary}}
          onPress={() => navigation.navigate(Routes.SIGNUP)}
          color={colors.white}
        />
      </View>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
  };
};

const mapDispatch = dispatch => ({});

export default connect(mapStateToProps, mapDispatch)(GetStart);
