import React from 'react';
import Container from '../../Components/Container';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-elements';
import colors from '../../Theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

function SignInScreen() {
    const [useremail, setUseremail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false)
  
    const dispatch = useDispatch()
    const authFlow = useSelector(state => {
        return {
            jwtToken: state.user.jwtToken,
            authError: state.user.authError,
          }
    })

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
            <Button title="LOGIN" onPress={() => dispatch({ setUseremail, setPassword })} />
            <View style={{textAlign: 'center'}}>
                <Text>Lets test 2 ways to log in</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Icon name="touch-app" size={10} color="#000" />   
                    <Text>Touch ID</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Icon name="face" size={10} color="#000" />   
                    <Text>Face ID</Text>
                </TouchableOpacity>
            </View>
        </Container>
    );
  }

  export default SignInScreen;