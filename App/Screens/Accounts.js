import React from 'react';
import {TouchableOpacity, Button} from 'react-native';
import Avatar from './Avatar';
import Header from '../Components/Header';
import HeaderTitle from '../Components/HeaderTitle';
import Container from '../Components/Container';

function Accounts({navigation}) {
  return (
    <Container>
      <Header
        headerTitle={() => <HeaderTitle title="Accounts" />}
        headerRight={() => (
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
        )}
      />
      <Button
        title="Go to Savings"
        onPress={() => navigation.navigate('Savings')}
      />
    </Container>
  );
}

export default Accounts;
