import React, {useEffect, useState} from 'react';
import MainLayout from '../layout/MainLayout';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {THEME} from '../../utils/colors/colors';
import BankView from '../../components/base/BankView';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useBackpress} from '../../utils/colors/utils';
import {
  fetchAPIData,
  getStoredData,
  saveStoredData,
} from '../../repository/web/BankingRepository';

function BankScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Welcome');
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBanks = async () => {
    try {
      console.log('Checking db data');
      const storedData = await getStoredData();
      if (storedData !== null) {
        console.log('Retrieving db stored data');
        console.log(`Retrieved ${storedData.length} items stored in DB`);
        setData(storedData);
      } else {
        console.log('Fetching API data');
        const fetchData = await fetchAPIData();
        if (fetchData.length !== undefined) {
          console.log('Fetched API data');
          saveStoredData(fetchData);
          setData(fetchData);
        } else {
          Alert.alert(
            'No hay registros guardados. Intente de nuevo cuando haya conexión a Internet',
          );
          console.log('No stored items nor available connection');
        }
      }
    } catch (error) {
      console.error('Ha ocurrido el siguiente error: ' + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBanks();
  }, []);

  useBackpress();

  return (
    <MainLayout title="Nuestros bancos son:">
      <View style={pageStyles.container}>
        {isLoading && (
          <View style={pageStyles.loader}>
            <ActivityIndicator
              size={'large'}
              color={THEME.WHITE}
              animating={isLoading}
            />
            <Text style={pageStyles.loaderText}>Obteniendo información</Text>
          </View>
        )}
        <ScrollView style={pageStyles.list}>
          {data.map((item, index) => (
            <BankView key={index} bankItem={item} />
          ))}
        </ScrollView>
        {!isLoading && (
          <Pressable onPress={onPressHandler} style={pageStyles.button}>
            <Text style={pageStyles.text}>Salir</Text>
          </Pressable>
        )}
      </View>
    </MainLayout>
  );
}

const pageStyles = StyleSheet.create({
  iosSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: THEME.BANKING.BACKGROUND,
  },
  list: {
    flexGrow: 1,
    height: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: THEME.BANKING.STATUS,
  },
  button: {
    marginVertical: 10,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: THEME.BANKING.INACTIVE,
    borderRadius: 10,
  },
  loader: {
    height: 500,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderText: {
    fontSize: 14,
    paddingVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text: {
    color: THEME.WHITE,
  },
});

export default BankScreen;
