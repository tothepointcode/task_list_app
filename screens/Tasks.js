import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

// Redux
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../actions/taskActions';

// Styles
import { taskStyles, collectionStyles, modStyles, colors } from '../shared/appStyles';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Progress from '../shared/Progress';

const Tasks = ({ tasks, activeCollection, deleteTask, editTask, progressData }) => {
    const collection = tasks[activeCollection];

    const [showForm, setShowForm] = useState(false);
    const [editIndex, setEditIndex] = useState('');
    const [task, setTask] = useState('');

    const handleSubmit = () => {
        if (task !== '') {
            editTask(editIndex, task);
            setShowForm(false);
            setTask('');
        }
    }

    const handleEdit = (index) => {
        setTask(tasks[activeCollection].data[index].title);
        setEditIndex(index);
        setShowForm(true);
    }

    const calculatePercentage = () => {
        let length = progressData[activeCollection].length;
        let done = progressData[activeCollection].done;
        let percentage = Math.round((done / length) * 100);

        return `${percentage}%`;
    }

    return (
        <ScrollView style={taskStyles.body}>
            {collection ? (
            <>
                <Text style={taskStyles.head}>{collection.name}</Text>

                {showForm ? (
                <>
                    <View style={modStyles.inputSection}>
                        <Text style={modStyles.label}>Task</Text>
                        <TextInput 
                            style={modStyles.input}
                            placeholder="eg. Tomato sauce"
                            placeholderTextColor={colors.placeholder}
                            selectionColor={colors.tertiary}
                            value={task}
                            onChangeText={text => setTask(text)}
                        />
                    </View>
                    
                    <View style={modStyles.inputSection}>
                        <TouchableOpacity onPress={handleSubmit} style={modStyles.button}>
                            <Text style={modStyles.buttonText}>Update Task</Text>
                        </TouchableOpacity> 
                    </View>
                </>) : (<></>)}

                {collection.data.length ? (
                <>
                    <Progress value={calculatePercentage()} />
                    <View style={collectionStyles.set}>
                        {collection.data.map((task, index) => {
                            return(
                                <View key={index} style={taskStyles.item}>
                                    <Text onPress={() => handleEdit(index)} style={taskStyles.title}>{task.title}</Text>
                                    <TouchableOpacity onPress={() => deleteTask(task.title, index)} style={taskStyles.sub}>
                                        <AntDesign style={[taskStyles.head, taskStyles.bin]} name="delete"/>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                </>
                ) : (
                <>
                    <Text style={taskStyles.text}>You have no tasks</Text>
                </>
                )} 
            </>
            ) : (
                <>
                <Text style={taskStyles.head}>You have no collections </Text>
                <Text style={taskStyles.text}>You have no tasks too</Text>
                <View style={taskStyles.nullBody}>
                    <MaterialCommunityIcons style={taskStyles.null} name='null' />
                </View>
                </>
            )    
            }
            

        </ScrollView>
    );
}

const mapStateToProps = state => ({
    tasks: state.task.tasks,
    activeCollection: state.task.activeCollection,
    progressData: state.task.progressData
})

export default connect(mapStateToProps, {deleteTask, editTask})(Tasks);