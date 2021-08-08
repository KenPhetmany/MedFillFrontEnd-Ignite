/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import  {HomeScreen, SettingsScreen, ProfileScreen, ShoppingCartScreen, PrescribedOrdersScreen, ContactUsScreen, AddAPatientScreen}  from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { FaqScreen } from './../screens/faq/faq-screen';
import { FindAChemistScreen } from './../screens/find-a-chemist/find-a-chemist-screen';


/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefind`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  welcome: undefined
  home: undefined
  profile: undefined
  shoppingCart: undefined
  settings: undefined
  faq: undefined
  contactUs: undefined
  presciptionOrders: undefined 
  findAChemist: undefined
  addAPatient: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();


const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
    <ProfileStack.Screen name="profile" component={ProfileScreen}/>
    <ProfileStack.Screen name="findAChemist" component={FindAChemistScreen}/>
    <ProfileStack.Screen name="prescriptionOrders" component={PrescribedOrdersScreen}/>
    <ProfileStack.Screen name="settings" component={SettingsScreen}/>
    <ProfileStack.Screen name="faq" component={FaqScreen}/>
    <ProfileStack.Screen name="contactUs" component={ContactUsScreen}/>
  </ProfileStack.Navigator>
    )
}

const HomeStackScreen = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={HomeScreen}/>
  </HomeStack.Navigator>
    )
}

export const MainNavigator = () => {
  return (
      <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStackScreen}/>
      <Tab.Screen name="findAChemist" component={FindAChemistScreen}/>
      <Tab.Screen name="addAPatient" component={AddAPatientScreen}/>
    </Tab.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
