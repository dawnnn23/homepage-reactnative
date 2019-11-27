import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native';
import {LOCHOST as LOCHOST} from '../constants/index'


export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
    }

    register = () => {

        //Post data to our express backend point
        
        var address = 'http://' + LOCHOST + ':5000/api/users/register';

        fetch({address},{
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : this.state.email,
                password : this.state.password
            })
        }) .then(function (response) {
                return response.json();
        }).then(function (result) { 
            if(!result.error){
                alert("User register successfully!");
            }else{
                Alert.alert(result.error_msg);
            }
        }).catch(function (error) {
            alert("result:"+error);
        });
    }

    goBack = () => {
        alert("No navigation yet!")
    }
    render(){
        return(
         <View style={styles.container}>
            <View style={styles.container}>
                <Image style={{width: 100, height: 100}}
                source={require('../images/EatsEazy.png')}/>
                <Text style={styles.logoText}>Welcome to my App.</Text>
                
                <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" 
                 onChangeText={(email) => this.setState({email})}
                 value = {this.state.email}
                 placeholderTextColor="#ffffff"/>
                <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" 
                 onChangeText={(password) => this.setState({password})}
                 value = {this.state.password}
                 secureTextEntry={true}
                 placeholderTextColor="#ffffff"/>
                 <TouchableOpacity onPress={this.register} style={styles.button}>
                     <Text style={styles.buttonText}>Sign up</Text>
                 </TouchableOpacity>

            </View>  
            <View style={styles.signupTextCont}>
                <Text style={styles.textSignup}>Already have an account? </Text>
                <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Sign in</Text></TouchableOpacity>
            </View>
         </View>   
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupTextCont: { 
        // flexGrow: 1,
        // alignItems: 'flex-end',
        // justifyContent: 'center',
        // paddingVertical: 16,
        flexDirection: 'row'
    },
    textSignup: {
        color:'#696969',
        fontSize: 16
    },
    signupButton: {
        color: '#d3d3d3',
        fontSize: 16,
        fontWeight: '500',
        fontWeight: "bold"
    },
    logoText:{
        marginVertical: 15,
        fontSize: 18,
        color:'#455A64',
        fontWeight: 'bold'
    },
    inputBox:{
        width:250,
        backgroundColor:'#d3d3d3',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    button:{
        width:250,
        backgroundColor:'#696969',
        borderRadius: 25,
        marginVertical:10,
        paddingVertical:12
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
  });
  