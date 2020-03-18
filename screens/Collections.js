import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Redux
import { connect } from "react-redux";

// Styles
import { taskStyles, collectionStyles } from "../shared/appStyles";

const Collections = ({ tasks }) => {
  return (
    <View style={taskStyles.body}>
        <Text style={taskStyles.head}>Collections</Text>
        <Text style={taskStyles.text}>You have {tasks.length} collections</Text>

        <View style={collectionStyles.set}>
            {tasks.map((collection, index) => {
                return(
                    <TouchableOpacity key={index} onPress={() => alert("View collection items")} style={collectionStyles.item}>
                        <Text style={collectionStyles.title}>{collection.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>

    </View>
  );
};

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection
});

export default connect(mapStateToProps, {})(Collections);
