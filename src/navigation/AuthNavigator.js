import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/**Auth*/
import GetStart from '../components/pages/GetStart/index';
import Signup from '../components/pages/Authentication/sign-up/index';

/**Home*/
import Home from '../components/pages/Home/index';
import Profile from '../components/pages/Profile/index';

/**App Routes*/
import Routes from './routes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Signup}
      screenOptions={() => ({
        headerTitleAlign: 'center',
      })}>
      <Stack.Screen
        name={Routes.GETSTART}
        component={GetStart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default App;
