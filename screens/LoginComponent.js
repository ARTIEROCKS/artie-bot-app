import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Input, CheckBox, Button, Icon, Text} from 'react-native-elements';
import argonTheme from "../constants/Theme";

class Login extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.drawerHeader}>
                        <Text style={styles.drawerHeaderText}>Login</Text>
                    </View>
                    <Input 
                        placeholder="Server"
                        leftIcon={{type: 'font-awesome', name: 'server'}}
                        value={this.props.login.server}
                        containerStyle={styles.formInput}
                    />
                    <Input 
                        placeholder="Username"
                        leftIcon={{type: 'font-awesome', name: 'user-o'}}
                        value={this.props.login.username}
                        containerStyle={styles.formInput}
                    />
                    <Input 
                        placeholder="Password"
                        secureTextEntry={true}
                        leftIcon={{type: 'font-awesome', name: 'key'}}
                        value={this.props.login.password}
                        containerStyle={styles.formInput}
                    />
                    <CheckBox
                        title="Remember Me"
                        center
                        checked={this.props.login.remember}
                        containerStyle={styles.formCheckbox}
                    />
                    <View style={styles.formButton}>
                        <Button
                            title='Login'
                            icon={<Icon name='sign-in' size={24} type='font-awesome' color='white' />}
                            buttonStyle = {{ backgroundColor: argonTheme.COLORS['PRIMARY'] }}
                        />
                    </View>
                </View>
            </ScrollView>
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