import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Pressable, View, TouchableWithoutFeedback } from 'react-native';
import Home from '../pages/home/Home';
import Schedules from '../pages/schedules/Schedules';
import Notifications from '../pages/notifications/Notifications';
import home_icon from '../../images/home_icon.png';
import schedule_icon from '../../images/schedule_icon.png';
import notification_icon from '../../images/notification_icon.png';
const Tab = createBottomTabNavigator();
// const NoFeedbackButton = (props) => (
//   <Pressable
//     android_ripple={null}
//     style={{ flex: 1 }}
//     pressRetentionOffset={0}
//     hitSlop={0}
//     {...props} />
// );
const NoFeedbackButton = ({ children, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>{children}</View>
  </TouchableWithoutFeedback>
);
const MainTab = () => (
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
          bottom: '5%',
          marginLeft: '10%',
          borderRadius: 30,
          height: 60,
          backgroundColor: 'white',
          shadowColor: '#A532E9'
        },
        tabBarIcon: ({ focused }) => (
          <Image
            source={home_icon}
            style={{
              marginTop: '50%',
              width: 40,
              height: 40,
              tintColor: focused ? null : '#1C1C1E',
              resizeMode: 'contain'
            }} />
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
          bottom: '5%',
          marginLeft: '10%',
          borderRadius: 30,
          height: 60,
          backgroundColor: '#A531E9',
          shadowColor: 'white'
        },
        tabBarIcon: ({ focused }) => (
          <Image
            source={schedule_icon}
            style={{
              marginTop: '50%',
              width: 40,
              height: 40,
              tintColor: focused ? 'white' : '#1C1C1E',
              resizeMode: 'contain'
            }} />
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
          bottom: '5%',
          marginLeft: '10%',
          borderRadius: 30,
          height: 60,
          backgroundColor: '#A531E9',
          shadowColor: 'white'
        },
        tabBarIcon: ({ focused }) => (
          <Image
            source={notification_icon}
            style={{
              marginTop: '50%',
              width: 40,
              height: 40,
              tintColor: focused ? 'white' : '#1C1C1E',
              resizeMode: 'contain'
            }} />
        ),
      }} />
  </Tab.Navigator>
);
export default MainTab;