import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from "react-native";

import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { AppButton } from "../components/Buttons";
import { COLORS, routes } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { api, TypeHTTP } from "../utils/api";
export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [info, setInfo] = useState({
    phone: "",
    passWord: "",
  });
  const Submit = () => {
    if (info.phone === "") {
      Alert.alert("Vui lòng nhập số điện thoại");
      return;
    }
    if (info.passWord === "") {
      Alert.alert("Vui lòng nhập mật khẩu");
      return;
    }
    if (!/^0[0-9]{9}$/.test(info.phone)) {
      Alert.alert("Số điện thoại không hợp lệ");
      return;
    }
    if (info.passWord.length < 6) {
      Alert.alert("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    api({ body: info, type: TypeHTTP.POST, path: "/user/login" })
      .then((res) => {
        navigation.navigate(routes.HOME_SCREEN);
        // navigation.navigate("HomeScreen");
      })
      .catch((err) => {
        Alert.alert("Số điện thoại hoặc mật khẩu không đúng");
      });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaScreen>
        <View style={styles.textContainer}>
          <AppText style={styles.loginText}>ĐĂNG NHẬP</AppText>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={info.phone}
            placeholder="Nhập số điện thoại"
            onChangeText={(e) => setInfo({ ...info, phone: e })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={info.passWord}
            placeholder="Nhập mật khẩu"
            secureTextEntry={true}
            onChangeText={(e) => setInfo({ ...info, passWord: e })}
          />
        </View>

        <View style={styles.loginBtn}>
          <AppButton primary onPress={() => Submit()}>
            Đăng nhập
          </AppButton>
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={() => console.log("To reset password")}
          >
            <AppText style={styles.grayText}>Quên mật khẩu?</AppText>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaScreen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  detailsText: {
    marginVertical: 5,
  },
  grayText: {
    color: COLORS.mediumGray,
  },
  inputContainer: {
    alignItems: "center",
    marginVertical: 10,
    width: "90%",
  },
  loginBtn: {
    marginVertical: 10,
    width: "90%",
  },
  loginText: {
    fontSize: 30,
    marginVertical: 5,
  },
  primaryText: {
    color: COLORS.primary,
    fontWeight: "500",
  },
  signUpContainer: {
    marginVertical: 50,
  },
  socialBtn: {
    marginVertical: 10,
  },
  socialBtnsContainer: {
    alignItems: "center",
    width: "90%",
  },
  textContainer: {
    alignItems: "center",
  },
});
