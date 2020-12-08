import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';

import Login from '../screens/LoginComponent';

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = dispatch => ({
});

class Main extends Component {
    render(){
        return(
            <Login login={this.props.login}/>
        );
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