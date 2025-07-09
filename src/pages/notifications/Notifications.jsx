import React from 'react';
import { View, Text } from 'react-native';
const Notification = ({ title, message, title_color }) => {
    return (
        <View className='p-1 bg-[#FFFFFF] h-[13%] w-[90%] mb-3 shadow-md shadow-black justify-center items-center flex-col rounded-xl'>
            <Text className={`text-[${title_color}] font-bold text-[21px]`}>{title}</Text>
            <Text className='text-[#686868] font-bold text-[13px]'>{message}</Text>
        </View>
    )
}
const Notifications = () => {
    return (
        <View className='flex-1 items-center bg-white justify-center'>
            <View className='flex-1 items-center justify-center absolute top-0 bg-[#A531E9] w-[110%] h-[25%] rounded-b-[300px]'>
                <Text className='text-white text-[35px] font-bold'>Notification</Text>
            </View>
            <View className='mt-[23%] w-[100%] items-center justify-center'>
                <Text className='text-[#A531E9] text-[35px] font-bold mb-3'>Today</Text>
                <Notification title={'ALERT !'} title_color={'#FF0000'} message={'Today morning dose is not taken yet .'} />
                <Notification title={'Hey User !'} title_color={'#222222'} message={'Today morning dose is taken late at 9:25 AM .'} />
                <Notification title={'Hey User !'} title_color={'#FF0000'} message={"It's time to take your medicine - your health matters!"} />
                <Notification title={'Alert !'} title_color={'#FF0000'} message={"Your medicine schedule is empty - let's add your dose"} />
                <Notification title={'Hey User !'} title_color={'#FF0000'} message={'Skipping doses can lead to complications. Stay disciplined'} />
            </View>
        </View>
    );
};
export default Notifications;