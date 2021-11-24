import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';

import colors from '../../../constants/colors';
import styles from './Styles';
import AppText from '../../atoms/AppText';

export default function AppProfileCard({
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
      <Avatar.Image size={80} source={image} style={styles.avatar} />
      <View style={styles.innerContainer}>
        <AppText>
          <AppText style={{fontSize: 14, fontWeight: '700'}}>
            Name: {title}
          </AppText>
          <AppText style={{fontSize: 16, fontWeight: '700'}}> {name}</AppText>
        </AppText>
        <AppText style={{fontSize: 14}}>Gender: {gender}</AppText>
        <AppText style={{fontSize: 14}}>DOB: {dob}</AppText>
      </View>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <Icon
          name={'open-in-new'}
          size={25}
          color={colors.darkBlue}
          style={{left: 2}}
        />
      </TouchableOpacity>
    </View>
  );
}
