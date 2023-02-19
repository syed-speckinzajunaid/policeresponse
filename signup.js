// import { useState } from 'react';
// import { Button, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
// import styles from "../styling"
// // import SMTextField from '../component/SMTextInput'
// import SMButton from '../component/SMButton'
// import database from '@react-native-firebase/database';


// function SignUp({ navigation }) {
//     const [model, setModel] = useState({});


//     return (
//         <ImageBackground
//         source={{
//           uri: '',
//         }}>
//         <View style={[styles.h100, styles.flexCenter,]}>
//              <Text style={{color: "white", fontSize: 30}}>Signup</Text>
//              <View style={[styles.p2, styles.w100]}>
//           <SMTextField
//           //  onChangeText={e => setModel({...model, firstName: e})}
//             label="Enter Your First Name"
//           />
//         </View>
//         <View style={[styles.p2, styles.w100]}>
//           <SMTextField
//             // onChangeText={e => setModel({...model, lastName: e})}
//             label="Enter Your Last Name"
//           />
//         </View>
//         <View style={[styles.p2, styles.w100]}>
//           <SMTextField
//            // onChangeText={e => setModel({...model, email: e})}
//             label="Enter Your Email"
//           />
//         </View>
//         <View style={[styles.p2, styles.w100]}>
//           <SMTextField
//             // onChangeText={e => setModel({...model, password: e})}
//             label="Enter Your Password"
//           />
//         </View>
//         <View style={[styles.p2, styles.w100]}>
//           <SMButton onPress={signupuser} label="SignUp" />
//         </View>

//         <View style={[styles.p2, styles.w100]}>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate('Login');
//               }}
//               style={styles.flexCenter}>
//               <Text style={[styles.textCenter, styles.fs3, styles.textPrimary]}>
//                 Already have an account?
//               </Text>
//             </TouchableOpacity>
      
//         </View>
//         </View>
//         </ImageBackground>
//     )
// }

// export default SignUp;

import { fontSize, fontStyle, textAlign } from '@mui/system';
import {View, Text, TextInput,TouchableOpacity,StyleSheet,Button} from 'react-native';
//  import styles from './styling';
function Login({navigation}) {
  return (
    <>
    <View style={[styles.bgdark, styles.h100, styles.flexCenter,styles.p3]}>
      <View style={[styles.w100, styles.my2]}>
        <Text style={[styles.textPrimary, styles.fs1,styles.textCenter]}>Login </Text>
      </View>
      <View style={[styles.w100, styles.my2]} >
        <TextInput placeholder="Email"  />
      </View>
      <View style={[styles.w100, styles.my2]}>
        <TextInput placeholder="Password" style={styles.input} />
      </View>
      <View style={[styles.w100, styles.my2]}>
          <TouchableOpacity style={styles.btn}>
              <Text style={[styles.textWhite,styles.textCenter]}>Login</Text>
          </TouchableOpacity>
    
      </View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Policeadmin')}
      />
    </View>
  </>
 
  );
}



const styles = StyleSheet.create({


  input: {
    height: "auto",
    width: "100%",
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 17,
    borderRadius: 30,
    backgroundColor: "seagreen"
    // "#f1f1f1",
  },
  bgPrimary: {
    backgroundColor: 'cornflowerblue',
  },
  fs2: {
    fontSize: 26,
  },
  w100: {
    width: "100%",
  },
  p3: {
    padding: 30,
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  bgBlack: {
     backgroundColor: '_black',
  },
  textPrimary: {
    color:'gray'
    //  '_dark',
  },
  fs1: {
    fontSize: 32,
  },
  btn: {
    backgroundColor: 'darkcornflowerblue',
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  textCenter: {
    textAlign: "center",
  },
  textWhite: {
    color: '_white',
  },
})
export default Login;

