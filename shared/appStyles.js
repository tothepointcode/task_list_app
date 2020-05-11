import { StyleSheet } from 'react-native';

export const taskStyles = StyleSheet.create({
  tab: {
    height: 60,
    borderTopWidth: 0,
  },
  body: {
    padding: 25,
    flex: 1,
    margin: 0,
  },
  text: {
   
  },
  head: {
    fontSize: 22,
    paddingVertical: 5,
    letterSpacing: 1,
  },
  null: {
    fontSize: 170,
  },
  nullBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  item: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
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
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
  },
  set: {
    marginTop: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  head: {
    fontSize: 22,
    letterSpacing: 1,
  },
  plusButton: {
    padding: 10,
    borderRadius: 15,
  },
  plus: {
    alignItems: 'center',
    fontSize: 22,
  },
  group: {
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
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  label: {
    padding: 10,
    paddingHorizontal: 0,
  },
  button: {
    marginVertical: 20,
    borderRadius: 15,
  },
  buttonText: {
    padding: 15,
    textAlign: 'center',
  },
});

export const headerStyles = StyleSheet.create({
  view: {
    margin: 10,
  },
  text: {
    textTransform: 'capitalize',
  },
});

export const progressStyles = StyleSheet.create({
  progress: {
    height: 7,
    margin: 10,
    marginLeft: 0,
    borderRadius: 25,
    borderWidth: 1,
    width: '88%',
  },
  bar: {
    width: '50%',
    height: '100%',
    borderRadius: 25,
  },
  percentage: {
    width: '12%',
  },
  field: {
    flexDirection: 'row',
  },
});
