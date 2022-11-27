import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    // Navigation hook
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])

    const heroImg = require("../assets/hero.png")

  return (
    <SafeAreaView className="bg-white flex-1 relative">

        {/* First section */}
        <View className="flex-row px-6 mt-8 items-center space-x-2">
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                <Text className="text-[#00BCC9] text-3xl font-semibold">GO</Text>
            </View>
            <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
        </View>

        {/* Section section */}
        <View className="px-6 mt-8 space-y-3">
            <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
            <Text className="text-[#00BCC9] text-[36px] font-bold">Good moments</Text>

            <Text className="text-[#3C6072]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
        </View>
        
        {/* Circle section */}
        <View className="w-[375px] h-[375px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
        <View className="w-[375px] h-[375px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

        {/* Image container */}
        <View className="flex-1 relative items-center justify-center">
            <Image
                source={heroImg}
                className="w-full h-full object-cover mt-20"
            />

            <View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
                <TouchableOpacity
                onPress={()=> navigation.navigate("Discover")}>
                    <View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                        <Text className="text-gray-50 text-[36px] font-semibold">GO</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default HomeScreen