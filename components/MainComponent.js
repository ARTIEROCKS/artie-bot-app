import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => ({
});

class Main extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
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