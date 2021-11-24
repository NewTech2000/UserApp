import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';

import colors from '../../constants/colors';
import styles from './styles';
import AppText from '../../components/atoms/AppText/index';

export default function NoResult({
  title,
  image,
  gender,
  dob,
  onPress,
  name,
  ...props
}) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
    <AppText style={styles.text}>NO MATCHING RESULT</AppText>
    </View>
    </View>
  );
}
