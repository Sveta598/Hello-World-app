import React from 'react';
import {Header as RNHeader} from '@react-navigation/elements';
import {View} from 'react-native';

function Header(props) {
  return (
    <View>
      <RNHeader
        headerTitleAlign="center"
        headerStyle={{backgroundColor: '#d73374'}}
        headerLeftContainerStyle={{paddingLeft: 15}}
        headerRightContainerStyle={{paddingRight: 15}}
        {...props}
      />
    </View>
  );
}

export default Header;
