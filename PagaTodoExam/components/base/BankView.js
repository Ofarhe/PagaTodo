import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import {ShortLabel} from './labels/TitleLabel';
import {DescriptionLabel} from './labels/DescriptionLabel';

const BankView = ({bankItem}) => {
  return (
    <View style={pageStyle.bankData}>
      <Image style={pageStyle.icon} source={{uri: bankItem.url}} />
      <View style={pageStyle.bankInfo}>
        <ShortLabel title="Nombre del banco:" description={bankItem.bankName} />
        <ShortLabel title="Antiguedad: " description={bankItem.age} />
        <DescriptionLabel
          title="Descripción:"
          description={bankItem.description}
        />
      </View>
    </View>
  );
};

const pageStyle = StyleSheet.create({
  iosSafe: {
    flex: 1,
  },
  bankData: {
    flex: 1,
    minHeight: 120,
    flexDirection: 'row',
    paddingVertical: 10,
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
    height: '70%',
    resizeMode: 'contain',
  },
});

export default BankView;
