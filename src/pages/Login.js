import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
    }

    login= () => {

        //Post data to our express backend point

        fetch('enteraddresshere',{
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : this.state.email,
                password : this.state.password
            })
        })
        .then((response) => response.json())
        .then((res) => {
            if(res.success === true) {
                //var email = res.message;
                alert("You are now logged in!");
                //this.props.navigator.push({
                //    id: 'Memberarea'
                //})
            } else {
                alert("Try again!");
            }
        }).done();
        
        //test
        //alert(this.state.email);
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
                
                 {/*<Form type="Login" />*/}
                
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
                 <TouchableOpacity onPress={this.login} style={styles.button}>
                     <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>

            </View>
            <View style={styles.signupTextCont}>
                <Text style={styles.textSignup}>Do not have an account? </Text>
                <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Signup</Text></TouchableOpacity>
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
        justifyContent: 'center',
        // // paddingVertical: 9,
        flexDirection: 'row'
    },
    textSignup: {
        color:'#455A64',
        fontSize: 16
    },
    signupButton: {
        color: '#d3d3d3',
        fontSize: 16,
        fontWeight: '500',
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
    },
    logoText:{
        marginVertical: 15,
        fontSize: 18,
        color:'#455A64',
        fontWeight: 'bold'
    }
  });
  