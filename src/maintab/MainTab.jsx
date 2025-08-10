import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import Home from '../pages/home/Home';
import Schedules from '../pages/schedules/Schedules';
import Notifications from '../pages/notifications/Notifications';
import home_icon from '../../images/home_icon.png';
import schedule_icon from '../../images/schedule_icon.png';
import notification_icon from '../../images/notification_icon.png';
import Dummy from '../pages/dummy/Dummy';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
const NoFeedbackButton = ({ children, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View className='flex-1 items-center justify-center'>{children}</View>
  </TouchableWithoutFeedback>
);
const MainTab = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'shift',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: () => null,
            tabBarButton: NoFeedbackButton,
            tabBarStyle: {
              position: 'absolute',
              width: '80%',
              bottom: '3%',
              marginLeft: '10%',
              borderRadius: 30,
              height: '8%',
              backgroundColor: 'white',
              shadowColor: '#A532E9'
            },
            tabBarIcon: ({ focused }) => (
              <View className='h-[150%] w-[150%]'>
                <Image
                  source={home_icon}
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: focused ? null : '#1C1C1E',
                    resizeMode: 'contain'
                  }} />
              </View>
            ),
          }} />
        <Tab.Screen
          name="Schedules"
          component={Schedules}
          options={{
            tabBarLabel: () => null,
            tabBarButton: NoFeedbackButton,
            tabBarStyle: {
              position: 'absolute',
              width: '80%',
              bottom: '3%',
              marginLeft: '10%',
              borderRadius: 30,
              height: '8%',
              backgroundColor: '#A531E9',
              shadowColor: '#A532E9'
            },
            tabBarIcon: ({ focused }) => (
              <View className='h-[150%] w-[150%]'>
                <Image
                  source={schedule_icon}
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: focused ? 'white' : '#1C1C1E',
                    resizeMode: 'contain'
                  }} />
              </View>
            ),
          }} />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: () => null,
            tabBarButton: NoFeedbackButton,
            tabBarStyle: {
              position: 'absolute',
              width: '80%',
              bottom: '3%',
              marginLeft: '10%',
              borderRadius: 30,
              height: '8%',
              backgroundColor: '#A531E9',
              shadowColor: '#A532E9'
            },
            tabBarIcon: ({ focused }) => (
              <View className='h-[150%] w-[150%]'>
                <Image
                  source={notification_icon}
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: focused ? 'white' : '#1C1C1E',
                    resizeMode: 'contain'
                  }} />
              </View>
            ),
          }} />
        {/* <Tab.Screen
          name="Dummy"
          component={Dummy}
          options={{
            tabBarLabel: () => null,
            tabBarButton: NoFeedbackButton,
            tabBarStyle: {
              position: 'absolute',
              width: '80%',
              bottom: '3%',
              marginLeft: '10%',
              borderRadius: 30,
              height: '8%',
              backgroundColor: 'white',
              shadowColor: '#A532E9'
            },
            tabBarIcon: ({ focused }) => (
              <View className='h-[150%] w-[150%] bg-slate-400'>
                <Image
                  source={home_icon}
                  style={{
                    width: '100%',
                    height: '100%',
                    tintColor: focused ? null : '#1C1C1E',
                    resizeMode: 'contain'
                  }} />
              </View>
            ),
          }} /> */}
      </Tab.Navigator>
    </View>
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     animation: 'shift',
    //   }}>
    //   <Tab.Screen name="Home" component={Home} options={{
    //     tabBarStyle: {
    //       position: 'absolute',
    //       marginBottom: insets.bottom,
    //     }
    //   }} />
    //   <Tab.Screen name="Schedules" component={Schedules} />
    //   <Tab.Screen name="Notifications" component={Notifications} />
    // </Tab.Navigator>
  );
  // return (
  //   <Tab.Navigator
  //     screenOptions={{
  //       headerShown: false,
  //       animation: 'shift'
  //     }}
  //     options={{
  //       tabBarItemStyle: {
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       },
  //       tabBarLabelStyle: {
  //         marginTop: 0
  //       },
  //       tabBarIconStyle: {
  //         marginTop: 0
  //       }
  //     }}>
  //     <Tab.Screen
  //       name='Home'
  //       component={Home}
  //       options={{
  //         tabBarStyle: {
  //           backgroundColor: 'white',
  //           width: '80%',
  //           marginLeft: '10%',
  //           position: 'absolute',
  //           borderRadius: 30,
  //           bottom: '3%',
  //           shadowColor: '#A532E9'
  //         },
  //         tabBarIcon: ({ focused }) => (
  //           <Image
  //             source={home_icon}
  //             style={{
  //               width: 100,
  //               aspectRatio: 1,
  //               tintColor: focused ? '#A532E9' : 'black'
  //             }} />
  //         ),
  //         tabBarLabel: () => null
  //       }} />
  //     <Tab.Screen
  //       name='Schedules'
  //       component={Schedules}
  //       options={{
  //         tabBarStyle: {
  //           backgroundColor: '#A531E9',
  //           width: '80%',
  //           marginLeft: '10%',
  //           position: 'absolute',
  //           borderRadius: 30,
  //           bottom: '3%',
  //           shadowColor: 'white'
  //         },
  //         tabBarIcon: ({ focused }) => (
  //           <Image
  //             source={schedule_icon}
  //             style={{
  //               width: 100,
  //               aspectRatio: 1,
  //               tintColor: focused ? 'white' : 'black'
  //             }} />
  //         ),
  //         tabBarLabel: () => null
  //       }} />
  //     <Tab.Screen
  //       name='Notifications'
  //       component={Notifications}
  //       options={{
  //         tabBarStyle: {
  //           backgroundColor: '#A531E9',
  //           width: '80%',
  //           marginLeft: '10%',
  //           position: 'absolute',
  //           borderRadius: 30,
  //           bottom: '3%',
  //           shadowColor: 'white'
  //         },
  //         tabBarIcon: ({ focused }) => (
  //           <Image
  //             source={notification_icon}
  //             style={{
  //               width: 100,
  //               aspectRatio: 1,
  //               tintColor: focused ? 'white' : 'black'
  //             }} />
  //         ),
  //         tabBarLabel: () => null
  //       }} />
  //   </Tab.Navigator>
  // );
};
export default MainTab;