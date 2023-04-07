import { StyleSheet } from 'react-native';
import { themeColor } from './Theme';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        justifyContent: 'center',
    },
    cardContainer: {
        marginVertical: 5,
        padding: 2,
        backgroundColor: themeColor.light,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: themeColor.secondary,
        elevation: 2,
    },
    modalStyle: {
        width: 300,
        height: 250,
    },
    inputfield: {
        width: 330,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: -5
    }
})
