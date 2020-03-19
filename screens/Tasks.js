import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'
// Redux
import { connect } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

// Styles
import { taskStyles, collectionStyles } from '../shared/appStyles';

import { TouchableOpacity } from 'react-native-gesture-handler';


const Tasks = ({ tasks, activeCollection, deleteTask }) => {
    const collection = tasks[activeCollection];

    return (
        <ScrollView style={taskStyles.body}>
            {collection ? (
            <>
                <Text style={taskStyles.head}>{collection.name}</Text>
                <Text style={taskStyles.text}>You have {collection.data.length} tasks</Text>

                {collection.data.length ? (
                <>
                    <View style={collectionStyles.set}>
                        {collection.data.map((task, index) => {
                            return(
                                <View key={index} onPress={() => alert("Edit task")} style={taskStyles.item}>
                                    <Text style={taskStyles.title}>{task.title}</Text>
                                    <TouchableOpacity onPress={() => deleteTask(task.title, index)} style={taskStyles.sub}>
                                        <AntDesign style={[taskStyles.head, taskStyles.bin]} name="delete"/>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                </>
                ) : (
                <></>
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
    activeCollection: state.task.activeCollection
})

export default connect(mapStateToProps, {deleteTask})(Tasks);