import { StatusBar } from "expo-status-bar";

import { MainNavigation } from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/reduxStore";

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
      <StatusBar style="auto" />
    </ Provider>
  );
}
