import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { routes } from "../utils";
import {
  LoginScreen,
  SignUpScreen,
  WelcomeScreen,
  HomeScreen,
  OffersScreen,
  SettingsScreen,
} from "../screens";

export default function AuthNavigation() {
  // const isNewUser = true;

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.WELCOME_SCREEN} component={WelcomeScreen} />
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={routes.SIGNUP_SCREEN} component={SignUpScreen} />
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={routes.OFFERS_SCREEN} component={OffersScreen} />
      <Stack.Screen name={routes.SETTINGS_SCREEN} component={SettingsScreen} />
    </Stack.Navigator>
  );
}
