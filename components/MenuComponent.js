import React from 'react';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Icon} from 'react-native-elements';

import Home from '../screens/HomeScreen';

const HomeNavigator = createStackNavigator(
    { Home: { screen: Home } },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: "#512DA8" },
            headerTitleStyle: { color: "#fff" }, headerTintColor: "fff",
            headerLeft: <Icon name="menu" size={24}
                color='white'
                onPress={() => navigation.toggleDrawer()} />
        })
    }
);

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{ flex: 2 }}>
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
        }
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#D1C4E9',
        contentComponent: CustomDrawerContentComponent
    }
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});