import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen.tsx";
import NotificationScreen from "./NotificationScreen.tsx";
import CartScreen from "./CartScreen.tsx";
import AnimalsSreen from "./AnimalsScreen.tsx";
import SidebarScreen from "./SidebarScreen.tsx";
import RiwayatScreen from "./RiwayatScreen.tsx";
import PenitipanLengkapScreen from "./PenitipanLengkapScreen";
import PenitipanCreateScreen from "./PenitipanCreateScreen";
import PenitipanDetailScreen from "./PenitipanDetailScreen";
import PenitipanEditScreen from "./PenitipanEditScreen";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Animals" component={AnimalsSreen} />
        <Stack.Screen name="Sidebar" component={SidebarScreen} />
        <Stack.Screen name="Riwayat" component={RiwayatScreen} />
        <Stack.Screen name="PenitipanEdit"component={PenitipanEditScreen} />
       <Stack.Screen name="PenitipanCreate"component={PenitipanCreateScreen} /> 
       <Stack.Screen name="PenitipanDetail"component={PenitipanDetailScreen} /> 
       <Stack.Screen name="PenitipanLengkap"component={PenitipanLengkapScreen} /> 
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
