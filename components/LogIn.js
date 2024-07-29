import React, {Component} from 'react';
import { Alert, Image, View, TouchableOpacity } from 'react-native';
import { TextInput, Button, HelperText, Text} from 'react-native-paper';

class LogIn extends Component {
  state = {
    email:"",
    emailError: "",
    password: "",
    passwordError: "",
    secureText: true,
    showHelperEmail: false,
    showHelperPass: false
    };

    validateEmail = (text) => {
      // Regular expression for validating an email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(text)) {
        this.setState({ emailError: "Please enter a valid email address", showHelperEmail: true, email: text });
      } 
      else {
        this.setState({ emailError:"", showHelperEmail: false, email: text });
      }
    };

    validatePassword = (text) => {
        if (text.length < 8) {
            this.setState({passwordError: "Password must be at least 8 characters", showHelperPass: true, password: text});
          }
          else {
            this.setState({passwordError: "", showHelperPass: false, password: text});
          }
    }
  
    onSignin = () => {
      const {navigation} = this.props;
      if (this.state.emailError || this.state.passwordError) {
        Alert.alert("Invalid email or password");
        return;
      }

      else if (!this.state.email || !this.state.password) {
        Alert.alert(" Both Email and password fields are required");
        return;
      }
      else {
        navigation.navigate('Inbox');
      }
    };
  
    togglePass = () => {
      this.setState({ secureText: !this.state.secureText});
    };
  

  render() {
    const {navigation} = this.props;

    return (
      <>

       <Image
          source={require('./LoginImg.png')} 
          style={{alignSelf: 'center',
                marginTop: 20,
                width: 200,
                height: 200,
                resizeMode: 'contain',
                borderRadius: 30
              }}
       />

        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign:'center', marginTop: 10}}>
            LOG IN
        </Text>

        <View>
            <Text style= {{fontSize:15, marginHorizontal: 10, marginTop: 20}}>
                E-Mail
            </Text>
            
            <TextInput
                mode='outlined'
                style={{marginTop:12, marginHorizontal: 10, height:42}}
                placeholder='Enter value'
                value={this.state.email}
                inputMode='email'
                onChangeText={this.validateEmail} 
            />
        
            {
                this.state.showHelperEmail == true?
                <HelperText type="error" visible={true}>
                    {this.state.emailError}
                </HelperText>
                : null
            }
        </View>
  
        <View>
            <Text style= {{fontSize:15, marginHorizontal: 10, marginTop: 20}}>
                Password
            </Text>
    
            <TextInput
                mode='outlined'
                style={{marginTop:12, marginHorizontal: 10, height:42 }}
                placeholder='Enter Value'
                secureTextEntry={this.state.secureText}
                onChangeText={this.validatePassword}
                right={<TextInput.Icon 
                    icon={this.state.secureText ? "eye" : "eye-off"} 
                    onPress={this.togglePass}
                    />}        
            />

            {
                this.state.showHelperPass == true?
                <HelperText type="error" visible={true}>
                    {this.state.passwordError}
                </HelperText>
                : null
            }
        </View>
          
        <Button 
            mode="contained" 
            onPress={this.onSignin} 
            style = {{marginTop: 20, marginHorizontal: 80, backgroundColor:'#3DA6D7', borderRadius: 10}}>
          Sign In
        </Button>

        <View
            style = {{ flex:1, flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}
        >
            <Text>
                Don't have an account?
            </Text>

            <TouchableOpacity  
                style ={{marginHorizontal: 5}}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style = {{color: '#3DA6D7'}}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
      </>
      
    );
  }
  }
  

export default LogIn;