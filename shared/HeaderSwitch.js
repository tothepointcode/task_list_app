import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { headerStyles } from './appStyles';

import { toggleTheme } from '../actions/taskActions';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderSwitch = ({ toggleTheme, theme, colors }) => {
  const [status, setStatus] = useState(false);
  const { primary, secondary, tertiary, placeholder, alternative } = colors;

  const handlePress = () => {
    toggleTheme(!status);
    setStatus(!status);
  };

  return (
    <View style={headerStyles.view}>
      <TouchableOpacity
        style={{
          backgroundColor: 'transparent',
          padding: 10,
        }}
        onPress={handlePress}
      >
        <MaterialCommunityIcons name={!status ? 'weather-night' : 'weather-sunny'} size={27} color={tertiary} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  theme: state.task.theme,
  colors: state.task.colorSet,
});

export default connect(mapStateToProps, { toggleTheme })(HeaderSwitch);
