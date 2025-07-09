// src/navigation/AllRoutes.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './MainTab';
import AuthStack from './AuthStack';


const AllRoutes = () => {
  const isLoggedIn = true; // Replace with real auth check

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AllRoutes;
