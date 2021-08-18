import React from 'react';
import Container from '../../Components/Container';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-elements';
import colors from '../../Theme/colors';

function SignInScreen() {
    const [useremail, setUseremail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    //const { signIn } = React.useContext(AuthContext);
  
    return (
        <Container>
            <View>
                <Text 
                    style={{fontWeight: 'bold'}} 
                    borderBottomColor={colors.primary}>Login
                </Text>
            </View>
            <Text>Email</Text>
            <TextInput
            placeholder="Your email address"
            value={useremail}
            onChangeText={setUseremail}
            />
            <Text>Password</Text>
            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />
            <Button title="FORGOT PASSWORD" />
            <Button title="LOGIN" onPress={() => signIn({ useremail, password })} />
            <View style={{textAlign: 'center'}}>
                <Text>Lets test 2 ways to log in</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                    <Text>Touch ID</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Face ID</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
  }

  /*const mapStateToProps = state => {
    return {
        authData: state.jwtTokens
    }
  }*/

  export default SignInScreen;