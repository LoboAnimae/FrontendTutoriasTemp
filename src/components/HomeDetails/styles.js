import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    topContainer: {
        paddingTop: 16,
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '95%'
    },
    middleContainer:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '80%'
    },
    bottomContainer:{
        width: '100%'
    },
    similiarBooks: {
        marginTop: 32,
        width: '100%'
    },
    header: {
        alignSelf: 'flex-start',
        color: '#428AF8',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 8,
        marginTop: 16
    },
    bookImage: {
        height: 200,
        width: 150,
        justifyContent: 'center',
        borderRadius: 8,
        resizeMode: 'stretch'
    },
    author: {
        fontSize: 14,
        marginBottom: 4
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4
    },
    price: {
        fontSize: 12,
        marginBottom: 24
    },
    parragraph: {
        fontSize: 14,
        textAlign: 'justify',
        marginBottom: 16
    },
    bookInfo: {
        paddingLeft: 16,
        width: '60%',
        justifyContent: 'flex-start',
        paddingTop: 32
    },
    remove: {
        color: 'red'
    },
    add: {
        color: '#428AF8'
    },
    notes:{
        color:'yellow'
    },
    horizontalScroll: {
        flex: 1,
        flexWrap: 'wrap'
    },
    infoMessage: {
        alignSelf: 'center',
        color: 'grey',
        fontSize: 14,
        marginBottom: 16,
        marginTop: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        paddingTop: 16  
    }
});

export default styles;