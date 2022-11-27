import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Discover = () => {
    // Navigation hook
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])

  return (
    <View>
      <Text>Discover</Text>
    </View>
  )
}

export default Discover