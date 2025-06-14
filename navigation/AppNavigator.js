import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import LearnerDashboard from '../screens/LearnerDashboard';
import TutorDashboard from '../screens/TutorDashboard';
import CreateTutorProfile from '../screens/CreateTutorProfile';
import TutorProfileView from '../screens/TutorProfileView';
import EditTutorOptionsScreen from '../screens/EditTutorOptionsScreen';

import { AppProvider } from '../context/AppContext'; // make sure this file exists

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="LearnerDashboard" component={LearnerDashboard} />
          <Stack.Screen name="TutorDashboard" component={TutorDashboard} />
          <Stack.Screen name="CreateTutorProfile" component={CreateTutorProfile} />
          <Stack.Screen name="TutorProfileView" component={TutorProfileView} />
          <Stack.Screen name="EditTutorOptions" component={EditTutorOptionsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
