import React from 'react';
import {Header as RNHeader} from '@react-navigation/elements';

function Header(props) {
  return (
    <RNHeader
      headerTitleAlign="center"
      headerStyle={{backgroundColor: '#d73374'}}
      headerLeftContainerStyle={{paddingLeft: 15}}
      headerRightContainerStyle={{paddingRight: 15}}
      {...props}
    />
  );
}

export default Header;
