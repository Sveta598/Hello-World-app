import React from 'react';
import {Text} from 'react-native-elements';
import {View, TouchableOpacity} from 'react-native';
import Avatar from './Avatar';
import HeaderTitle from '../Components/HeaderTitle';
import Header from '../Components/Header';
import Container from '../Components/Container';

function Cards() {
  return (
    <Container>
      <Header
        headerTitle={() => <HeaderTitle title="Cards" />}
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

export default Cards;
