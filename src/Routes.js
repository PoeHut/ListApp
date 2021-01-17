import 'react-native-gesture-handler';
import React, {useState}  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen  from './screens/DetailScreen'
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

const Main = () => {

    const horizontalAnimation = {
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
    };

    return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions = {{
            headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen}  
            options={horizontalAnimation}
        />
        <Stack.Screen name="Search" 
            component={SearchScreen}
            options={horizontalAnimation}
        />
      </Stack.Navigator>
    )
}

const Routes = () => {

const [status, setStatus] = useState(null)

AsyncStorage.getItem('DoneOnboarding')
                      .then(value => setStatus(value))
                      .catch(e => console.log(e)) 
  
  if(status == "done") {
              return (
                  <NavigationContainer>
                      <Stack.Navigator
                          screenOptions = {{
                              headerShown: false,
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
