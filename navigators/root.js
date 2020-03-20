import React from 'react';

// Redux
import { connect } from 'react-redux';
import { setupProgress } from '../actions/taskActions';

// React navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import BottomNav from './home';
import HeaderSwitch from '../shared/HeaderSwitch';
import Splash from '../screens/Splash';

// Styles
import {colors} from '../shared/appStyles';

const Stack = createStackNavigator();

const RootStack = ({isLoading, setupProgress}) => {
    setTimeout(() => setupProgress(), 2000);
    
    if (isLoading) {
        return <Splash />
    } else {
    
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
    )

    }
}

const mapStateToProps = state => ({
    isLoading: state.task.isLoading
})

export default connect(mapStateToProps, {setupProgress})(RootStack);