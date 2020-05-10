import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

// Redux
import { connect } from 'react-redux';
import { openCollection, createCollection, editCollection, deleteCollection } from '../actions/taskActions';

// Styles
import { taskStyles, collectionStyles, modStyles, colors } from '../shared/appStyles';

const Collections = ({ tasks, navigation, openCollection, createCollection, editCollection, deleteCollection }) => {
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState('');
  const [newCollection, setNewCollection] = useState('');

  const handleSubmit = () => {
    if (newCollection !== '') {
      if (editMode) {
        editCollection(editIndex, newCollection);
      } else {
        createCollection(newCollection);
      }
      setShowForm(false);
      setNewCollection('');
    }
  };

  const handleEdit = (index) => {
    setNewCollection(tasks[index].name);
    setEditIndex(index);
    setEditMode(true);
    setShowForm(true);
  };

  return (
    <ScrollView style={taskStyles.body}>
      <View style={collectionStyles.header}>
        <Text style={collectionStyles.head}>Collections</Text>
        <TouchableOpacity onPress={() => setShowForm(true)} style={collectionStyles.plusButton}>
          <AntDesign style={[collectionStyles.plus]} name="plus" />
        </TouchableOpacity>
      </View>
      <Text style={taskStyles.text}>You have {tasks.length} collections</Text>


      {showForm ? (
        <>
          <View style={modStyles.inputSection}>
            <Text style={modStyles.label}>Collection Name</Text>
            <TextInput
              style={modStyles.input}
              placeholder="eg. Shopping List"
              placeholderTextColor={colors.placeholder}
              selectionColor={colors.tertiary}
              value={newCollection}
              onChangeText={(text) => setNewCollection(text)}
            />
          </View>

          <View style={modStyles.inputSection}>
            {editMode ? (
              <TouchableOpacity onPress={handleSubmit} style={modStyles.button}>
                <Text style={modStyles.buttonText}>Update Collection</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSubmit} style={modStyles.button}>
                <Text style={modStyles.buttonText}>Create Collection</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      ) : (
        <></>
      )}
      {tasks.length ? (
        <View style={collectionStyles.set}>
          {tasks.map((collection, index) => {
            return (
              <View key={index} style={collectionStyles.group}>
                <TouchableOpacity
                  key={index}
                  onPress={() => openCollection(navigation, index)}
                  style={collectionStyles.item}
                >
                  <Text style={collectionStyles.title}>{collection.name}</Text>
                </TouchableOpacity>
                <View style={collectionStyles.header}>
                  <TouchableOpacity
                    onPress={() => handleEdit(index)}
                    style={[taskStyles.sub, { paddingHorizontal: 20 }]}
                  >
                    <AntDesign style={[taskStyles.head, taskStyles.edit]} name="edit" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => deleteCollection(index)}
                    style={[taskStyles.sub, { paddingHorizontal: 20 }]}
                  >
                    <AntDesign style={[taskStyles.head, taskStyles.bin]} name="delete" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <>
          <View style={taskStyles.nullBody}>
            <MaterialCommunityIcons style={taskStyles.null} name="null" />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection,
});

export default connect(mapStateToProps, { openCollection, createCollection, deleteCollection, editCollection })(
  Collections,
);
