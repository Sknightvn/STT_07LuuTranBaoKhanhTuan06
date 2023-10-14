import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import screen1 from './screens/screen1';
import screen2 from './screens/screen2';

export default function App() {
  const Stack = createStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='screen1' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Home' component={screen1} />
        <Stack.Screen name='Detail' component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
