import React, { useEffect } from "react";
import { View, Image } from 'react-native';
import logo from '../../../images/logo.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Startup = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000); // 3 second
        return () => clearTimeout(timer);
    }, []);
    return (
        <View className='flex-1' style={{paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: insets.left, paddingRight: insets.right}}>
            <Image
                source={logo}
                resizeMode='contain'
                className='h-full w-[80%]' />
        </View>
    );
};
export default Startup;