import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import * as SecureStore from 'expo-secure-store';

import Login from '../screens/LoginComponent';
import { addLoginServer, addLoginInfo, addRemember, loginArtie } from '../redux/login';

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

class Main extends Component {

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
                <Login 
                    login={this.props.login}
                    onLoginServerChange = {this.props.addLoginServer}
                    onLoginInfoChange = {this.props.addLoginInfo}
                    onRememberChange = {this.props.addRemember}
                    onLoginArtie = {this.props.loginArtie}
                />
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