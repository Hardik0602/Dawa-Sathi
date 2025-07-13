import React, { useEffect } from "react";
import { View, Image } from 'react-native';
import logo from '../../../images/logo.png';
const Startup = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000); // 3 second
        return () => clearTimeout(timer);
    }, []);
    return (
        <View className=" flex-1 justify-center items-center bg-[#F5F6FA]">
            <Image
                source={logo}
                resizeMode='contain'
                className='h-full w-[80%]' />
        </View>
    );
};
export default Startup;