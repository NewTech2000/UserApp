import React from 'react';
import {Dimensions, View} from 'react-native';
import styles from './styles';
import AppRadioButton from '../../atoms/AppRadioButton/index';
import AppText from '../../atoms/AppText/index';
import colors from '../../../constants/colors';

export default function AppRadioButtonContainer({
  value,
  text,
  status,
  onPress,
  ...props
}) {
  return (
    <View style={styles.mainContainer}>
      <AppRadioButton value={value} status={status} onPress={onPress} />
      <View style={{flex: 1,flexDirection:"row"}}>
        <AppText
          top={10}
          text={text}
          color={colors.darkGray}
          align={'flex-start'}
          style={{marginTop:Dimensions.get('window').height * 0.013,}}>
          {text}
        </AppText>
      </View>
    </View>
  );
}
