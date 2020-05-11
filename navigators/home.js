import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Tasks from '../screens/Tasks';
import Collections from '../screens/Collections';
import Modification from '../screens/Modification';

// Redux
import { connect } from 'react-redux';

// Icons
import { Feather, AntDesign } from '@expo/vector-icons';

// Styles
import { taskStyles } from '../shared/appStyles';

const Tabs = createBottomTabNavigator();

const BottomNav = ({ colors }) => {
  const { primary, tertiary, secondary } = colors;

  return (
    <Tabs.Navigator
      initialRouteName="Tasks"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tasks') {
            iconName = 'home';
          } else if (route.name === 'Collections') {
            iconName = 'align-left';
          } else if (route.name === 'Modification') {
            iconName = 'pluscircle';
            return <AntDesign style={{ position: 'absolute', top: -15 }} name={iconName} size={60} color={color} />;
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: tertiary,
        inactiveTintColor: secondary,
        showLabel: false,
        style: { ...taskStyles.tab, backgroundColor: primary },
      }}
    >
      <Tabs.Screen name="Collections" component={Collections} options={{ title: 'Collections' }} />
      <Tabs.Screen name="Modification" component={Modification} />
      <Tabs.Screen name="Tasks" component={Tasks} />
    </Tabs.Navigator>
  );
};
const mapStateToProps = (state) => ({
  colors: state.task.colorSet,
});

export default connect(mapStateToProps)(BottomNav);
