// import React, { useState } from 'react';
// import { View, TextInput, Text } from 'react-native';
// // import { twMerge } from 'tailwind-merge';

// const InputField = ({ 
//   label, 
//   value, 
//   onChangeText, 
//   placeholder = '', 
//   status, 
//   message 
// }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   const baseColor = status === 'error' ? 'red' : status === 'success' ? 'green' : 'gray';
//   const borderColor = `border-${baseColor}-600`;
//   const textColor = `text-${baseColor}-600`;
//   const darkTextColor = `dark:text-${baseColor}-500`;

//   return (
//     <View className="mb-4">
//       <View className="relative">
//         <TextInput
//           value={value}
//           onChangeText={onChangeText}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           // keyboardType="phone-pad"
//           placeholder=" "
//           // className={twMerge(
//           //   `block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border ${borderColor} appearance-none dark:text-white dark:${borderColor} dark:focus:${borderColor} focus:outline-none focus:ring-0 focus:${borderColor}`
//           // )}
//         />
//         <Text
//           // className={twMerge(
//           //   `absolute text-sm ${textColor} ${darkTextColor} duration-300 bg-white dark:bg-gray-900 px-1`,
//           //    value
//           //     ? '-top-2 left-2 text-xs scale-90'
//           //     : 'top-4 left-2 text-sm'
//           // )}
//         >
//           {label}
//         </Text>
//       </View>

//       {message && (
//         <Text className={`mt-2 text-xs ${textColor} dark:${darkTextColor}`}>
//           <Text className="font-medium">
//             {status === 'success' ? 'Well done!' : status === 'error' ? 'Oh, snapp!' : ''}
//           </Text>{' '}
//           {message}
//         </Text>
//       )}
//     </View>
//   );
// };

// export default InputField;


import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputField = ({ label, value, onChangeText, status, message }) => {
  const getBorderColor = () => {
    switch (status) {
      case 'error':
        return 'border-red-500';
      case 'success':
        return 'border-green-500';
      default:
        return 'border-gray-300';
    }
  };

  return (
    <View className="mb-4 w-full">
      {label && <Text className="mb-1 font-semibold text-gray-700">{label}</Text>}
      <TextInput
        className={`border rounded-lg px-3 py-2 ${getBorderColor()}`}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
      />
      {message && (
        <Text
          className={`mt-1 text-sm ${
            status === 'error' ? 'text-red-500' : status === 'success' ? 'text-green-500' : 'text-gray-500'
          }`}>
          {message}
        </Text>
      )}
    </View>
  );
};

export default InputField;
