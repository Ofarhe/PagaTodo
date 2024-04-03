import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from '../../../utils/colors/colors';

const ShortLabel = ({
  title = 'Titulo:',
  titleCustomStyle,
  description = 'Descripción:',
  descriptionCustomStyle,
}) => {
  return (
    <View style={pageStyle.container}>
      <Text style={titleCustomStyle ? titleCustomStyle : pageStyle.titleStyle}>
        {title}
      </Text>
      <Text
        style={
          descriptionCustomStyle
            ? descriptionCustomStyle
            : pageStyle.descriptionStyle
        }>
        {description}
      </Text>
    </View>
  );
};

export {ShortLabel};

const pageStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  fontSize: 14,
  titleStyle: {
    flex: 1,
    fontWeight: 'bold',
    color: THEME.BANKING.PRIMARY,
  },
  descriptionStyle: {
    flex: 1,
    color: THEME.BANKING.SECONDARY,
  },
});
