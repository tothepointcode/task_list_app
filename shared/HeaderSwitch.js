import React, {useState} from 'react';
import { View, Text, Switch, Button } from 'react-native';

import { connect } from 'react-redux';

import { colors, headerStyles } from './appStyles';

import { toggleTheme } from '../actions/taskActions';

const HeaderSwitch = ({ toggleTheme, theme }) => {
    const [status, setStatus] = useState(false);

    return (
        <View style={headerStyles.view}>
            <Text style={headerStyles.text}>{theme}</Text>
            <Switch
                value={status}
                onValueChange={value => {
                    toggleTheme(value);
                    setStatus(value);
                }}
                thumbColor='red'
            />
        </View>
    );
}

const mapStateToProps = state => ({
    theme: state.task.theme
})

export default connect(mapStateToProps, {toggleTheme})(HeaderSwitch);