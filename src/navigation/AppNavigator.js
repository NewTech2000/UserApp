import React from 'react';
import {StyleSheet, Vibration} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

/* APP Routes */
import Routes from '../navigation/routes';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={{}}
      screenOptions={() => ({
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen name={{}} component={{}} options={{}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
