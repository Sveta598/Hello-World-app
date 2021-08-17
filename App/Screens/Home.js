import React from 'react';
import {Button, Image, TouchableOpacity} from 'react-native';
import Avatar from './Avatar';
import Header from '../Components/Header';
import Container from '../Components/Container';

function Home({navigation}) {
  return (
    <Container>
      <Header
        headerLeft={() => (
          <TouchableOpacity>
            <Image source={require('../Assets/Images/burgerMenuIcon.png')} />
          </TouchableOpacity>
        )}
        headerTitle={() => (
          <Image source={require('../Assets/Images/logo.png')} />
        )}
        headerRight={() => (
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
        )}
      />
      <Button
        title="Go to Checking"
        onPress={() => navigation.navigate('Checking')}
      />
    </Container>
  );
}

export default Home;
