import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "react-native-check-box";

export default function Onboarding() {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.checkBoxAnd}>
        <View style={styles.textAndInputs}>
          <Text style={styles.text1}>Let’s get to know You</Text>
          <View style={styles.topHolder}>
            <View style={styles.bottomContainer}>
              <View style={styles.inputBox}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter First Name"
                  placeholderTextColor="#8A9BA3"
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Last Name"
                  placeholderTextColor="#8A9BA3"
                />
              </View>
            </View>
            <View style={styles.inputBox1}>
              <Text style={styles.label}>Work Email</Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                placeholderTextColor="#8A9BA3"
              />
            </View>
          </View>
        </View>
        <View style={styles.checkBoxView}>
          <CheckBox
            onClick={() => handleToggle()}
            style={styles.checkBox}
            isChecked={checked}
            checkBoxColor='#EA5540'
            checkedCheckBoxColor="#EA5540"
            uncheckedCheckBoxColor="#EA5540"
          />
          <View style={styles.texts}>
            <Text style={styles.texts2}>I agree to the</Text>
            <Text style={styles.texts1}>terms & condition</Text>
            <Text style={styles.texts2}>and</Text>
            <Text style={styles.texts1}>privacy policy</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button1,
          { backgroundColor: pressed ? "#bee5ed" : "#31AEE8" },
        ]}
      >
        <Text style={styles.textInPres1}>Continue</Text>
      </Pressable>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 95,
  },
  text1: {
    color: "#232323",
    fontSize: 27,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 1,
  },
  textAndInputs: {
    flexDirection: "column",
    rowGap: 30,
  },
  topHolder: {
    flexDirection: "column",
    rowGap: 25,
  },
  checkBoxAnd: {
    flexDirection: "column",
    rowGap: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    columnGap: 15,
  },
  inputBox: {
    width: "48%",
  },
  inputBox1: {
    width: "100%",
  },
  label: {
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F5F8FA",
    borderColor: "#31AEE8",
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  checkBoxView: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    color: "#EA5540",
    // borderBlockColor:'#EA5540',
    // borderWidth:'1',
    // borderColor: '#EA5540',
    // backgroundColor:'#EA5540'
  },
  texts: {
    flexDirection: "row",
    columnGap: 5,
  },
  texts1: {
    fontSize: 14,
    
    color: "#EA5540",
  
  },
  texts2: {
    fontSize: 14,
    
    color: "#8A9BA3",
    
  },
  button1: {
    borderRadius: 10,
    paddingBottom: 17,
    paddingTop: 15,
    width: "102%",
  },
  textInPres1: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
  },  
});
