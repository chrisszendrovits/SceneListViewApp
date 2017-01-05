import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create(
{
    sceneContainer: {
        flex: 1,
        padding: 5,
        backgroundColor: '#ddd',
    },

    titleContainer: {
        padding: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    sceneName: {
        fontSize: 16,
        color: '#000',
        marginLeft: 5
    },

    sceneTitleContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    selectUserText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        margin: 10
    },

    selectUserButton: {
        width: 180,
        height: 50,
        margin: 15,
        backgroundColor: '#666',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10
    },

    findButtonContainer: {
         flexDirection: 'row',
        // flexDirection: 'column',
         justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 50
    }
});
