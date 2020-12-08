import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';

const mapStateToProps = state => {
    return {
    }
}

class Login extends Component{

    constructor(props){
        super(props);
    }

    render(){

    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20
    },
    formInput: {
        margin: 20
    },
    formButton: {
        margin: 60
    }
});

export default connect(mapStateToProps)(Login);