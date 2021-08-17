import React from 'react';
import {Header as RNHeader} from '@react-navigation/elements';
import {View} from 'react-native';
import colors from '../Theme/colors';

function Header(props) {
  return (
    <View>
      <RNHeader
        headerTitleAlign="center"
        headerStyle={{backgroundColor: colors.primary}}
        headerLeftContainerStyle={{paddingLeft: 15}}
        headerRightContainerStyle={{paddingRight: 15}}
        {...props}
      />
    </View>
  );
}

export default Header;
