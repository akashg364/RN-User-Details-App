import {
    View,
    Text
} from 'react-native';

import Styles from '../../css/Styles';

export default DataNotFound = (props) => {
    const { dataLength } = props;
    return (
        dataLength === 0 ? (
            <View style={Styles.container}>
                <Text>Data not found...</Text>
            </View>
        ) : null
    );
}