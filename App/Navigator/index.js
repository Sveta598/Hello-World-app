import React from 'react';
import Tabs from '../Navigation/Tabs';
import Checking from '../Screens/Checking';
import Savings from '../Screens/Savings';
import SignInScreen from '../Screens/SignInScreen/index';
import {useSelector} from 'react-redux';

function Navigator() {
  const jwtToken = useSelector(state => state.user.jwtToken);
  
  return jwtToken !== null ? (
    <>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Checking" component={Checking} />
      <Stack.Screen name="Savings" component={Savings} />
    </>
  ) : (
    <>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </>
  )
}

export default Navigator;