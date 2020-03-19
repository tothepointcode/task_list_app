import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";

// Redux
import { connect } from "react-redux";
import { createTask } from '../actions/taskActions';

// Styles
import { taskStyles, modStyles, colors } from "../shared/appStyles";

const Modification = ({ tasks, activeCollection, activeScreen, createTask, navigation }) => {

    const [ collection, setCollection ] = useState(tasks[activeCollection].name);
    const [ newCollection, setNewCollection ] = useState('');
    const [ task, setTask ] = useState('');

    const handleSubmit = () => {
        if (collection === '' || task === '') {
            alert("Fill all fields");
        } else {
            const details = {
                name: collection,
                data: {
                    title: task
                }
            }
            createTask(details);
        }
        navigation.navigate('Tasks');
    }

    useEffect(()=> {
        setCollection(tasks[activeCollection].name)
        console.log(activeScreen);
    })
    
    return (
        <View style={taskStyles.body}>
            {activeScreen === "Collections" ? (
            <>
                <Text style={taskStyles.head}>Add a Collection</Text>
                <View style={modStyles.inputSection}>
                    <Text style={modStyles.label}>Collection</Text>
                    <TextInput 
                        style={modStyles.input}
                        placeholder="eg. Grocery List"
                        placeholderTextColor={colors.placeholder}
                        selectionColor={colors.tertiary}
                        value={collection}
                        onChangeText={text => setCollection(text)}
                    />
                </View>

                <View style={modStyles.inputSection}>
                    <TouchableOpacity onPress={handleSubmit} style={modStyles.button}>
                        <Text style={modStyles.buttonText}>Create Collection</Text>
                    </TouchableOpacity>
                </View>
            </>
            ) : (
            <>
                <Text style={taskStyles.head}>Add a task</Text>
                <Text style={taskStyles.text}>To add task to an existing collection, select it in the collection list and add task. Otherwise type name to create a new collection and task.</Text>
                <View style={modStyles.inputSection}>
                    <Text style={modStyles.label}>Collection</Text>
                    <TextInput 
                        style={modStyles.input}
                        placeholder="eg. Grocery List"
                        placeholderTextColor={colors.placeholder}
                        selectionColor={colors.tertiary}
                        value={collection}
                        onChangeText={text => setCollection(text)}
                    />
                </View>
                <View style={modStyles.inputSection}>
                    <Text style={modStyles.label}>Task</Text>
                    <TextInput 
                        style={modStyles.input}
                        placeholder="eg. Purchase cotton napkins"
                        placeholderTextColor={colors.placeholder}
                        selectionColor={colors.tertiary}
                        value={task}
                        onChangeText={text => setTask(text)}
                    />
                </View>
                <View style={modStyles.inputSection}>
                    <TouchableOpacity onPress={handleSubmit} style={modStyles.button}>
                        <Text style={modStyles.buttonText}>Create Task</Text>
                    </TouchableOpacity>
                </View>
            </>
            )}
        </View>
    );
};

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection,
  activeScreen: state.task.activeScreen
});

export default connect(mapStateToProps, {createTask})(Modification);
