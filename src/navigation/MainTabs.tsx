// src/navigation/MainTabs.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/candidate/HomeScreen";
import ExploreScreen from "../screens/candidate/ExploreScreen";
import ApplicationsScreen from "../screens/candidate/ApplicationsScreen";

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Applications: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Applications" component={ApplicationsScreen} />
    </Tab.Navigator>
  );
}
