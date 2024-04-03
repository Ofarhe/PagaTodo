import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {THEME} from '../../../utils/colors/colors';

const DescriptionLabel = ({
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

export {DescriptionLabel};

const pageStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  titleStyle: {
    flex: 1,
    fontSize: 14,
    width: '100%',
    fontWeight: 'bold',
    color: THEME.BANKING.PRIMARY,
  },
  descriptionStyle: {
    flex: 1,
    fontSize: 13,
    color: THEME.BANKING.SECONDARY,
    width: '100%',
  },
});
