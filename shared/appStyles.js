import { StyleSheet } from 'react-native';

import store from '../store';
const theme = store.getState().task.colorSet;

let colorList = {};

// if (theme === 'dark') {
//   colorList = {
//     primary: '#000',
//     secondary: '#222',
//     tertiary: '#f3f3f3',
//     placeholder: '#999',
//     alternative: '#111',
//   };
// } else {
//   colorList = {
//     primary: '#fff',
//     secondary: '#eee',
//     tertiary: '#121212',
//     placeholder: '#999',
//     alternative: '#efefef',
//   };
// }

export const colors = {
  ...theme,
};

export const taskStyles = StyleSheet.create({
  tab: {
    backgroundColor: colors.primary,
    height: 60,
    borderTopWidth: 0,
  },
  body: {
    backgroundColor: colors.primary,
    padding: 25,
    flex: 1,
    margin: 0,
  },
  text: {
    color: colors.tertiary,
  },
  head: {
    color: colors.tertiary,
    fontSize: 22,
    paddingVertical: 5,
    letterSpacing: 1,
  },
  null: {
    fontSize: 170,
    color: colors.secondary,
  },
  nullBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  item: {
    backgroundColor: colors.secondary,
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.tertiary,
    fontSize: 18,
    width: '80%',
  },
  sub: {
    padding: 10,
  },
  bin: {
    color: 'red',
  },
});

export const collectionStyles = StyleSheet.create({
  item: {
    backgroundColor: colors.secondary,
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  title: {
    color: colors.tertiary,
    fontSize: 18,
  },
  set: {
    // margin: 15,
    marginTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  head: {
    color: colors.tertiary,
    fontSize: 22,
    letterSpacing: 1,
  },
  plusButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 15,
  },
  plus: {
    color: colors.tertiary,
    alignItems: 'center',
    fontSize: 22,
  },
  group: {
    backgroundColor: colors.alternative,
    marginVertical: 5,
    borderRadius: 15,
  },
});

export const modStyles = StyleSheet.create({
  inputSection: {
    marginVertical: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.tertiary,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: colors.tertiary,
  },
  label: {
    color: colors.tertiary,
    padding: 10,
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: colors.tertiary,
    marginVertical: 20,
    borderRadius: 15,
  },
  buttonText: {
    padding: 15,
    textAlign: 'center',
    color: colors.primary,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    color: colors.tertiary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: colors.tertiary,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: colors.tertiary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export const headerStyles = StyleSheet.create({
  view: {
    margin: 10,
  },
  text: {
    color: colors.tertiary,
    textTransform: 'capitalize',
  },
});

export const progressStyles = StyleSheet.create({
  progress: {
    backgroundColor: colors.secondary,
    height: 7,
    margin: 10,
    marginLeft: 0,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.secondary,
    width: '88%',
  },
  bar: {
    backgroundColor: colors.tertiary,
    width: '50%',
    height: '100%',
    borderRadius: 25,
  },
  percentage: {
    color: colors.tertiary,
    width: '12%',
  },
  field: {
    flexDirection: 'row',
  },
});
