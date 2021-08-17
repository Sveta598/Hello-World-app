import React, { useState} from 'react';
import { View, Image, Modal, TouchableWithoutFeedback, StyleSheet, Platform} from 'react-native';
import { ListItem } from 'react-native-elements';

const styles = StyleSheet.create({
    userMenuContent: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? 90 : 55,
      right: 10,
      width: 100,
    },
    userMenuOverlay: StyleSheet.absoluteFillObject,
});

function Avatar() {
    const [userMenuVisible, setUserMenuVisible] = useState(false);
    const hideUserMenu = () => {
      setUserMenuVisible(false);
    };
    const showUserMenu = () => {
      setUserMenuVisible(true);
    };
    return (
        <>
            <TouchableWithoutFeedback onPress={showUserMenu}>
                <Image source={require('../Assets/Images/oval.png')} />
            </TouchableWithoutFeedback>
            <Modal visible={userMenuVisible} transparent>
                <TouchableWithoutFeedback onPress={hideUserMenu}>
                    <View style={styles.userMenuOverlay} />
                </TouchableWithoutFeedback>
                <ListItem style={styles.userMenuContent}>
                    <ListItem.Content>
                        <ListItem.Title>Sign out</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </Modal>
        </>
    );
}

export default Avatar;
