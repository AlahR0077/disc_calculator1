import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import History from "./components/History";


const Stack = createStackNavigator();
function App() {  
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					title: "Discount calculator",          
          headerTitleAlign:"left",
				
          headerStyle: {
						backgroundColor: "brown",
					},headerTintColor: "white",
				}}
			>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="History" component={History} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
