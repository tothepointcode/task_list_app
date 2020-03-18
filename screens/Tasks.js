import React from 'react';
import {View, Text} from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { taskStyles, collectionStyles } from '../shared/appStyles';

const Tasks = ({ tasks, activeCollection }) => {
    const collection = tasks[activeCollection];

    return (
        <View style={taskStyles.body}>
            <Text style={taskStyles.head}>{collection.name}</Text>
            <Text style={taskStyles.text}>You have {collection.data.length} tasks</Text>

            <View style={collectionStyles.set}>
                {collection.data.map(task => {
                    return(
                        <View onPress={() => alert("View collection items")} style={collectionStyles.item}>
                            <Text style={collectionStyles.title}>{task.title}</Text>
                        </View>
                    );
                })}
            </View>

        </View>
    );
}

const mapStateToProps = state => ({
    tasks: state.task.tasks,
    activeCollection: state.task.activeCollection
})

export default connect(mapStateToProps, {})(Tasks);