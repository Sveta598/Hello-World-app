import React from 'react';
import {Text} from 'react-native-elements';
import {View, Image, TouchableOpacity} from 'react-native';
import Avatar from './Avatar';
import HeaderTitle from '../Components/HeaderTitle';
import Header from '../Components/Header';
import Container from '../Components/Container';

function Checking({navigation, route}) {
  return (
    <Container>
      <Header
        headerLeft={() => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../Assets/Images/back.png')} />
          </TouchableOpacity>
        )}
        headerTitle={() => (
          <HeaderTitle title="Checking" subtitle={route.params.subtitle} />
        )}
        headerRight={() => (
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
        )}
      />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text h2>Coming soon</Text>
      </View>
    </Container>
  );
}

export default Checking;
