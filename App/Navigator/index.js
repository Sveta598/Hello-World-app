import React from 'react';
import {connect} from 'react-redux';
import Tabs from '../Navigation/Tabs';
import Checking from '../Screens/Checking';
import Savings from '../Screens/Savings';
import SignInScreen from '../Screens/SignInScreen/index';

function Navigator({ isSignedIn }) {
    isSignedIn ? (
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

const mapStateToProps = state => {
    return {
        isSignedIn: state.true
    }
}

export default connect(mapStateToProps, null)(Navigator)








