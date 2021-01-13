import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen  from './screens/DetailScreen'
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

const Main = () => {
    const config = {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };

    return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions = {{
            headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen}  />
        <Stack.Screen name="Search" component={SearchScreen} 
                options={{
                    transitionSpec: {
                    open: config,
                    close: config,
                },
            }}
        />
      </Stack.Navigator>
    )
  }

const Routes = () => {
    //check authuser or not
    try {
        const value = AsyncStorage.getItem('DoneOnboarding')
        if(value !== null) {
            return (
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions = {{
                            headerShown: false
                        }}
                    >
                        <Stack.Screen 
                        name="Main" 
                        component={Main}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            )
        }
      } catch(e) {
        console.log(e)
      }  

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Onboarding"
                screenOptions = {{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen 
                    name="Main" 
                    component={Main}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
