import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ViewComponent,
} from "react-native";
import { Checkbox } from "react-native-paper";

const Login = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.body}>
      <View>
        <View style={styles.roundTop}></View>
        <Text style={styles.text1}>Login to your Account</Text>
        <View style={styles.twoText}>
          <Text style={styles.text2}>Don’t have an account? </Text>
          <Text style={styles.text3}>Sign Up</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="example@gmail.com" />
        </View>
        <View>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View>
            <Text>I agree to the</Text>
            <Text>terms & condition</Text>
            <Text>and</Text>
            <Text>privacy policy</Text>
          </View>
        </View>
      </View>
      <Pressable style={styles.button1}>
        <Text style={styles.textInPres1}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFF",
    paddingBottom: 60,
    paddingTop: 25,
    paddingRight: 25,
    paddingLeft: 25,
  },
  roundTop: {
    backgroundColor:'#D9D9D9',
    width:70,
    height:70,
    borderRadius:'50%',
    marginBottom:23,
  },
  topContainer: {

  },
  twoText: {
    flexDirection:'row',
    marginBottom:35,
    marginTop:5,
  },
  text1: {
    color: "#232323",
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 1,
  },
  text2: {
    color: "#858B97",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: .1,
  },
  text3: {
    color: "#000",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: .1,
  },
  inputBox: {
    flexDirection:'column',
  },
  label: {
    color: "#000",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: .1,
  },
  input: {
    color: "#000",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: .1,
  },
  button1: {
    backgroundColor: "#50555C",
    marginTop: 30,
    borderRadius: 10,
    paddingBottom: 17,
    paddingTop: 15,
    width: "102%",
  },
  textInPres1: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
  },
});
