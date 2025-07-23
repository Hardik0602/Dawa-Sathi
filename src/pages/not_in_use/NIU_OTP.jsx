// import React, { useRef, useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
// const Number = ({ number }) => {
//   return (
//     <View>
//       <Text className="text-[18px] font-bold text-[#727272]">We'll text you on {number}</Text>
//     </View>
//   );
// };
// const OTPInput = ({ otp, setOtp }) => {
//   const inputRef = useRef(null);
//   const handleChange = (text) => {
//     const clean = text.replace(/[^0-9]/g, '').slice(0, 4);
//     setOtp(clean);
//   };
//   const focusInput = () => inputRef.current?.focus();
//   const renderDots = () => {
//     const digits = otp.split('');
//     return [0, 1, 2, 3].map((i) => {
//       const filled = !!digits[i];
//       return (
//         <View key={i} className="w-[60px] h-[60px] items-center justify-center">
//           {filled ? (
//             <Text className="text-[36px] font-bold text-black">{digits[i]}</Text>
//           ) : (
//             <View className="w-[27px] h-[27px] rounded-full bg-[#E2E1F3]" />
//           )}
//         </View>
//       );
//     });
//   };
//   return (
//     <View className="w-full items-center">
//       <TouchableWithoutFeedback onPress={focusInput}>
//         <View className="flex-row justify-center mt-2">{renderDots()}</View>
//       </TouchableWithoutFeedback>
//       <TextInput
//         ref={inputRef}
//         value={otp}
//         onChangeText={handleChange}
//         keyboardType="number-pad"
//         maxLength={4}
//         style={{ position: 'absolute', opacity: 0 }}
//         autoFocus
//       />
//     </View>
//   );
// };
// const OTP = () => {
//   const [otp, setOtp] = useState('');
//   return (
//     <View className="flex-1 justify-center items-center bg-white">
//       <View className="mb-20 items-center">
//         <Text className="text-[35px] font-bold text-black mb-[5px]">Verify your Number</Text>
//         <Number number={'08******27'} />
//       </View>
//       <View className="items-center">
//         <OTPInput otp={otp} setOtp={setOtp} />
//         <TouchableOpacity onPress={() => setOtp('')}>
//           <Text className="mt-10 text-[18px] text-[#9838CD]">Send me a new code</Text>
//         </TouchableOpacity>
//       </View>
//       <View className="mt-12 w-2/4">
//         <TouchableOpacity className="bg-[#AB33ED] py-[10px] rounded-xl mb-[50px]">
//           <Text className="text-white font-bold text-center text-[20px]">Continue</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// export default OTP;