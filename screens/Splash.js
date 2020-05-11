import React from 'react';
import { View, Text } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { taskStyles } from '../shared/appStyles';

const Splash = ({ colors }) => {
  const { primary, tertiary } = colors;
  return (
    <View style={[taskStyles.body, { justifyContent: 'center', alignItems: 'center', backgroundColor: primary }]}>
      <Text style={[taskStyles.head, { color: tertiary }]}>Task List</Text>
      <Text style={[taskStyles.head, { color: tertiary }]}>. . .</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  colors: state.task.colorSet,
});

export default connect(mapStateToProps)(Splash);
