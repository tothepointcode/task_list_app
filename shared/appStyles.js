import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#000',
    secondary: '#222',
    tertiary: '#f3f3f3',
    placeholder: '#999'
}

export const taskStyles = StyleSheet.create({
    tab: {
        backgroundColor: colors.primary,
        height: 60
    },
    body: {
        backgroundColor: colors.primary,
        padding: 15,
        flex: 1,
        margin: 0
    },
    text: {
        color: colors.tertiary
    },
    head: {
        color: colors.tertiary,
        fontSize: 22,
        paddingVertical: 5,
        letterSpacing: 1
    }
});

export const collectionStyles = StyleSheet.create({
    item: {
        backgroundColor: colors.secondary,
        padding: 15,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 15
    },
    title: {
        color: colors.tertiary,
        fontSize: 18
    },
    set: {
        margin: 15,
        marginTop: 20
    }
})

export const modStyles = StyleSheet.create({
    inputSection: {
        marginVertical: 5
    },
    input: {
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderColor: colors.tertiary,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: colors.tertiary
    },
    label: {
        color: colors.tertiary,
        padding: 10
    },
    button: {
        backgroundColor: colors.tertiary,
        marginVertical: 20,
        borderRadius: 15
    },
    buttonText: {
        padding: 15,
        textAlign: "center"
    }
})

