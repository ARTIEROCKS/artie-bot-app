import React, {Component} from 'react';
import {FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import Swipeout from 'react-native-swipeout';
import {ListItem} from 'react-native-elements';

import {Loading} from '../components/LoadingComponent';

const mapStateToProps = state => {
    return {
        robot: state.robot
    }
}
const mapDispatchToProps = dispatch => ({
    removeRobot: (robot) => dispatch(removeRobot(robot))
});

class Robot extends Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Robot List'
    };

    
    render(){

        const { navigate } = this.props.navigation;

        //Rendering the robot item
        const renderRobotItem = ({item, index}) => {
            const rightButton = [
                {
                    text: 'Delete',
                    type: 'delete',
                    onPress: () => {
                        Alert.alert(
                            'Delete Robot?',
                            'Are you sure you wish to delete this robot ' + item.name + '?',
                            [
                                { 
                                    text: 'Cancel', 
                                    onPress: ()=> console.log( item.name + ' Not Deleted') ,
                                    style: ' cancel' 
                                },
                                {
                                    text: 'OK',
                                    onPress: () => console.log( item.name + ' Deleted'),
                                }
                            ],
                            { cancelable: false }
                        );
                    }
                }
            ];

            //Swipeout
            return(
                <Swipeout right={rightButton} autoClose={true}>
                    <ListItem
                        key={index}
                        title={item.name}
                        subtitle={'Type: ' + item.type + ' -  IP: ' + item.ip}
                        hideChevron={true}
                        onPress={() => navigate('RobotDetails', { robot: item })}
                    />
                </Swipeout>
            );
        }
        


        //Screen View
        if(this.props.robot.loading){
            return(<Loading />);
        }else{
            return(
                <FlatList
                    data={this.props.robot.robots}
                    renderItem={renderRobotItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Robot);