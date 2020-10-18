import { StyleSheet, Dimensions } from 'react-native';
const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303E45'
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    todoText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FF9B31'
    },
    todoCount: {
        fontSize: 35,
        color: '#FF9B31'
    },
    emptyComponent:{
        fontSize: 14,
        color: 'white',
        textAlign: 'center'

    }
})
const todo_input = StyleSheet.create ({
    inputContainer: {
        backgroundColor: '#E0E0E0',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    container: {
        backgroundColor: '#A7B6BD',
        padding: 10,
        margin: 10,
        borderRadius: 5
    }, 
    buttonContainer: {
        backgroundColor: '#4A636E',
        padding: 10,
        margin: 10,
        width: Dimensions.get('window').width / 2.5,
        alignSelf: 'center',
        borderRadius: 5
    },
    buttontext: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

const todo_card = StyleSheet.create({
    container: {
        backgroundColor: '#a7b6bd',
        padding: 8,
        margin: 5,
        borderRadius: 7
    },
    text: {
        fontSize: 18
    }
})

export { main, todo_input, todo_card };