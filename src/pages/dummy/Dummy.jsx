import React from 'react';
import { View } from 'react-native';
const Dummy = () => {
    return (
        <View className="flex-1 bg-black">
            <View className='bg-teal-700 h-[86%]' />
            <View className='bg-red-600 h-[3%]' />
            <View className='bg-green-600 h-[8%]' />
            <View className='bg-blue-600 h-[3%]' />
        </View>
    )
}
export default Dummy;