import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import * as SecureStore from 'expo-secure-store';
import { createAppContainer } from 'react-navigation';

import { addLoginServer, addLoginInfo, addRemember, loginArtie } from '../redux/login';
import Login from '../screens/LoginScreen';
import {MainNavigator} from './MenuComponent';

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = dispatch => ({
    addLoginServer: (server) => dispatch(addLoginServer(server)),
    addLoginInfo: (username, password) => dispatch(addLoginInfo(username, password)),
    addRemember: (remember) => dispatch(addRemember(remember)),
    loginArtie : (server, username, password) => dispatch(loginArtie(server, username, password))
});

const AppContainer = createAppContainer(MainNavigator);

class Main extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){

        //Getting the server information
        SecureStore.getItemAsync('serverinfo')
            .then((serverdata) => {
                let serverinfo = JSON.parse(serverdata);
                if(serverinfo){
                    this.props.addLoginServer(serverinfo.server);
                }
            });
        
        //Getting the user information
        SecureStore.getItemAsync('userinfo')
            .then((userdata) => {
                let userinfo = JSON.parse(userdata);
                if(userinfo){
                    this.props.addLoginInfo(userinfo.username, userinfo.password);
                    this.props.addRemember(true);
                }
            });
    }

    render(){

        if(this.props.login.user === null){
            return(
                <Login 
                    login={this.props.login}
                    onLoginServerChange = {this.props.addLoginServer}
                    onLoginInfoChange = {this.props.addLoginInfo}
                    onRememberChange = {this.props.addRemember}
                    onLoginArtie = {this.props.loginArtie}
                />
            );
        }else{
            return(
                <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                    <AppContainer />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(Main);