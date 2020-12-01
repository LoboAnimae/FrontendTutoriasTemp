import {Platform, StatusBar, StyleSheet} from 'react-native';
import cafeteria from "../../assets/cafeteria.jpg";

// Tutor/user styles
const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    mainProgram: {
        flex: 1
    },

    topContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '90%',
        paddingTop: 16,
        flexDirection: 'row',
    },
    middleContainer: {
        flex: 1,
        width: '100%',
        marginTop: '50%'
    },
    authorInfo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    authorPic: {
        height: 150,
        width: 150,
        borderRadius: 75,
        resizeMode: 'cover'
    },
    name: {
        fontSize: 18,
        fontWeight: '600'
    },
    bio: {
        textAlign: 'justify',
        width: '90%'
    },
    horizontalScroll: {
        paddingLeft: 16,
        flex: 1,
        flexWrap: 'wrap'
    },
    header: {
        alignSelf: 'flex-start',
        color: '#428AF8',
        fontSize: 20,
        marginBottom: 16
    },
});

export default styles;