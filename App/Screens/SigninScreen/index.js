import React, { useState, useEffect } from 'react';
import Container from '../../Components/Container';
import {View, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import {Text, Button} from 'react-native-elements';
import colors from '../../Theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import authValidation from '../../Redux/Reducers/actions/createDelay';

function SignInScreen() {
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
          setKeyboardStatus("Keyboard Shown");
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
          setKeyboardStatus("Keyboard Hidden");
        });
    
        return () => {
          showSubscription.remove();
          hideSubscription.remove();
        };
    }, []);

    const [loading, setLoading] = useState(false)
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
            <TextInput
                placeholder="Your email address"
                value={useremail}
                onSubmitEditing={Keyboard.dismiss} 
                onChangeText={(e) => setUseremail(e.target.value)}
            />
            <Text>Password</Text>
            <TextInput
                placeholder="Password"
                value={password}
                onSubmitEditing={Keyboard.dismiss} 
                onChangeText={(e) => setPassword(e.target.value)}
                secureTextEntry
            />
            <Button title="FORGOT PASSWORD" />
            <Button title="LOGIN" onPress={() => dispatch(authValidation({
                email: useremail,
                password: password
            }))} />
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