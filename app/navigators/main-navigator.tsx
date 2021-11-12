/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  HomeScreen,
  SettingsScreen,
  ProfileScreen,
  FindAChemistScreen,
  SettingsAccountDetailsUserScreen,
  SettingsAccountDetailsPatientsScreen,
  ShoppingCartScreen,
  OrderDetailsScreen,
  OrderBookingScreen,
  OrderConfirmScreen,
} from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

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
  profile: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Tab = createBottomTabNavigator()
const ProfileStack = createStackNavigator()
const HomeStack = createStackNavigator()
const PrescriptionStack = createStackNavigator()
const OrderStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen name="findAChemist" component={FindAChemistScreen} />
      <HomeStack.Screen name="shoppingCart" component={ShoppingCartScreen} />
      <HomeStack.Screen name="orderBooking" component={OrderBookingScreen} />
      <HomeStack.Screen name="orderDetails" component={OrderDetailsScreen} />
      <HomeStack.Screen name="orderConfirm" component={OrderConfirmScreen} />
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="profile" component={ProfileScreen} />
      <ProfileStack.Screen name="settings" component={SettingsScreen} />
      <ProfileStack.Screen name="user" component={SettingsAccountDetailsUserScreen} />
      <ProfileStack.Screen name="patient" component={SettingsAccountDetailsPatientsScreen} />
    </ProfileStack.Navigator>
  )
}

const PrescriptionStackScreen = () => {
  return (
    <PrescriptionStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </PrescriptionStack.Navigator>
  )
}

export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStackScreen} />
      <Tab.Screen name="prescription" component={PrescriptionStackScreen} />
      <Tab.Screen name="profile" component={ProfileStackScreen} />
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
