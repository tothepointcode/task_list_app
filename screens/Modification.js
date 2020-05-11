import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

// Redux
import { connect } from 'react-redux';
import { createTask } from '../actions/taskActions';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Styles
import { taskStyles, modStyles } from '../shared/appStyles';

const Modification = ({ tasks, createTask, navigation, colors }) => {
  const [collection, setCollection] = useState('');
  const [task, setTask] = useState('');
  const [collectionList, setCollectionList] = useState([]);

  const handleSubmit = () => {
    if (collection === '' || task === '') {
      alert('Fill all fields');
    } else {
      const details = {
        collectionId: collection,
        data: {
          title: task,
        },
      };
      createTask(details);
    }
    setTask('');
    navigation.navigate('Tasks');
  };

  useEffect(() => {
    if (tasks.length !== 0) {
      let array = [];
      tasks.forEach((collection, index) => {
        array.push({
          label: collection.name,
          value: index,
        });
      });
      setCollectionList(array);
    }
  }, [tasks]);

  const { primary, secondary, tertiary, placeholder, alternative } = colors;

  return (
    <ScrollView style={[taskStyles.body, { backgroundColor: primary }]}>
      <>
        <Text style={[taskStyles.head, { color: tertiary }]}>Add a task</Text>

        {tasks.length ? (
          <>
            <View style={modStyles.inputSection}>
              <Text style={[modStyles.label, { color: tertiary }]}>Collection</Text>
              <RNPickerSelect
                placeholder={{
                  label: 'Select a collection...',
                  value: null,
                  color: placeholder,
                }}
                items={collectionList}
                onValueChange={(_, index) => {
                  setCollection(index - 1);
                }}
                placeholderTextColor={placeholder}
                style={{
                  inputAndroid: {
                    borderColor: tertiary,
                    backgroundColor: secondary,
                    color: tertiary,
                    borderWidth: 1,
                    borderRadius: 15,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    paddingRight: 30,
                  },
                  inputIOS: {
                    borderColor: tertiary,
                    color: tertiary,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderRadius: 15,
                    paddingRight: 30,
                  },
                  iconContainer: {
                    top: 12,
                    right: 12,
                  },
                }}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                  return <Ionicons name="ios-arrow-down" size={24} color={placeholder} />;
                }}
              />
            </View>
            <View style={modStyles.inputSection}>
              <Text style={[modStyles.label, { color: tertiary }]}>Task</Text>
              <TextInput
                style={[modStyles.input, { color: tertiary, backgroundColor: secondary, borderColor: tertiary }]}
                placeholder="eg. Purchase cotton napkins"
                placeholderTextColor={placeholder}
                selectionColor={tertiary}
                value={task}
                onChangeText={(text) => setTask(text)}
              />
            </View>
            <View style={modStyles.inputSection}>
              <TouchableOpacity onPress={handleSubmit} style={[modStyles.button, { backgroundColor: tertiary }]}>
                <Text style={[modStyles.buttonText, { color: primary }]}>Create Task</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <Text style={[taskStyles.text, { color: tertiary }]}>Create a collection to add a task.</Text>
            <View style={taskStyles.nullBody}>
              <MaterialCommunityIcons style={[taskStyles.null, { color: secondary }]} name="null" />
            </View>
          </>
        )}
      </>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection,
  colors: state.task.colorSet,
});

export default connect(mapStateToProps, { createTask })(Modification);
