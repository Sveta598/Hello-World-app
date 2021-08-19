import React from 'react';
import Tabs from '../Navigation/Tabs';
import Checking from '../Screens/Checking';
import Savings from '../Screens/Savings';
import SignInScreen from '../Screens/SignInScreen/index';

function isSignedIn () {
  if (jwtToken !== null) {
    return true;
  }
  else {
    return false
  }
}

function Navigator() {
    return isSignedIn ? (
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