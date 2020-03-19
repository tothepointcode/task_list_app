import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

// Redux
import { connect } from "react-redux";
import { createTask } from '../actions/taskActions';
import {MaterialCommunityIcons} from '@expo/vector-icons'


// Styles
import { taskStyles, modStyles, colors } from "../shared/appStyles";

const Modification = ({ tasks, activeCollection, createTask, navigation }) => {

    const [ collection, setCollection ] = useState('');
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
        setTask('');
        navigation.navigate('Tasks');
    }

    useEffect(()=> {
        if (tasks.length !== 0) {
            setCollection(tasks[activeCollection].name)
        }
        console.log(tasks.length)
    })
    
    return (
        <ScrollView style={taskStyles.body}>
            <>
            <Text style={taskStyles.head}>Add a task</Text>

            {tasks.length ? (<>
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
            </>) : (
            <>
                <Text style={taskStyles.text}>Create a collection to add a task.</Text>
                <View style={taskStyles.nullBody}>
                    <MaterialCommunityIcons style={taskStyles.null} name='null' />
                </View>
            </>)}
                
            </>
        </ScrollView>
    );
};

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection
});

export default connect(mapStateToProps, {createTask})(Modification);
