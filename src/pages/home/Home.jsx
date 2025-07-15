import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import user from '../../../images/user.png'
import check_mark from '../../../images/check_mark.png'
import fire_logo from '../../../images/fire_logo.png'
import a from '../../../images/A.png'
import e from '../../../images/E.png'
const Hello = ({ name, picture }) => {
  return (
    <View className='flex-row'>
      <View className='flex-1 justify-center p-[1%]'>
        <Text className='text-white text-[26px] font-bold mb-[3%]'>Hello, {name}</Text>
        <Text className='text-white text-[14px] font-bold'>let's make your taking pills easy..!</Text>
      </View>
      <View className='w-[5%]' />
      <View>
        <TouchableOpacity className='items-center justify-center w-[70px] h-[70px]'>
          <View className='bg-white rounded-full w-full h-full'>
            <Image
              source={`${picture}`}
              className='w-full h-full'
              resizeMode='contain'
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};
const Today = ({ value }) => {
  return (
    <View>
      <Text className='text-black text-[17px] font-bold'>Today's Adherence</Text>
      <Text className='text-[#7034A4] text-[59px] font-bold'>{value}%</Text>
    </View>
  )
};
const Yesterday = ({ value }) => {
  return (
    <View className='flex-row items-center'>
      <Text className='text-black text-[15px] font-bold'>Yesterday: </Text>
      <Text className='text-[#7034A4] text-[15px] font-bold'>{value}%</Text>
    </View>
  )
};
const Today_Progress = ({ progress }) => {
  return (
    <View className="h-[25px] bg-[#E2E1F3] w-[100%] rounded-full mt-[5%]">
      <View className={`h-full ${progress} bg-[#AB33ED] rounded-full`} />
    </View>
  )
};
const Today_Medicine = () => {
  return (
    <View className='flex-row items-center'>
      <Text className='text-black text-[20px] font-bold mr-[15%]'>My Medication</Text>
      <View className='bg-[#7034A4] h-[30px] w-[30px] rounded-lg justify-center items-center mr-4'>
        <Image
          source={check_mark}
          resizeMode='contain'
          className='h-[60%] w-[60%]' />
      </View>
      <View className='bg-[#7034A4] h-[30px] w-[30px] rounded-lg justify-center items-center mr-4'>
        <Image
          source={a}
          resizeMode='contain'
          className='h-[60%] w-[60%]' />
      </View>
      <View className='bg-[#7034A4] h-[30px] w-[30px] rounded-lg justify-center items-center'>
        <Image
          source={e}
          resizeMode='contain'
          className='h-[60%] w-[60%]' />
      </View>
    </View>
  )
};
const Streak = ({ value }) => {
  return (
    <View>
      <Text className='text-black text-[17px] font-bold mb-1'>{value} days streak, Keep up!!!</Text>
      <Text className='text-[#A531E9] text-[15px] font-bold'>Way to go!</Text>
    </View>
  )
};
const Days = ({ color, margin, day, marginText }) => {
  return (
    <View className={`items-center ${margin}`}>
      <View className={`${color} h-[23px] w-[23px] rounded-full`} />
      <Text className={`text-[#A0A0A0] text-[15px] ${marginText} font-bold`}>{day}</Text>
    </View>
  )
};
const Home = () => {
  const [weekDates, setWeekDates] = useState([]);
  const [monthLabel, setMonthLabel] = useState('');
  useEffect(() => {
    const startOfWeek = moment().startOf('isoWeek');
    const newWeek = Array.from({ length: 7 }, (_, i) => {
      const day = moment(startOfWeek).add(i, 'days');
      return {
        date: day.format('YYYY-MM-DD'),
        label: day.format('ddd'),
        number: day.format('D'),
      };
    });
    setWeekDates(newWeek);
    setMonthLabel(startOfWeek.format('MMMM'));
  }, []);
  return (
    <View className='flex-1 bg-[#A532E9]'>
      <View className='h-[86%] items-center justify-center'>
        <View className='w-[90%]'>
          <View className='my-[5%] h-[10%]'>
            <Hello name={'User'} picture={user} />
          </View>
          <View className='bg-white rounded-3xl h-[17%] p-[1%] items-center justify-center mb-[5%]'>
            <Text className='text-[20px] font-bold text-[#9838CD] mb-[3%]'>{monthLabel}</Text>
            <View className='flex-row justify-between w-full'>
              {weekDates.map((day) => (
                <View
                  key={day.date}
                  className={`items-center p-[3%] rounded-full ${day.date === moment().format('YYYY-MM-DD') ? 'bg-[#AB33ED]' : 'bg-transparent'}`}>
                  <Text className={`text-[15px] font-bold ${day.date === moment().format('YYYY-MM-DD') ? 'text-white' : 'text-[#171D1B]'}`}>{day.number}</Text>
                  <Text className={`text-[15px] font-bold ${day.date === moment().format('YYYY-MM-DD') ? 'text-white' : 'text-[#A531E9]'}`}>{day.label}</Text>
                </View>
              ))}
            </View>
          </View>
          <View className='h-[40%] mb-[5%]'>
            <LinearGradient
              // colors={['#EEAECA', '#FFFFFF', '#EEAECA']}
              colors={['#FBC2EB', '#FFFFFF', '#FBC2EB']}
              locations={[0.1, 0.5, 0.9]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              className='h-[100%] w-[100%] items-start justify-center rounded-3xl p-[5%]'>
              <Today value={35} />
              <Yesterday value={0} />
              <Today_Progress progress={'w-[30%]'} />
              <View className='h-[1%] w-[100%] bg-pink-400 my-[5%] rounded-full' />
              <Today_Medicine />
            </LinearGradient>
          </View>
          <View className='h-[0.5%] bg-[#DB9DFFDB] rounded-full mb-[5%]' />
          <View className='h-[20%] bg-white rounded-3xl flex-row items-center p-[1%]'>
            <View className='w-[30%] items-center justify-center'>
              <Image
                source={fire_logo}
                resizeMode='contain'
                className='h-[100%] w-[120%]' />
            </View>
            <View className='w-[5%]' />
            <View className='w-[60%]'>
              <Streak value={14} />
              <View className="h-[1%] w-[100%] bg-[#DB9DFFDB] my-[5%] rounded-full" />
              <View className='flex-row justify-center'>
                <Days marginText={'mt-[20%]'} margin={'mr-[5%]'} day={'M'} color={'bg-[#FA4F00]'} />
                <Days marginText={'mt-[20%]'} margin={'mr-[5%]'} day={'T'} color={'bg-[#FA4F00]'} />
                <Days marginText={'mt-[20%]'} margin={'mr-[5%]'} day={'W'} color={'bg-[#FA4F00]'} />
                <Days marginText={'mt-[20%]'} margin={'mr-[5%]'} day={'T'} color={'bg-[#FA4F00]'} />
                <Days marginText={'mt-[20%]'} margin={'mr-[5%]'} day={'F'} color={'bg-[#CFCFCF]'} />
                <Days marginText={'mt-[20%]'} margin={'mr-[5%]'} day={'S'} color={'bg-[#CFCFCF]'} />
                <Days marginText={'mt-[20%]'} day={'S'} color={'bg-[#CFCFCF]'} />
              </View>
            </View>
            <View className='w-[5%]' />
          </View>
        </View>
      </View>
    </View>
  )
}
export default Home;





// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import moment from 'moment';
// import LinearGradient from 'react-native-linear-gradient';
// import user from '../../../images/user.png'
// import check_mark from '../../../images/check_mark.png'
// import fire_logo from '../../../images/fire_logo.png'
// const Hello = ({ name, picture }) => {
//   return (
//     <View className='flex-row mb-5'>
//       <View className='flex-col mr-[55px]'>
//         <Text className='text-white text-[30px] font-bold'>Hello, {name}</Text>
//         <Text className='text-white text-[15px] font-bold'>lets make your taking pills easy..!</Text>
//       </View>
//       <TouchableOpacity>
//         <View className='bg-white rounded-full w-[60px] items-center'>
//           <Image source={`${picture}`} className='h-[60px] w-[50px]' />
//         </View>
//       </TouchableOpacity>
//       {/* <View className='bg-white rounded-full w-[60px] items-center'>
//         <Image source={`${picture}`} className='h-[60px] w-[50px]' />
//       </View> */}
//     </View>
//   )
// }
// const Today = ({ value }) => {
//   return (
//     <View>
//       <Text className='text-black text-[17px] font-bold'>Today's Adherence</Text>
//       <Text className='text-[#7034A4] text-[50px] font-bold'>{value}%</Text>
//     </View>
//   )
// }
// const Yesterday = ({ value }) => {
//   return (
//     <View className='flex-row items-center mb-4'>
//       <Text className='text-black text-[17px] font-bold'>Yesterday: </Text>
//       <Text className='text-[#7034A4] text-[20px] font-bold'>{value}%</Text>
//     </View>
//   )
// }
// const Today_Progress = ({ progress }) => {
//   return (
//     <View className="h-[25px] mb-4 bg-[#E2E1F3] w-[100%] rounded-full">
//       <View className={`h-full ${progress} bg-[#AB33ED] rounded-full`} />
//     </View>
//   )
// }
// const Today_Medicine = () => {
//   return (
//     <View className='flex-row items-center'>
//       <Text className='text-black text-[20px] font-bold mr-10'>My Medication</Text>
//       <View className='bg-[#7034A4] h-[30px] w-[30px] rounded-lg justify-center items-center mr-4'>
//         <Image source={check_mark} />
//       </View>
//       <View className='bg-[#7034A4] h-[30px] w-[30px] rounded-lg justify-center items-center mr-4'>
//         <Text className='text-white text-[20px] font-bold'>A</Text>
//       </View>
//       <View className='bg-[#7034A4] h-[30px] w-[30px] rounded-lg justify-center items-center'>
//         <Text className='text-white text-[20px] font-bold'>E</Text>
//       </View>
//     </View>
//   )
// }
// const Streak = ({ value }) => {
//   return (
//     <View>
//       <Text className='text-black text-[17px] font-bold mb-1'>{value} days streak, Keep up!!!</Text>
//       <Text className='text-[#A531E9] font-bold'>Way to go!</Text>
//     </View>
//   )
// }
// const Days = ({ color, margin, day, marginText }) => {
//   return (
//     <View className={`items-center ${margin}`}>
//       <View className={`${color} h-[23px] w-[23px] rounded-full`} />
//       <Text className={`text-[#A0A0A0] ${marginText} font-bold`}>{day}</Text>
//     </View>
//   )
// }
// const Home = () => {
// const [weekDates, setWeekDates] = useState([]);
// const [monthLabel, setMonthLabel] = useState('');
// useEffect(() => {
//   const startOfWeek = moment().startOf('isoWeek');
//   const newWeek = Array.from({ length: 7 }, (_, i) => {
//     const day = moment(startOfWeek).add(i, 'days');
//     return {
//       date: day.format('YYYY-MM-DD'),
//       label: day.format('ddd'),
//       number: day.format('D'),
//     };
//   });
//   setWeekDates(newWeek);
//   setMonthLabel(startOfWeek.format('MMMM'));
// }, []);
//   return (
//     <View className="flex-1 justify-center items-center bg-[#A532E9]">
// <Hello name={'User'} picture={user} />
// <View className="bg-white w-[90%] rounded-3xl h-[120px] p-2 items-center justify-center mb-5">
//   <Text className="text-[18px] font-bold text-[#9838CD] mb-3">{monthLabel}</Text>
//   <View className="flex-row justify-between w-full">
//     {weekDates.map((day) => (
//       <View
//         key={day.date}
//         className={`items-center px-2 py-2 rounded-full ${day.date === moment().format('YYYY-MM-DD') ? 'bg-[#AB33ED]' : 'bg-transparent'}`}>
//         <Text className={`text-lg font-bold ${day.date === moment().format('YYYY-MM-DD') ? 'text-white' : 'text-[#171D1B]'}`}>{day.number}</Text>
//         <Text className={`text-sm font-bold ${day.date === moment().format('YYYY-MM-DD') ? 'text-white' : 'text-[#A531E9]'}`}>{day.label}</Text>
//       </View>
//     ))}
//   </View>
// </View>
// <View className='w-[90%] h-[260px]'>
//   <LinearGradient
//     // colors={['#EEAECA', '#FFFFFF', '#EEAECA']}
//     colors={['#FBC2EB', '#FFFFFF', '#FBC2EB']}
//     locations={[0.1, 0.5, 0.9]}
//     start={{ x: 0, y: 1 }}
//     end={{ x: 1, y: 0 }}
//     className='h-[100%] w-[100%] items-start justify-center rounded-3xl p-5'>
//     <Today value={35} />
//     <Yesterday value={0} />
//     <Today_Progress progress={'w-[30%]'} />
//     <View className="h-[2px] w-[100%] bg-pink-400 mb-4 rounded-full" />
//     <Today_Medicine />
//   </LinearGradient>
// </View>
// <View className="h-[2px] w-[90%] bg-[#DB9DFFDB] rounded-full my-5" />
//       <View className='w-[90%] h-[140px] bg-white mb-16 rounded-3xl flex-row items-center'>
//         <Image source={fire_logo} />
//         <View>
//           <Streak value={14} />
//           <View className="h-[1px] w-[100%] bg-[#DB9DFFDB] my-3 rounded-full" />
//           <View className='flex-row'>
//             <Days marginText={'mt-1'} margin={'mr-2'} day={'M'} color={'bg-[#FA4F00]'} />
//             <Days marginText={'mt-1'} margin={'mr-2'} day={'T'} color={'bg-[#FA4F00]'} />
//             <Days marginText={'mt-1'} margin={'mr-2'} day={'W'} color={'bg-[#FA4F00]'} />
//             <Days marginText={'mt-1'} margin={'mr-2'} day={'T'} color={'bg-[#FA4F00]'} />
//             <Days marginText={'mt-1'} margin={'mr-2'} day={'F'} color={'bg-[#CFCFCF]'} />
//             <Days marginText={'mt-1'} margin={'mr-2'} day={'S'} color={'bg-[#CFCFCF]'} />
//             <Days marginText={'mt-1'} day={'S'} color={'bg-[#CFCFCF]'} />
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }
// export default Home;