import React, {Component} from 'react';
import { Alert, View, TouchableOpacity} from 'react-native';
import { TextInput, Button, HelperText, Text} from 'react-native-paper';

class SignUp extends Component {
  state = {
    userName: "",
    email:"",
    emailError: "",
    showHelperEmail: false
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
  
    onSignin = () => {
      if (this.state.emailError) {
        Alert.alert("Invalid email");
        return;
      }

      else if (!this.state.email) {
        Alert.alert("All fields are required");
        return;
      }
      else {
        Alert.alert(`New User ${this.state.email} Created!`);
      }
    };

  

  render() {

    const {navigation} = this.props;

    return (
      <>
      

        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign:'center', marginTop: 30}}>
            Register
        </Text>

        <View>
            <Text style= {{fontSize:15, marginHorizontal: 10, marginTop: 20}}>
                Full Name
            </Text>

            <TextInput
                mode='outlined'
                style={{marginTop:12, marginHorizontal: 10, height:42}}
                
                placeholder='enter Value'
            />
        </View>

        <View>
            <Text style= {{fontSize:15, marginHorizontal: 10, marginTop: 20}}>
                User Name
            </Text>
    
            <TextInput
                mode='outlined'
                style={{marginTop:12, marginHorizontal: 10, height:42 }}
                placeholder='Enter Value'        
            />
        </View>

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



          
        <Button 
            mode="contained" 
            onPress={this.onSignin} 
            style = {{marginTop: 20, marginHorizontal: 80, backgroundColor:'#3DA6D7', borderRadius: 10}}
        >
          Sign Up
        </Button>

        <View
            style = {{ flex:1, flexDirection: 'row', marginTop: 10, justifyContent: 'center', alignContent: 'center' }}
        >
            <Text>
                Already have an account?
            </Text>

            <TouchableOpacity  
                style ={{marginHorizontal: 5}}
                onPress={() => navigation.navigate('LogIn')}>
                <Text style = {{color: '#3DA6D7'}}>
                    Log In
                </Text>
            </TouchableOpacity>
        </View>
      </>
      
    );
  }
  }
  

export default SignUp;