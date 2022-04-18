import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DebitCardIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../theme/Colors'

/* -------- Screens ------- */

import DebitCardScreen from '../screens/DebitCardScreen';
import WeeklySpendScreen from '../screens/WeeklySpendScreen';

const HomeStack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AppNavigator = () => {
    return <AppHomeStack />
};
  
/* -------- End App Auth Stack Navigator ------- */

const HomeTabScreenStack = (navigationOptions) => (
    <HomeStack.Navigator
      initialRouteName="DebitCard"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <HomeStack.Screen name="DebitCard" component={DebitCardScreen} />
    </HomeStack.Navigator>
);
  

/* -------- Bottom Tab Navigator ------- */

const BottomTabNavigator = (navigationOptions) => (
    <BottomTabs.Navigator
      initialRouteName="DebitCard"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: Colors.MAIN,
        inactiveTintColor: 'gray',
        showLabel: true,
        keyboardHidesTabBar: true,
     }}>
      <BottomTabs.Screen
        name="DebitCard"
        component={HomeTabScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <DebitCardIcon name="credit-card" color={color} size={hp('4%')} />
          ),
        }}
      />
    </BottomTabs.Navigator>
);

function AppHomeStack() {
    return (
      <NavigationContainer>
        <HomeStack.Navigator
          initialRouteName={'DebitCard'}
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          <HomeStack.Screen name="DebitCard" component={BottomTabNavigator} />
          <HomeStack.Screen name="WeeklySpend" component={WeeklySpendScreen} />
        </HomeStack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigator;