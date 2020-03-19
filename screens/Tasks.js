import React from 'react';
import {View, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
// Redux
import { connect } from 'react-redux';

// Styles
import { taskStyles, collectionStyles } from '../shared/appStyles';

import { setActiveScreen } from '../actions/taskActions';

const Tasks = ({ tasks, activeCollection, setActiveScreen }) => {
    const collection = tasks[activeCollection];
    setActiveScreen("Tasks");

    return (
        <View style={taskStyles.body}>
            {collection ? (
            <>
                <Text style={taskStyles.head}>{collection.name}</Text>
                <Text style={taskStyles.text}>You have {collection.data.length} tasks</Text>

                {collection.data.length ? (
                <>
                    <View style={collectionStyles.set}>
                        {collection.data.map((task, index) => {
                            return(
                                <View key={index} onPress={() => alert("View collection items")} style={collectionStyles.item}>
                                    <Text style={collectionStyles.title}>{task.title}</Text>
                                    <Text style={collectionStyles.sub}></Text>
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
                    <MaterialCommunityIcons style={taskStyles.null} color="red" name='null' />
                </View>
                </>
            )
                
            }
            

        </View>
    );
}

const mapStateToProps = state => ({
    tasks: state.task.tasks,
    activeCollection: state.task.activeCollection
})

export default connect(mapStateToProps, {setActiveScreen})(Tasks);