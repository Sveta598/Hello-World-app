import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from './Input';
import { ThemeProvider, Text } from 'react-native-elements';
import Theme from './App/Theme/index';

const STORAGE_KEY = 'STRING_DATA'

export default function SavedInput() {
  const [name, setName] = useState('World')

  async function loadName() {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY)

      if (name === null) return

      setName(name)
    } catch (e) {
      console.error('Failed to load name.')
    }
  }

  async function saveName(name) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name)
      setName(name)
    } catch (e) {
      console.error('Failed to save name.')
    }
  }

  useEffect(() => {
    loadName()
  }, [])

  return (
    <View>
      <Input
        placeholder={'Type your name, hit enter, and refresh!'}
        onSubmitEditing={(value) => {
          saveName(value)
        }}
      />
      <ThemeProvider theme={Theme}>
        <Text h4 style={styles.text}>Hello {name}!</Text>
      </ThemeProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: '#EEB',
  },
})