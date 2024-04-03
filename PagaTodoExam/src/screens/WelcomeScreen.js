import React from 'react';
import MainLayout from '../layout/MainLayout';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {THEME} from '../../utils/colors/colors';

function WelcomeScreen({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Banks');
  };

  return (
    <MainLayout title="Bienvenidos">
      <Image
        source={require('../../assets/img/reactRedux.png')}
        style={pageStyles.tinyLogo}
      />
      <Pressable onPress={onPressHandler} style={pageStyles.button}>
        <Text style={pageStyles.text}>Iniciar</Text>
      </Pressable>
    </MainLayout>
  );
}

const pageStyles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  button: {
    marginVertical: 25,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: THEME.BANKING.INACTIVE,
    borderRadius: 10,
  },
  text: {
    color: THEME.WHITE,
  },
});

export default WelcomeScreen;
