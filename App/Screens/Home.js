import React from 'react';
import { View, Button } from 'react-native';

function Home({ navigation }) {
    return (
      <View>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Checking" onPress={() => navigation.navigate('Checking')} />
      </View>
    );
  }

  export default Home;