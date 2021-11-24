import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';

import colors from '../../../constants/colors';
import styles from './styles';
import AppText from '../../atoms/AppText';

export default function AppProfileCard({
  title,
  detail,
  iconName,
  ...props
}) {
    return(
        <View style={styles.detailContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name={iconName}
            size={30}
            color={colors.primary}
            style={{ left: 2 }}
          />
        </View>
        <View style={ styles.BottomDetailContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.detail}>{detail}</AppText>
        </View>
      </View>
    )
}