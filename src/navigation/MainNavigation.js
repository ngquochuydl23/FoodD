import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import { useSelector } from "react-redux";

export default function MainNavigation() {
  const state = useSelector((state) => state.user);
  const isLoggedIn = true;
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      {!state.isLoggedIn ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
}
