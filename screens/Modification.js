import React from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";

// Redux
import { connect } from "react-redux";

// Styles
import { taskStyles, modStyles, colors } from "../shared/appStyles";

const Modification = ({ tasks, activeCollection }) => {
  return (
    <View style={taskStyles.body}>
        <Text style={taskStyles.head}>Add a task</Text>
        <Text style={taskStyles.text}>To add task to an existing collection, select it in the collection list and add task. Otherwise type name to create a new collection and task.</Text>
        <View style={modStyles.inputSection}>
            <Text style={modStyles.label}>Collection</Text>
            <TextInput 
                style={modStyles.input}
                placeholder="eg. Grocery List"
                placeholderTextColor={colors.placeholder}
                selectionColor={colors.tertiary}
            />
        </View>
        <View style={modStyles.inputSection}>
            <Text style={modStyles.label}>Task</Text>
            <TextInput 
                style={modStyles.input}
                placeholder="eg. Purchase cotton napkins"
                placeholderTextColor={colors.placeholder}
                selectionColor={colors.tertiary}
            />
        </View>
        <View style={modStyles.inputSection}>
            <TouchableOpacity style={modStyles.button}>
                <Text style={modStyles.buttonText}>Create Task</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection
});

export default connect(mapStateToProps, {})(Modification);
