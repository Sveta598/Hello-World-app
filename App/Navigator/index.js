import React from 'react';
import {connect} from 'react-redux';

function Navigator({ isSignedIn }) {
    isSignedIn ? (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </>
  ) : (
    <>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </>
  )
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.true
    }
}

export default connect(mapStateToProps, null)(Navigator)








