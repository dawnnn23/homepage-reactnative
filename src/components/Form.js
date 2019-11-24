// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// export default class Form extends Component {


//     render(){
//         return(
//             <View style={styles.container}>
//                 <TextInput style={styles.inputBox}
//                  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" 
//                  onChangeText={(email) => this.setState({email})}
//                  value = {this.state.email}
//                  placeholderTextColor="#ffffff"/>
//                 <TextInput style={styles.inputBox}
//                  underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" 
//                  onChangeText={(password) => this.setState({password})}
//                  value = {this.state.password}
//                  secureTextEntry={true}
//                  placeholderTextColor="#ffffff"/>
//                  <TouchableOpacity style={styles.button}>
//                      <Text style={styles.buttonText}>{this.props.type}</Text>
//                  </TouchableOpacity>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flexGrow: 1,
//       justifyContent:'center',
//       alignItems: 'center'
//     },
//     inputBox:{
//         width:250,
//         backgroundColor:'#d3d3d3',
//         borderRadius: 25,
//         paddingHorizontal:16,
//         fontSize:16,
//         color:'#ffffff',
//         marginVertical: 10
//     },
//     button:{
//         width:250,
//         backgroundColor:'#696969',
//         borderRadius: 25,
//         marginVertical:10,
//         paddingVertical:12
//     },
//     buttonText: {
//         fontSize:16,
//         fontWeight:'500',
//         color:'#ffffff',
//         textAlign:'center'
//     }
//   });
  