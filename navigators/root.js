import React from 'react';

// React navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import BottomNav from './home';
import HeaderSwitch from '../shared/HeaderSwitch';

// Styles
import {colors} from '../shared/appStyles';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Collections"
                screenOptions={{
                    headerShown: true,
                    title: 'Task List',
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTintColor: colors.tertiary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (<HeaderSwitch />)
                }}
            >
                <Stack.Screen name="Home" component={BottomNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;