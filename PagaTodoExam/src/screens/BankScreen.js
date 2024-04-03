import React, {useEffect, useState} from 'react';
import MainLayout from '../layout/MainLayout';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {THEME} from '../../utils/colors/colors';
import BankView from '../../components/base/BankView';
import {FlatList} from 'react-native-gesture-handler';

function BankScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Welcome');
  };

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
    <MainLayout title="Bienvenidos">
      <View style={pageStyle.container}>
        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({bankName}) => bankName}
              renderItem={({item}) => <BankView bankItem={item} />}
            />
          )}
        </View>
        <Pressable onPress={onPressHandler} style={pageStyle.button}>
          <Text>Salir</Text>
        </Pressable>
      </View>
    </MainLayout>
  );
}

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
  button: {
    marginTop: 10,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: THEME.BANKING.INACTIVE,
    borderRadius: 10,
  },
});

export default BankScreen;
