import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import male from '../../../images/male_copy.png'
import female from '../../../images/female_copy.png'
import AuthProgressBar from '../../componants/AuthProgressBar';
const Gender = ({ navigation }) => {
    return (
        <KeyboardAvoidingView className='flex-1 bg-black'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className='flex-1 bg-[#F6F6F6]'>
                    <View className='h-[15%] justify-end items-center'>
                        <AuthProgressBar
                            progress={'w-3/5'} />
                    </View>
                    <View className='h-[85%] items-center p-[5%]'>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}>
                            <View className='items-center'>
                                <Text className='text-[#A531E9] font-bold text-[25px]'>Which one are You?</Text>
                            </View>
                            <View className='items-center h-[40%] w-full'>
                                <View className='flex-row w-full' style={{ justifyContent: 'space-evenly' }}>
                                    <View className='w-[40%]'>
                                        <TouchableOpacity
                                            className='bg-[#C470F5] p-[10%] items-center justify-center rounded-3xl'
                                            onPress={() => { navigation.navigate('Location') }}>
                                            <Image
                                                source={male}
                                                resizeMode='contain'
                                                className='w-full' />
                                            <Text className='text-white font-bold text-[20px] mt-[10%]'>Male</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View className='w-[40%]'>
                                        <TouchableOpacity
                                            className='bg-[#DB9DFFDB] p-[10%] items-center justify-center rounded-3xl'
                                            onPress={() => { navigation.navigate('Location') }}>
                                            <Image
                                                source={female}
                                                resizeMode='contain'
                                                className='w-full' />
                                            <Text className='text-white font-bold text-[20px] mt-[10%]'>Female</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Text className='text-[#979797] mt-[5%]'>Step 3/5</Text>
                            </View>
                            <View>
                                <Text className='text-[30px] text-[#6B6969] font-bold text-center'>We believe in tailored care. Let's begin with your gender</Text>
                            </View>
                            <View className='items-center h-[20%]'>
                                <TouchableOpacity
                                    className='bg-[#AB33ED] rounded-xl justify-center items-center w-[90%] h-[50%]'
                                    onPress={() => { navigation.navigate('Location') }}>
                                    <Text className='text-white font-bold text-[25px]'>Prefer not to say</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
export default Gender;



// <View className="flex-1 bg-[#F6F6F6]">
//             <View className="pt-20 items-center mb-[-100]">
//                 <AuthProgressBar progress={"w-3/5"} />
//             </View>
//             <View className="flex-1 justify-center items-center">
//                 <View className='items-center mb-10'>
//                     <Text className='text-[#A531E9] font-bold text-[25px] mb-5 mt-10'>Which one are you ?</Text>
//                     <View className='flex-row mb-5'>
//                         <View className='mr-5 w-[40%]'>
//                             <TouchableOpacity className='bg-[#C470F5] rounded-3xl' onPress={() => navigation.navigate('Location')}>
//                                 <Image
//                                     source={male}
//                                     className="w-[150px] h-[250px] mt-[-40]"
//                                     resizeMode="contain" />
//                                 <Text className='text-white font-bold text-[25px] text-center mb-1'>Male</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <View className='w-[40%]'>
//                             <TouchableOpacity className='bg-[#DB9DFFDB] rounded-3xl' onPress={() => navigation.navigate('Location')}>
//                                 <Image
//                                     source={female}
//                                     className="w-[150px] h-[250px] mt-[-30] mb-[-10]"
//                                     resizeMode="contain" />
//                                 <Text className='text-white font-bold text-[25px] text-center mb-1'>Female</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                     <Text className='text-[#979797]'>Step 3/5</Text>
//                 </View>
//                 <View>
//                     <Text className='text-[#797979] text-[27px] text-center mx-10 font-bold'>We believe in tailored care. Let's begin with your gender</Text>
//                 </View>
//                 <View className="mt-12 w-[70%]">
//                     <View className='items-center'>
//                         <TouchableOpacity className="bg-[#AB33ED] py-[10px] rounded-xl w-[75%]" onPress={() => navigation.navigate('Location')}>
//                             <Text className='text-white font-bold text-[25px] text-center'>Prefer not to say</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </View>