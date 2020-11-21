import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../theme/Colors';
import Home from '../view/Home';
import Details from '../view/Details';

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => (
  <HomeStackNavigator.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#fff',
    }}>
    <HomeStackNavigator.Screen name="Home" component={Home} />
    <HomeStackNavigator.Screen
      name="Detail"
      component={Details}
      options={({route}) => ({
        title: route.params.item.name,
        headerBackTitleVisible: false,
      })}
    />
  </HomeStackNavigator.Navigator>
);

function AppNavigation() {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={Colors.primary_dark}
        barStyle="light-content"
      />
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigation;
