import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
} from 'react-native';
import {THEME} from '../../utils/colors/colors';
import {ScrollView} from 'react-native-gesture-handler';

const MainContainer = ({children}) =>
  Platform.OS === 'android' ? (
    <SafeAreaView>{children}</SafeAreaView>
  ) : (
    <SafeAreaView style={pageStyle.iosSafe}>{children}</SafeAreaView>
  );

const MainLayout = ({title = 'PagaTodo', children}) => {
  return (
    <MainContainer>
      <StatusBar backgroundColor={THEME.PAGATODO.STATUS} />
      <ScrollView style={pageStyle.container} nestedScrollEnabled={true}>
        <View style={pageStyle.container}>
          <View>
            <Text style={pageStyle.title}>{title}</Text>
          </View>
          {children}
        </View>
      </ScrollView>
    </MainContainer>
  );
};

const pageStyle = StyleSheet.create({
  iosSafe: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: THEME.BANKING.BACKGROUND,
    flexGrow: 1,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: THEME.BANKING.STATUS,
  },
  loader: {},
});

export default MainLayout;
