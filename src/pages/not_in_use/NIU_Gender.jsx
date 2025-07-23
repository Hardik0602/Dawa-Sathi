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