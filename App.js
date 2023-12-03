import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable} from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
        </View>
        <View style={styles.bottomContainer}>
        <Text style={styles.text1}>The Only Construction Drive You need</Text>
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet consectetur. Pretium lacus in posuere in turpis. Pellentesque nisi vel ullamcorper augue accumsan
        </Text>
        
          <Pressable style={styles.button1}>
            <Text style={styles.textInPres1}>
             Create an account
            </Text>
          </Pressable>
          <Pressable style={styles.button2}>
            <Text style={styles.textInPres2}>
            Log in to your account
            </Text>
          </Pressable>
        </View>            
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {  
    height:'100%',
    backgroundColor: "#FFF",
  },
  topContainer: {
    
    // flex:'',
    backgroundColor:'#D9D9D9',
    borderColor: '#F6F6F6',
    borderWidth: 25.8,
    width: '100%',
    height: '40%',
    borderTopWidth:0,
  },
  bottomContainer: {
    alignItems:'center',
    marginTop:35,
    paddingLeft:25.8,
    paddingRight:25.8,
  },
  text1: {
    color: '#232323',
    textAlign: 'center',
    // fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '800',
    letterSpacing: 1,
    
  },
  text2: {
    fontSize: 15,
    textAlign:'center',
    color: '#5F5E5E',
    width:'102%',
    // alignItems:'center',
  },
  button1: {
    backgroundColor:'#50555C',
    marginTop:30,
    borderRadius: 10,
    paddingBottom:17,
    paddingTop:15,
    width:'102%',
    
  },
  button2: {
    marginTop:30,
    backgroundColor:'#fff',  
    paddingBottom:17,
    paddingTop:17,
    // paddingLeft:15,
    borderColor:'#50555C',
    borderRadius: 10,
    borderWidth:2,
    width:'102%',
  },
  textInPres1: {
    color:'#FFF',
    textAlign:'center',
    fontSize: 18,
  },
  textInPres2: {
    color:'#000',
    textAlign:'center',
    fontSize: 18,
  }
});
