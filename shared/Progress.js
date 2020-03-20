import React from 'react';
import {View, Text} from 'react-native';

import {progressStyles} from './appStyles';

const Progress = ({value}) => {
    return(
        <View style={progressStyles.field}>
            <View style={progressStyles.progress}><Text style={[progressStyles.bar, {width: value}]}></Text></View>
            <Text style={progressStyles.percentage}>{value}</Text>
        </View>
    )
}

export default Progress;