import React from "react";
import Main from "./components/Main";
import Hotel from "./components/Hotel";
import Room from "./components/Room";
import Ok from "./components/Ok";
import No from "./components/No";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export const AppContext = React.createContext();

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <AppContext.Provider
      value={
        {}
      }
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{title: 'Головна'}}          
          />
          <Stack.Screen
            name="Hotel"
            component={Hotel}
            options={{title: 'Готель'}}
          />
          <Stack.Screen
            name="Room"
            component={Room}
            options={{title: 'Кімната'}}
          />
          <Stack.Screen
            name="Ok"
            component={Ok}
            options={{title: 'Успішна операція'}}
          />
          <Stack.Screen
            name="No"
            component={No}
            options={{title: 'Операція заблокована'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};
