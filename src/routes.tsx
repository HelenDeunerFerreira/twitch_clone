import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Following from "./pages/Following";
import ComingSoon from "./pages/ComingSoon";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./styles/colors";

// const TabBar = createBottomTabNavigator();
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const TabBar = createMaterialBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <TabBar.Navigator
      initialRouteName="Following"
      barStyle={{
        height: 60,
        backgroundColor: "#000014",
        borderTopWidth: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TabBar.Screen
        name="Following"
        component={Following}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="md-heart"
                size={20}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />

      <TabBar.Screen
        name="Discover"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="compass-outline"
                size={20}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />

      <TabBar.Screen
        name="Browse"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="md-browsers"
                size={20}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />

      <TabBar.Screen
        name="Esports"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="trophy-outline"
                size={20}
                color={focused ? colors.purple : colors.black}
              />
            );
          },
        }}
      />
    </TabBar.Navigator>
  </NavigationContainer>
);

export default Routes;
