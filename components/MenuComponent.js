import React from 'react';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Icon} from 'react-native-elements';

import * as Images from '../constants/Images';
import Home from '../screens/HomeScreen';

const HomeNavigator = createStackNavigator(
    { Home: { screen: Home }},
    {
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}
                        type="font-awesome"
                        name="bars"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }
);

const TestNavigator = createStackNavigator(
    { Test: { screen: Home }},
    {
        defaultNavigationOptions: ({ navigation }) => {  
            return {  
                headerLeft: (  
                    <Icon  
                        style={{ paddingLeft: 10 }}  
                        onPress={() => navigation.openDrawer()}
                        type="font-awesome"
                        name="bars"  
                        size={30}  
                    />  
                )  
            };  
        }  
    }
);

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
            <View style={{flex: 1}}>
                    <Image source={Images.Logov} style={styles.drawerImage} />
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.drawerHeaderText}>ARTIE</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

export const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon name="home" type="font-awesome" size={24} color={tintColor} />
                )
            }
        },
        Test: {
            screen: TestNavigator,
            navigationOptions: {
                title: 'Test',
                drawerLabel: 'Test',
                drawerIcon: ({ tintColor, focused }) => (
                    <Icon name="home" type="font-awesome" size={24} color={tintColor} />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: 'white',
        contentComponent: CustomDrawerContentComponent
    }
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: 'white',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#512DA8',
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    drawerImage: {
        marginLeft: 40,
        width: 30,
        height: 30
    }
});