import { Text, View } from "react-native";

import React from "react";
import Todo from "../Screens/Todo";
import TodoDetail from "../Screens/TodoDetail";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: "#024170",
          fontSize: 35,
        },
      }}
    >
      <Stack.Screen
        name="todo"
        component={Todo}
        options={{ title: "Todo List" }}
      />
      <Stack.Screen
        name="detail"
        component={TodoDetail}
        options={{ title: "Detail" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
