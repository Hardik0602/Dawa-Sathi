import React, { useState } from 'react';
import { View, Text, Dimensions, Image, ScrollView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import user from '../../../images/user.png'
import deleteAccount from '../../../images/deleteAccount.png'
import logout from '../../../images/logout.png'
import InputField from '../../componants/InputField';
const Picture = ({ picture }) => {
    return (
        <View className=' h-[120px] w-[120px] bg-[#E2E1F3] rounded-full items-center justify-center'>
            <Image
                source={picture}
                className='h-full w-full'
                resizeMode='contain' />
        </View>
    )
}
const Profile = () => {
    const screenHeight = Dimensions.get('window').height;
    const topMarginPhoto = screenHeight * 0.3 - 60;
    const topMarginRest = screenHeight * 0.3 + 70;
    const heightRest = screenHeight - topMarginRest;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <KeyboardAvoidingView className='flex-1 bg-black'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='flex-1 bg-white items-center'>
                    <View className='h-[30%] w-full items-center mb-[65px]'>
                        <View className='items-center justify-center bg-[#A531E9] w-[110%] h-full rounded-b-full'>
                            <Text className='text-white text-[35px] font-bold'>My Profile</Text>
                        </View>
                    </View>
                    <View className='absolute w-full items-center' style={{ marginTop: topMarginPhoto }}>
                        <Picture picture={user} />
                    </View>
                    <View className='w-[90%]' style={{ height: heightRest }}>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
                            keyboardShouldPersistTaps='handled'
                            showsVerticalScrollIndicator={false}>
                            <View>
                                <InputField
                                    label={'Name'}
                                    value={name}
                                    onChangeText={setName} />
                                <InputField
                                    label={'Email'}
                                    value={email}
                                    onChangeText={setEmail} />
                                <InputField
                                    label={'Password'}
                                    value={pass}
                                    onChangeText={setPass} />
                            </View>
                            <View>
                                <View className='mb-[5%] flex-row'>
                                    <Image
                                        source={logout}
                                        resizeMode='contain'
                                        className='h-[25px] w-[25px]' />
                                    <Text className='text-[#FF0000] text-[14px] ml-[10px]'>Log Out</Text>
                                </View>
                                <View className='mb-[5%] flex-row'>
                                    <Image
                                        source={deleteAccount}
                                        resizeMode='contain'
                                        className='h-[25px] w-[25px]' />
                                    <Text className='text-[#FF0000] text-[14px] ml-[10px]'>Delete Profile</Text>
                                </View>
                            </View>
                            <View className='items-center'>
                                <Text>Version: 13.46.0.52</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default Profile;