// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput } from 'react-native';
// import { io } from 'socket.io-client';
// const socket = io.connect("http://10.0.2.2:3000");
// export default function Home() {
//   const [message, setMessage] = useState('');
//   const [messageReceived, setMessageReceived] = useState('');
//   const sendMessage = () => {
//     if (message.trim()) {
//       // setMessageReceived(message);
//       socket.emit("send_message", { message });
//       setMessage('');
//     }
//   };
//   useEffect(() => {
//     socket.on("received_message", (data) => {
//       setMessageReceived(data.message)
//     });
//     return () => {
//       socket.off("received_message");
//     };
//   }, []);
//   return (
//     <View className="flex-1 justify-center items-center bg-[#F6F6F6]">
//       <View className='w-[70%]'>
//         <TextInput className='border-black border-2' placeholder='message' onChangeText={setMessage} value={message} />
//       </View>
//       <View className="my-12">
//         <TouchableOpacity className="bg-[#AB33ED]" onPress={sendMessage}>
//           <Text className="text-white font-bold text-center text-[20px]">Send Message</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <Text>{messageReceived}</Text>
//       </View>
//     </View>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import { io } from 'socket.io-client';

// const socket = io.connect('http://10.0.2.2:3000'); // Use 10.0.2.2 for Android emulator

// export default function App() {
//   const [message1, setMessage1] = useState('');
//   const [message2, setMessage2] = useState('');

//   useEffect(() => {
//     socket.on('received_message', (data) => {
//       setMessage1(data.messages[0] || '');
//       setMessage2(data.messages[1] || '');
//     });

//     return () => {
//       socket.off('received_message');
//     };
//   }, []);

//   return (
//     <View className="flex-1 justify-center items-center bg-white">
//       <Text className="text-xl font-bold">message 1: {message1}</Text>
//       <Text className="text-xl font-bold">message 2: {message2}</Text>
//     </View>
//   );
// }






import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { io } from 'socket.io-client';

const socket = io.connect('http://10.0.2.2:3000'); // Android emulator

const Notification = ({ title, message, title_color }) => {
  return (
    <View className='px-[3%] py-[3%] m-[5%] bg-[#FFFFFF] w-[90%] shadow-md shadow-black rounded-xl'>
      <Text className='font-bold text-[21px] text-center' style={{ color: title_color }}>{title}</Text>
      <Text className='text-[#686868] font-bold text-[13px] text-center'>{message}</Text>
    </View>
  );
};

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('received_notifications', (data) => {
      setNotifications(data.notifications || []);
    });

    return () => {
      socket.off('received_notifications');
    };
  }, []);

  return (
    <View className="flex-1 bg-white">
      <Text className="text-[30px] font-bold text-center mt-10 text-[#A531E9]">Notifications</Text>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {notifications.map((noti, index) => (
          <Notification
            key={index}
            title={noti.title}
            message={noti.message}
            title_color={noti.title_color}
          />
        ))}
      </ScrollView>
    </View>
  );
}