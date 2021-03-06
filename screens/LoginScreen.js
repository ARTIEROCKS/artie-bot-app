import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {Input, CheckBox, Button, Icon, Text} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import Images from '../constants/Images';
import argonTheme from '../constants/Theme';

import {Loading} from '../components/LoadingComponent';

const { width, height } = Dimensions.get("screen");

class Login extends Component{

    constructor(props){
        super(props);
    }

    handleLogin(){

        SecureStore.setItemAsync(
            'serverinfo',
            JSON.stringify({server: this.props.login.server})
        )
        .catch((error) => console.log('Could not save server info', error));

        //Checks if the user wants to remember the login
        if(this.props.login.remember === true){
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({username: this.props.login.username, password: this.props.login.password})
            )
            .catch((error) => console.log('Could not save user info', error));
        }else{
            SecureStore.deleteItemAsync('userinfo')
                        .catch((error) => console.log('Could not delete user info', error));
        }

        //Login action
        this.props.onLoginArtie(this.props.login.server, this.props.login.username, this.props.login.password);
    }

    render(){
        return(
            <ImageBackground
                source={Images.RegisterBackground}
                style={{ width, height, zIndex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <View style={styles.container}>
                        <View style={styles.drawerHeader}>
                            <Text style={styles.drawerHeaderText}>Login</Text>
                        </View>
                        <Input 
                            placeholder="Server"
                            leftIcon={{type: 'font-awesome', name: 'server'}}
                            value={this.props.login.server}
                            containerStyle={styles.formInput}
                            onChangeText ={(server) => this.props.onLoginServerChange(server)}
                        />
                        <Input 
                            placeholder="Username"
                            leftIcon={{type: 'font-awesome', name: 'user-o'}}
                            value={this.props.login.username}
                            containerStyle={styles.formInput}
                            onChangeText = {(username) => this.props.onLoginInfoChange(username, this.props.login.password)}
                        />
                        <Input 
                            placeholder="Password"
                            secureTextEntry={true}
                            leftIcon={{type: 'font-awesome', name: 'key'}}
                            value={this.props.login.password}
                            containerStyle={styles.formInput}
                            onChangeText = {(password) => this.props.onLoginInfoChange(this.props.login.username, password)}
                        />
                        <CheckBox
                            title="Remember Me"
                            center
                            checked={this.props.login.remember}
                            containerStyle={styles.formCheckbox}
                            onPress={() => this.props.onRememberChange(!this.props.login.remember)}
                        />
                        <View style={styles.formButton}>
                            {this.props.login.loading ? <Loading /> : 
                            <Button
                                title='Login'
                                icon={<Icon name='sign-in' size={24} type='font-awesome' color='white' />}
                                buttonStyle = {{ backgroundColor: argonTheme.COLORS['PRIMARY'] }}
                                onPress = {() => this.handleLogin()}
                            />}
                            
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: argonTheme.COLORS['BLOCK'],
        margin: 50
    },
    drawerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: argonTheme.COLORS['PRIMARY'],
        color: argonTheme.COLORS['WHITE']
    },
    drawerHeaderText: {
        color: argonTheme.COLORS['WHITE'],
        fontSize: 24,
        fontWeight: 'bold'
    },
    formInput: {
        margin: 20
    },
    formCheckbox: {
        margin: 20,
        backgroundColor: null
    },
    formButton: {
        margin: 40
    }
});

export default Login;