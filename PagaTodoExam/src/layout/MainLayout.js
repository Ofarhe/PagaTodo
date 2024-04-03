import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
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

const MainLayout = ({
  title = 'PagaTodo',
  page = '1',
  footer,
  children,
  navigation,
}) => {
  return (
    <MainContainer>
      <StatusBar backgroundColor={THEME.PAGATODO.STATUS} />
      <ScrollView style={pageStyle.container}>
        <View style={pageStyle.container}>
          <View>
            <Text style={pageStyle.title}>{title}</Text>
          </View>
          {children}
        </View>
        {footer && {...footer}}
      </ScrollView>
      {/* //TODO: Change to FlatList with Header and Footer components for better performance */}
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
    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: THEME.BANKING.STATUS,
    borderWidth: 1,
    borderColor: 'cyan',
  },
});

export default MainLayout;
