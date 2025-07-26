import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import Register from './src/pages/register/Register';
import Login from './src/pages/login/Login';
import Welcome from './src/pages/welcome/Welcome';
import Forgetpass from './src/pages/forgetpass/Forgetpass';
import OTP from './src/pages/otp/OTP';
import Name from './src/pages/name/Name';
import Email from './src/pages/email/Email';
import Gender from './src/pages/gender/Gender';
import Location from './src/pages/location/Location';
import Age from './src/pages/age/Age';
import StartUp from './src/pages/startup/Startup';
import AllRoutes from './src/navigation/AllRoutes';
import MainTab from './src/navigation/MainTab';
import Profile from './src/pages/profile/Profile';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

// const App = () => {
//   return (
//     <View className="h-full">
//       <AllRoutes />
//       {/* <Register /> */}
//       {/* <Login /> */}
//       {/* <Welcome /> */}
//       {/* <Forgetpass /> */}
//       {/* <OTP /> */}
//       {/* <Name /> */}
//       {/* <Email /> */}
//       {/* <Gender /> */}
//       {/* <Location /> */}
//       {/* <Age /> */}
//       {/* <StartUp/> */}
//     </View>
//   )
// }

// const App = () => {
//   const [showStartup, setShowStartup] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowStartup(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);
//   return showStartup ? <StartUp /> : <AllRoutes />;
// }

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
          <Stack.Screen name='StartUp' component={StartUp} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Forgetpass' component={Forgetpass} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Name' component={Name} />
          <Stack.Screen name='Email' component={Email} />
          <Stack.Screen name='Welcome' component={Welcome} />
          <Stack.Screen name='OTP' component={OTP} />
          <Stack.Screen name='Gender' component={Gender} />
          <Stack.Screen name='Location' component={Location} />
          <Stack.Screen name='Age' component={Age} />
          <Stack.Screen name='MainTab' component={MainTab} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;