import { StyleSheet, View, Text } from "react-native";

import { AppText, AppTextInput, SafeAreaScreen } from "../components";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AppButton } from "../components/Buttons";
import { COLORS } from "../utils";

export default function Profile() {

  const dangNhap = () => {

  }


  return (
    <SafeAreaScreen>
      <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 600 }}>Thông tin cá nhân</Text>
        <View style={styles.inputContainer}>
          <AppText  Input
            placeholder="Họ và tên"
            onTextChange={() => console.log("typed")}
          />
        </View>
        <View style={styles.inputContainer}>
          <AppTextInput
            extraStyles={{ width: '100%' }}
            placeholder="Email của bạn"
            onTextChange={() => console.log("typed")}
          />
        </View>

        <View style={styles.loginBtn}>
          <AppButton primary onPress={dangNhap}>
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
      </View>
    </SafeAreaScreen>
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
