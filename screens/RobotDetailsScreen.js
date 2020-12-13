import React, {Component} from 'react';
import {View} from 'react-native';
import {Input, Button, Icon, Text} from 'react-native-elements';
import argonTheme from '../constants/Theme';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        robot: state.robot
    }
}

class RobotDetails extends Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Robot Details'
    };

    render(){
        return(
            <View>
                <Input
                    placeholder='Robot Name'
                    leftIcon={{ type: 'font-awesome', name: 'search' }}
                    value={this.props.robot.name}
                />
                <Input
                    placeholder='Type'
                    leftIcon={{ type: 'font-awesome', name: 'search' }}
                    value={this.props.robot.type}
                />
                <Input
                    placeholder='IP'
                    leftIcon={{ type: 'font-awesome', name: 'search' }}
                    value={this.props.robot.ip}
                />
                <Button
                    title='Login'
                    icon={<Icon name='sign-in' size={24} type='font-awesome' color='white' />}
                    buttonStyle = {{ backgroundColor: argonTheme.COLORS['PRIMARY'] }}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps)(RobotDetails);