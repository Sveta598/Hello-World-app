import React from 'react';
import Container from '../../Components/Container';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Text, Button} from 'react-native-elements';
import colors from '../../Theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
//import signIn from '../../Services/Authentication';
import authValidation from '../../Redux/Reducers/actions/createDelay';

function SignInScreen() {
    const [useremail, setUseremail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    
    const [loading, setLoading] = React.useState(false)
    const jwtToken = useSelector(state => state.user.jwtToken);
    const authError = useSelector(state => state.user.authError);

    const dispatch = useDispatch()

    return (
        <Container>
            <View>
                <Text 
                    style={{fontWeight: 'bold'}} 
                    borderBottomColor={colors.primary}>Login
                </Text>
            </View>
            <Text>Email</Text>

            {/*<TextInput
            placeholder="Your email address"
            value={useremail}
            onChangeText={setUseremail}
            />*/}

            <TextInput
            placeholder="Your email address"
            value={useremail}
            onChangeText={(e) => setUseremail(e.target.value)}
            />




            <Text>Password</Text>


            {/*<TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            />*/}

            <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(e) => setPassword(e.target.value)}
            secureTextEntry
            />

            <Button title="FORGOT PASSWORD" />
            {/*<Button title="LOGIN" onPress={() => signIn({ useremail, password })} />*/}

            <Button title="LOGIN" onPress={() => dispatch(authValidation())} />

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