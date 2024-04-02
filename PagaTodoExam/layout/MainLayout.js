import React, {useEffect, useState} from 'react';
import {ReactPropTypes} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import {THEME} from '../utils/colors/colors';

const MainContainer = ({children}) =>
  Platform.OS === 'android' ? (
    <>{children}</>
  ) : (
    <SafeAreaView style={pageStyle.iosSafe}>{children}</SafeAreaView>
  );

const MainLayout = ({
  title = 'PagaTodo',
  page = '1',
  scrollDisabled = false,
  footer,
  children,
  navigation,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBanks = async () => {
    try {
      const response = await fetch(
        'https://dev.obtenmas.com/catom/api/challenge/banks',
        {
          method: 'GET',
        },
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBanks();
  }, []);

  return (
    <>
      <MainContainer>
        <StatusBar backgroundColor={THEME.PAGATODO.STATUS} />
        <SafeAreaView style={pageStyle.container}>
          <View style={pageStyle.container}>
            <View>
              <Text style={pageStyle.title}>{title}</Text>
            </View>
            {children ? (
              {children}
            ) : (
              <View>
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <FlatList
                    data={data}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => (
                      <View style={pageStyle.bankData}>
                        <Image
                          style={pageStyle.icon}
                          source={{uri: item.url}}
                          resizeMode="contain"
                        />
                        <View style={pageStyle.bankInfo}>
                          <Text>Nombre del banco: {item.bankName}</Text>
                          <Text>Edad (?): {item.age}</Text>
                          <Text>Descripción:</Text>
                          <Text>{item.description}</Text>
                        </View>
                      </View>
                    )}
                  />
                )}
              </View>
            )}
          </View>
          {footer && {...footer}}
        </SafeAreaView>
      </MainContainer>
    </>
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
  bankData: {
    flex: 1,
    minHeight: 150,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 6,
    alignItems: 'center',
    alignContent: 'center',
  },
  bankInfo: {
    flex: 2,
    paddingVertical: 6,
  },
  icon: {
    flex: 1,
    margin: 10,
    width: '100%',
    height: '70%',
  },
});

export default MainLayout;
