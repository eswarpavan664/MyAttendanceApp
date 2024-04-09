/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons from react-native-vector-icons
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";
import { useNavigation } from "@react-navigation/native";
import { set_local_ValueByKey } from "../helpers/GetLocalData";
import { postData } from "../helpers/APiCalling";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => { // Destructure 'navigation' directly

 const navigate = useNavigation();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleSignIn =async () => {
   if (validateEmail(email)) {
     console.log("Email:", email);
     console.log("Password:", password);
      await Login(email,password)
    //  navigation.navigate("HomeScreen");
   } else {
     Alert.alert("Invalid Email", "Please enter a valid email address.");
   }
 }


const Login = async (email: string, password: string) => {
  try {
    let payload = {
      email: email,
      password: password
    };
    console.log(payload);

    let resp = await postData("/login_apis/login", payload, {});
    console.log("response == > ",resp)
    if (resp?.token?.status == 400) {
      if(resp?.token?.user_status){
         Alert.alert(resp?.token?.user_status);
      }else{
        Alert.alert(resp?.token?.message);
      }
      
   
    } else {
      
      await set_local_ValueByKey("token", resp?.token);
      console.log("resp = >  ", resp);
     navigation.navigate("HomeScreen");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

 // Function to validate email format
 const validateEmail = (email:string) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
 }
 
 return (
   <SafeAreaView>
     <View style={styles.container}>
       <View style={styles.titleContainer}>
         <Text style={styles.titleText}>Login here</Text>
         <Text style={styles.subtitleText}>
           Welcome back, you've been missed!
         </Text>
       </View>
       <View style={styles.inputContainer}>
         <AppTextInput 
           placeholder="Email"
           onChangeText={text => setEmail(text)} // Update email state
           value={email} // Set value of email input
         />
         <AppTextInput 
           placeholder="Password"
           onChangeText={text => setPassword(text)} // Update password state
           value={password} // Set value of password input
         />
       </View>
       <TouchableOpacity style={styles.forgotPasswordButton}>
         <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.signInButton}
         onPress={handleSignIn} // Call handleSignIn function on press
       >
         <Text style={styles.signInButtonText}>Sign in</Text>
       </TouchableOpacity>
     
       <View style={styles.separator}>
         <Text style={styles.separatorText}>Or continue with</Text>
       </View>
       <View style={styles.socialButtonsContainer}>
         <TouchableOpacity style={styles.socialButton}>
           <Ionicons name="logo-google" size={Spacing * 2} color={Colors.text} />
         </TouchableOpacity>    
       </View>
     </View>
   </SafeAreaView>
 );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: Spacing * 2,
  },
  titleContainer: {
    alignItems: "center",
  },
  titleText: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3,
  },
  subtitleText: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.large,
    maxWidth: "60%",
    textAlign: "center",
  },
  inputContainer: {
    marginVertical: Spacing * 3,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    fontFamily: Font["poppins-semiBold"],
    fontSize: FontSize.small,
    color: Colors.primary,
  },
  signInButton: {
    padding: Spacing * 2,
    backgroundColor: Colors.primary,
    marginVertical: Spacing * 3,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  signInButtonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    textAlign: "center",
    fontSize: FontSize.large,
  },
  createAccountButton: {
    padding: Spacing,
  },
  createAccountText: {
    fontFamily: Font["poppins-semiBold"],
    color: Colors.text,
    textAlign: "center",
    fontSize: FontSize.small,
  },
  separator: {
    marginVertical: Spacing * 3,
  },
  separatorText: {
    fontFamily: Font["poppins-semiBold"],
    color: Colors.primary,
    textAlign: "center",
    fontSize: FontSize.small,
  },
  socialButtonsContainer: {
    marginTop: Spacing,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing,
  },
});
