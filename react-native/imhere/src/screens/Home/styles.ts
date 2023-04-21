import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#131016',
        flex: 1,
        padding: 42,
    },
    eventName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '200',
        marginTop: 48,
    },
    eventDate: {
        color: 'orange',
        fontSize: 28,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        height: 56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 18,
        flex: 1,
        marginRight: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 24,
    },
    emptyListText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    }
})