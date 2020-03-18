import React from "react";
import { View, Text } from "react-native";

// Redux
import { connect } from "react-redux";

// Styles
import { taskStyles } from "../shared/appStyles";

const Modification = ({ tasks, activeCollection }) => {
  return (
    <View style={taskStyles.body}>
      <Text style={taskStyles.text}>Home of Modification</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection
});

export default connect(mapStateToProps, {})(Modification);
