import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {THEME} from './utils/colors/colors';
import MainLayout from './layout/MainLayout';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SafeAreaView style={pageStyles.container}>
        <MainLayout />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const pageStyles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BANKING.BACKGROUND,
  },
});

export default App;
