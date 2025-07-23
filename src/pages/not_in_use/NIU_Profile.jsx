// import React, { useState } from 'react';
// import { View, Text, Image, ScrollView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native';
// import user from '../../../images/user.png'
// import deleteAccount from '../../../images/deleteAccount.png'
// import logout from '../../../images/logout.png'
// import InputField from '../../componants/InputField';

// const SEMICIRCLE_HEIGHT = 220;
// const PHOTO_SIZE = 120;

// const Picture = ({ picture }) => {
//     return (
//         <View className='h-[120px] w-[120px] bg-[#E2E1F3] rounded-full items-center justify-center'>
//             <Image
//                 source={picture}
//                 className='h-full w-full'
//                 resizeMode='contain' />
//         </View>
//     )
// }

// const Profile = () => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [pass, setPass] = useState('')
//     return (
//         <KeyboardAvoidingView
//             className='flex-1 bg-black'
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         >
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                 <ScrollView
//                     contentContainerStyle={{ flexGrow: 1 }}
//                     keyboardShouldPersistTaps='handled'
//                     showsVerticalScrollIndicator={false}
//                 >
//                     <View className='flex-1 bg-white items-center'>
//                         {/* Semi-circle header */}
//                         <View style={{ width: '110%', height: SEMICIRCLE_HEIGHT, overflow: 'hidden', alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'transparent' }}>
//                             <View style={{
//                                 width: '100%',
//                                 height: SEMICIRCLE_HEIGHT * 2, // double height for full semi-circle
//                                 borderBottomLeftRadius: SEMICIRCLE_HEIGHT * 2,
//                                 borderBottomRightRadius: SEMICIRCLE_HEIGHT * 2,
//                                 backgroundColor: '#A531E9',
//                                 alignItems: 'center',
//                                 justifyContent: 'flex-end',
//                             }}>
//                                 <Text className='text-white text-[35px] font-bold mb-8'>My Profile</Text>
//                             </View>
//                         </View>
//                         {/* Profile photo */}
//                         <View style={{ marginTop: -PHOTO_SIZE / 2, marginBottom: 24 }}>
//                             <Picture picture={user} />
//                         </View>
//                         {/* Form and actions */}
//                         <View className='w-[90%]' style={{ justifyContent: 'space-evenly' }}>
//                             <View>
//                                 <InputField
//                                     label={'Name'}
//                                     value={name}
//                                     onChangeText={setName} />
//                                 <InputField
//                                     label={'Email'}
//                                     value={email}
//                                     onChangeText={setEmail} />
//                                 <InputField
//                                     label={'Password'}
//                                     value={pass}
//                                     onChangeText={setPass} />
//                             </View>
//                             <View>
//                                 <View className='mb-[5%] flex-row'>
//                                     <Image
//                                         source={logout}
//                                         resizeMode='contain'
//                                         className='h-[25px] w-[25px]' />
//                                     <Text className='text-[#FF0000] text-[14px] ml-[10px]'>Log Out</Text>
//                                 </View>
//                                 <View className='mb-[5%] flex-row'>
//                                     <Image
//                                         source={deleteAccount}
//                                         resizeMode='contain'
//                                         className='h-[25px] w-[25px]' />
//                                     <Text className='text-[#FF0000] text-[14px] ml-[10px]'>Delete Profile</Text>
//                                 </View>
//                             </View>
//                             <View className='items-center mt-4'>
//                                 <Text>Version: 13.46.0.52</Text>
//                             </View>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//     );
// };
// export default Profile;