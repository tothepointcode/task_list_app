import React from 'react';
import { View, Text } from 'react-native';

// Redux
import { connect } from 'react-redux';

import { progressStyles } from './appStyles';

const Progress = ({ value, colors }) => {
  const { primary, secondary, tertiary, placeholder, alternative } = colors;

  return (
    <View style={progressStyles.field}>
      <View style={[progressStyles.progress, { borderColor: secondary, backgroundColor: secondary }]}>
        <Text style={[progressStyles.bar, { width: value, backgroundColor: tertiary }]}></Text>
      </View>
      <Text style={[progressStyles.percentage, { color: tertiary }]}>{value}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  colors: state.task.colorSet,
});

export default connect(mapStateToProps)(Progress);
