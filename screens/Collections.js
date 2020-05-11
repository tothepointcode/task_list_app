import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

// Redux
import { connect } from 'react-redux';
import { openCollection, createCollection, editCollection, deleteCollection } from '../actions/taskActions';

// Styles
import { taskStyles, collectionStyles, modStyles } from '../shared/appStyles';

const Collections = ({
  tasks,
  navigation,
  openCollection,
  createCollection,
  editCollection,
  deleteCollection,
  colors,
}) => {
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

  const toggleShow = (value, setValue) => {
    if (value) {
      setValue(false);
      setEditMode(false);
      setNewCollection();
    } else {
      setValue(true);
    }
  };

  const { primary, secondary, tertiary, placeholder, alternative } = colors;

  return (
    <ScrollView style={[taskStyles.body, { backgroundColor: primary }]}>
      <View style={collectionStyles.header}>
        <Text style={[collectionStyles.head, { color: tertiary }]}>Collections</Text>
        <TouchableOpacity
          onPress={() => toggleShow(showForm, setShowForm)}
          style={[collectionStyles.plusButton, { backgroundColor: showForm ? 'red' : secondary }]}
        >
          <AntDesign style={[collectionStyles.plus, { color: tertiary }]} name={showForm ? 'close' : 'plus'} />
        </TouchableOpacity>
      </View>
      <Text style={[taskStyles.text, { color: tertiary }]}>You have {tasks.length} collections</Text>

      {showForm && (
        <>
          <View style={modStyles.inputSection}>
            <Text style={[modStyles.label, { color: tertiary }]}>Collection Name</Text>
            <TextInput
              style={[modStyles.input, { color: tertiary, backgroundColor: secondary, borderColor: tertiary }]}
              placeholder="eg. Shopping List"
              placeholderTextColor={placeholder}
              selectionColor={tertiary}
              value={newCollection}
              onChangeText={(text) => setNewCollection(text)}
            />
          </View>

          <View style={modStyles.inputSection}>
            {editMode ? (
              <TouchableOpacity onPress={handleSubmit} style={[modStyles.button, { backgroundColor: tertiary }]}>
                <Text style={[modStyles.buttonText, { color: primary }]}>Update Collection</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSubmit} style={[modStyles.button, { backgroundColor: tertiary }]}>
                <Text style={[modStyles.buttonText, { color: primary }]}>Create Collection</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
      {tasks.length ? (
        <View style={collectionStyles.set}>
          {tasks.map((collection, index) => {
            return (
              <View key={index} style={[collectionStyles.group, {backgroundColor: alternative}]}>
                <TouchableOpacity
                  key={index}
                  onPress={() => openCollection(navigation, index)}
                  style={[collectionStyles.item, {backgroundColor: secondary}]}
                >
                  <Text style={[collectionStyles.title, {color: tertiary}]}>{collection.name}</Text>
                </TouchableOpacity>
                <View style={collectionStyles.header}>
                  <TouchableOpacity
                    onPress={() => handleEdit(index)}
                    style={[taskStyles.sub, { paddingHorizontal: 20 }]}
                  >
                    <AntDesign style={[taskStyles.head, taskStyles.edit, {color: tertiary}]} name="edit" />
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
            <MaterialCommunityIcons style={[taskStyles.null, {color: secondary}]} name="null" />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
  activeCollection: state.task.activeCollection,
  colors: state.task.colorSet,
});

export default connect(mapStateToProps, { openCollection, createCollection, deleteCollection, editCollection })(
  Collections,
);
