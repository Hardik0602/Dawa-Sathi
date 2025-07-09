// src/navigation/AuthStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Forgetpass from '../pages/forgetpass/Forgetpass';
import Name from '../pages/name/Name';
import Email from '../pages/email/Email';
import Gender from '../pages/gender/Gender';
import Location from '../pages/location/Location';
import Age from '../pages/age/Age';
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Forgetpass" component={Forgetpass} />
    <Stack.Screen name="Name" component={Name} />
    <Stack.Screen name="Email" component={Email} />
    <Stack.Screen name="Gender" component={Gender} />
    <Stack.Screen name="Location" component={Location} />
    <Stack.Screen name="Age" component={Age} />
  </Stack.Navigator>
);

export default AuthStack;
