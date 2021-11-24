import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Title, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../../constants/colors';
import Routes from '../../../navigation/routes';
import styles from './styles';
import AppText from '../../atoms/AppText/index';
import routes from '../../../navigation/routes';
import AppDetailCard from '../../modecules/AppDetailCard/index';

export default function MyAccountScreen({navigation}) {
  const array = [
    {
      key: '1',
      title: 'Mr ',
      name: 'Nipuna',
      dob: '2000',
      gender: 'male',
      remark: '123aaaa',
    },
    {
      key: '2',
      title: 'Mr ',
      name: 'Nipuna',
      dob: '2000',
      gender: 'male',
      remark: '123aaaa',
    },
    {
      key: '3',
      title: 'Mr ',
      name: 'Nipuna',
      dob: '2000',
      gender: 'male',
      remark: '123aaaa',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="LIGHT-content"
        hidden={false}
        backgroundColor={colors.primary}
        translucent={true}
      />
      <View>
        <View
          style={{
            flexDirection: 'column',
            marginTop: '18%',
            alignItems: 'center',
          }}>
          <View>
            <Avatar.Image
              source={require('../../../asset/Mr.jpg')}
              size={150}></Avatar.Image>
          </View>

          <Title style={styles.title}>{'Nipuna Sachith'}</Title>

          <TouchableOpacity style={{marginTop: 20}} onPress={() => {}}>
            <Text style={styles.edit}>Edit account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appdetailContainer}>
          <AppDetailCard
            title={'DOB'}
            detail={array[0].dob}
            iconName={'calendar-month-outline'}
          />
          <AppDetailCard
            title={'Gender'}
            detail={array[0].gender}
            iconName={'account-circle-outline'}
          />
          <AppDetailCard
            title={'Remark'}
            detail={array[0].remark}
            iconName={'card-account-details-star-outline'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const mapStateToProps = state => {
  return {};
};

const mapDispatch = dispatch => ({});
