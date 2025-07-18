import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView } from 'react-native';
import log from '../../../images/login.png';
import InputField from '../../componants/InputField';
import LoginHook from '../../hooks/LoginHook';
const Login = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const [verified, setVerified] = useState(false);
  const handleLogin = LoginHook();
  useEffect(() => {
    setDisable(!(mobile.trim() && password.trim()));
  }, [mobile, password]);
  const onPress = () => {
    handleLogin(mobile, password, setVerified)
  };
  useEffect(() => {
    verified ? navigation.navigate('MainTab') : null;
  }, [verified]);
  return (
    <KeyboardAvoidingView className="flex-1 bg-black">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='flex-1 bg-[#A531E9]'>
          <View className='h-[40%] items-center justify-center'>
            <Image
              source={log}
              resizeMode='contain'
              className='h-[80%] w-[60%]' />
          </View>
          <View className='h-[60%] bg-white rounded-t-[10%] p-[5%]'>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}>
              <View className='items-center'>
                <Text className='text-[#A531E9] font-bold text-[40px]'>Login</Text>
              </View>
              <View>
                <View className='items-center'>
                  <Text className='text-[#7034A4] font-bold text-[12px]'>Please login to continue using the app</Text>
                  <InputField
                    label={'Phone'}
                    value={mobile}
                    onChangeText={setMobile} />
                  <InputField
                    label={'Password'}
                    value={password}
                    onChangeText={setPassword} />
                </View>
                <View className='flex-row justify-end'>
                  <TouchableOpacity onPress={() => { navigation.replace('Forgetpass') }}>
                    <Text className='text-[#8A99FD] text-[13px]'>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className='items-center h-[25%]'>
                {/* <TouchableOpacity
                  className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[50%]`}
                  disabled={disable}
                  onPress={() => { navigation.replace('MainTab') }}>
                  <Text className='text-white font-bold text-[20px]'>Login</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[50%]`}
                  disabled={disable}
                  onPress={() => onPress()}>
                  <Text className='text-white font-bold text-[20px]'>Login</Text>
                </TouchableOpacity>
                <View className='flex-row mt-[8%]'>
                  <Text>Don't have an account?</Text>
                  <TouchableOpacity onPress={() => { navigation.replace('Register') }}>
                    <Text className="text-[#8D9AF0] ml-[10px]">Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Login;


// if code above does not work------------------------
// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView } from 'react-native';
// import log from '../../../images/login.png';
// import InputField from '../../componants/InputField';
// const Login = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [disable, setDisable] = useState(true);
//   useEffect(() => {
//     setDisable(!(mobile.trim() && password.trim()));
//   }, [mobile, password]);
//   return (
//     <KeyboardAvoidingView behavior='padding or height' className="flex-1 bg-black">
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View className='flex-1 bg-[#A531E9]'>
//           <View className='h-[40%] items-center justify-center'>
//             <Image
//               source={log}
//               resizeMode='contain'
//               className='h-[80%] w-[60%]' />
//           </View>
//           <View className='h-[60%] bg-white rounded-t-[10%] p-[5%]'>
//             <ScrollView
//               contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly' }}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}>
//               <View className='items-center'>
//                 <Text className='text-[#A531E9] font-bold text-[40px]'>Login</Text>
//               </View>
//               <View className='w-full justify-center mt-[10%]'>
//                 <View className='items-center'>
//                   <Text className='text-[#A531E9] font-bold text-[12px]'>Please login to continue using the app</Text>
//                   <InputField
//                     label={'Phone'}
//                     value={mobile}
//                     onChangeText={setMobile} />
//                   <InputField
//                     label={'Password'}
//                     value={password}
//                     onChangeText={setPassword} />
//                 </View>
//                 <View className='flex-row justify-end'>
//                   <TouchableOpacity onPress={() => navigation.replace('Forgetpass')}>
//                     <Text className='text-[#8A99FD] text-[13px]'>Forgot Password?</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <View className='items-center mt-[5%] h-[20%]'>
//                 <TouchableOpacity
//                   className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[65%]`}
//                   disabled={disable}>
//                   <Text className='text-white font-bold text-[20px]'>Login</Text>
//                 </TouchableOpacity>
//                 <View className='flex-row mt-[5%]'>
//                   <Text>Don't have an account?</Text>
//                   <TouchableOpacity onPress={() => navigation.replace('Register')}>
//                     <Text className="text-[#8D9AF0] ml-[10px]">Sign Up</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };
// export default Login;





// ---------- Animated 1 ----------
// import React, { useEffect, useState, useRef } from 'react';
// import {
//   View, Text, Image, TouchableOpacity, Keyboard,
//   KeyboardAvoidingView, TouchableWithoutFeedback,
//   ScrollView, Animated, Easing, KeyboardEvent
// } from 'react-native';
// import log from '../../../images/login.png';
// import InputField from '../../componants/InputField';

// const Login = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [disable, setDisable] = useState(true);

//   const imageHeight = useRef(new Animated.Value(0.4)).current; // 40%

//   useEffect(() => {
//     setDisable(!(mobile.trim() && password.trim()));
//   }, [mobile, password]);

//   useEffect(() => {
//     const keyboardDidShow = () => {
//       Animated.timing(imageHeight, {
//         toValue: 0.2, // shrink to 20%
//         duration: 250,
//         easing: Easing.out(Easing.ease),
//         useNativeDriver: false,
//       }).start();
//     };

//     const keyboardDidHide = () => {
//       Animated.timing(imageHeight, {
//         toValue: 0.45, // back to 45%
//         duration: 250,
//         easing: Easing.out(Easing.ease),
//         useNativeDriver: false,
//       }).start();
//     };

//     const showListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
//     const hideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

//     return () => {
//       showListener.remove();
//       hideListener.remove();
//     };
//   }, []);

//   const imageContainerStyle = {
//     flex: imageHeight,
//     alignItems: 'center',
//     justifyContent: 'center',
//   };

//   const formContainerStyle = {
//     flex: imageHeight.interpolate({
//       inputRange: [0.2, 0.45],
//       outputRange: [0.8, 0.55],
//     }),
//     backgroundColor: 'white',
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     padding: '5%',
//   };

//   return (
//     <KeyboardAvoidingView behavior="padding" className="flex-1 bg-white">
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View className="flex-1 bg-[#A531E9]">
//           <Animated.View style={imageContainerStyle}>
//             <Image
//               source={log}
//               resizeMode="contain"
//               style={{ height: '80%', width: '60%' }}
//             />
//           </Animated.View>

//           <Animated.View style={formContainerStyle}>
//             <ScrollView
//               contentContainerStyle={{ flexGrow: 1 }}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}>
//               <View className='items-center mt-[10%]'>
//                 <Text className='text-[#A531E9] font-bold text-[40px]'>Login</Text>
//               </View>

//               <View className='w-full justify-center mt-[10%]'>
//                 <View className='items-center'>
//                   <Text className='text-[#A531E9] font-bold text-[12px]'>
//                     Please login to continue using the app
//                   </Text>
//                   <InputField
//                     label={'Phone'}
//                     value={mobile}
//                     onChangeText={setMobile}
//                   />
//                   <InputField
//                     label={'Password'}
//                     value={password}
//                     onChangeText={setPassword}
//                   />
//                 </View>

//                 <View className='flex-row justify-end'>
//                   <TouchableOpacity onPress={() => navigation.replace('Forgetpass')}>
//                     <Text className='text-[#8A99FD] text-[13px]'>Forgot Password?</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>

//               <View className='items-center mt-[5%]'>
//                 <TouchableOpacity
//                   className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[55px]`}
//                   disabled={!disable}
//                 >
//                   <Text className='text-white font-bold text-[20px]'>Login</Text>
//                 </TouchableOpacity>

//                 <View className='flex-row mt-[5%]'>
//                   <Text>Don't have an account?</Text>
//                   <TouchableOpacity onPress={() => navigation.replace('Register')}>
//                     <Text className="text-[#8D9AF0] ml-[10px]">Sign Up</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </ScrollView>
//           </Animated.View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default Login;





// ---------- Animated 2 ----------
// import React, { useEffect, useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   Keyboard,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   ScrollView,
//   Animated,
//   Easing,
//   Dimensions,
//   Platform,
// } from 'react-native';
// import log from '../../../images/login.png';
// import InputField from '../../componants/InputField';

// const { height: SCREEN_HEIGHT } = Dimensions.get('window');

// const Login = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [disable, setDisable] = useState(true);

//   const imageHeightAnim = useRef(new Animated.Value(SCREEN_HEIGHT * 0.45)).current;

//   useEffect(() => {
//     setDisable(!(mobile.trim() && password.trim()));
//   }, [mobile, password]);

//   useEffect(() => {
//     const keyboardDidShow = () => {
//       Animated.timing(imageHeightAnim, {
//         toValue: SCREEN_HEIGHT * 0.2,
//         duration: 300,
//         easing: Easing.out(Easing.ease),
//         useNativeDriver: false,
//       }).start();
//     };

//     const keyboardDidHide = () => {
//       Animated.timing(imageHeightAnim, {
//         toValue: SCREEN_HEIGHT * 0.45,
//         duration: 300,
//         easing: Easing.out(Easing.ease),
//         useNativeDriver: false,
//       }).start();
//     };

//     const showSub = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
//     const hideSub = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

//     return () => {
//       showSub.remove();
//       hideSub.remove();
//     };
//   }, []);

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       className="flex-1 bg-white"
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View className="flex-1 bg-[#A531E9]">

//           {/* Image Section with animated height */}
//           <Animated.View style={{ height: imageHeightAnim, alignItems: 'center', justifyContent: 'center' }}>
//             <Image
//               source={log}
//               resizeMode="contain"
//               style={{ height: '80%', width: '60%' }}
//             />
//           </Animated.View>

//           {/* Form Section */}
//           <View className="flex-1 bg-white rounded-t-[40px] px-[5%]">
//             <ScrollView
//               contentContainerStyle={{ flexGrow: 1 }}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}
//             >
//               <View className="items-center mt-[8%]">
//                 <Text className="text-[#A531E9] font-bold text-[40px]">Login</Text>
//               </View>

//               <View className="w-full justify-center mt-[10%]">
//                 <View className="items-center">
//                   <Text className="text-[#A531E9] font-bold text-[12px]">
//                     Please login to continue using the app
//                   </Text>
//                   <InputField
//                     label={'Phone'}
//                     value={mobile}
//                     onChangeText={setMobile}
//                   />
//                   <InputField
//                     label={'Password'}
//                     value={password}
//                     onChangeText={setPassword}
//                   />
//                 </View>

//                 <View className="flex-row justify-end">
//                   <TouchableOpacity onPress={() => navigation.replace('Forgetpass')}>
//                     <Text className="text-[#8A99FD] text-[13px]">Forgot Password?</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>

//               <View className="items-center mt-[5%]">
//                 <TouchableOpacity
//                   className={`${disable ? 'bg-gray-500' : 'bg-[#AB33ED]'} rounded-xl items-center justify-center w-full h-[55px]`}
//                   disabled={disable}
//                 >
//                   <Text className="text-white font-bold text-[20px]">Login</Text>
//                 </TouchableOpacity>

//                 <View className="flex-row mt-[5%]">
//                   <Text>Don't have an account?</Text>
//                   <TouchableOpacity onPress={() => navigation.replace('Register')}>
//                     <Text className="text-[#8D9AF0] ml-[10px]">Sign Up</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </ScrollView>
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// export default Login;