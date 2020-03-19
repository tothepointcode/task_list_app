import React, {useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

// Redux
import { connect } from "react-redux";
import { openCollection, setActiveScreen } from '../actions/taskActions';

// Styles
import { taskStyles, collectionStyles } from "../shared/appStyles";

const Collections = ({ tasks, navigation, openCollection, setActiveScreen }) => {
    setActiveScreen("Collections");

  return (

    <View style={taskStyles.body}>
        <Text style={taskStyles.head}>Collections</Text>
        <Text style={taskStyles.text}>You have {tasks.length} collections</Text>
        {tasks.length ? (
        <View style={collectionStyles.set}>
            {tasks.map((collection, index) => {
                return(
                    <TouchableOpacity key={index} onPress={() => openCollection(navigation, index)} style={collectionStyles.item}>
                        <Text style={collectionStyles.title}>{collection.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
        ) : (
        <>
            <View style={taskStyles.nullBody}>
                <MaterialCommunityIcons style={taskStyles.null} color="red" name='null' />
            </View>
        </>
        )}
        

    </View>
  );
};

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection
});

export default connect(mapStateToProps, {openCollection, setActiveScreen})(Collections);
