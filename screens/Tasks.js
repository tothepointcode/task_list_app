import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

// Redux
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../actions/taskActions';

// Styles
import { taskStyles, collectionStyles, modStyles } from '../shared/appStyles';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Progress from '../shared/Progress';

const Tasks = ({ tasks, activeCollection, deleteTask, editTask, progressData, colors }) => {
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
  };

  const handleEdit = (index) => {
    setTask(tasks[activeCollection].data[index].title);
    setEditIndex(index);
    setShowForm(true);
  };

  const toggleShow = (value, setValue) => {
    if (value) {
      setValue(false);
      setEditIndex();
    } else {
      setValue(true);
    }
  };

  const calculatePercentage = () => {
    let length = progressData[activeCollection].length;
    let done = progressData[activeCollection].done;
    let percentage = Math.round((done / length) * 100);

    return `${percentage}%`;
  };

  const { primary, secondary, tertiary, placeholder, alternative } = colors;

  return (
    <ScrollView style={[taskStyles.body, { backgroundColor: primary }]}>
      {collection ? (
        <>
          <View style={collectionStyles.header}>
            <Text style={[taskStyles.head, { color: tertiary }]}>{collection.name}</Text>
            <TouchableOpacity
              onPress={() => toggleShow(showForm, setShowForm)}
              style={[collectionStyles.plusButton, { backgroundColor: 'red', display: showForm ? 'flex' : 'none' }]}
            >
              <AntDesign style={[collectionStyles.plus, { color: tertiary }]} name="close" />
            </TouchableOpacity>
          </View>

          {showForm && (
            <>
              <View style={modStyles.inputSection}>
                <Text style={[modStyles.label, { color: tertiary }]}>Task</Text>
                <TextInput
                  style={[modStyles.input, { color: tertiary, backgroundColor: secondary, borderColor: tertiary }]}
                  placeholder="eg. Tomato sauce"
                  placeholderTextColor={placeholder}
                  selectionColor={tertiary}
                  value={task}
                  onChangeText={(text) => setTask(text)}
                />
              </View>

              <View style={modStyles.inputSection}>
                <TouchableOpacity onPress={handleSubmit} style={[modStyles.button, { backgroundColor: tertiary }]}>
                  <Text style={[modStyles.buttonText, { color: primary }]}>Update Task</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {collection.data.length ? (
            <>
              <Progress value={calculatePercentage()} />
              <View style={collectionStyles.set}>
                {collection.data.map((task, index) => {
                  return (
                    <View key={index} style={[taskStyles.item, { backgroundColor: secondary }]}>
                      <Text onPress={() => handleEdit(index)} style={[taskStyles.title, { color: tertiary }]}>
                        {task.title}
                      </Text>
                      <TouchableOpacity onPress={() => deleteTask(task.title, index)} style={taskStyles.sub}>
                        <AntDesign style={[taskStyles.head, taskStyles.bin]} name="delete" />
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </>
          ) : (
            <>
              <Text style={[taskStyles.text, { color: tertiary }]}>You have no tasks</Text>
            </>
          )}
        </>
      ) : (
        <>
          <Text style={[taskStyles.head, { color: tertiary }]}>You have no collections </Text>
          <Text style={[taskStyles.text, { color: tertiary }]}>You have no tasks too</Text>
          <View style={[taskStyles.nullBody]}>
            <MaterialCommunityIcons style={[taskStyles.null, { color: secondary }]} name="null" />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection,
  progressData: state.task.progressData,
  colors: state.task.colorSet,
});

export default connect(mapStateToProps, { deleteTask, editTask })(Tasks);
