import {
    View,
    ActivityIndicator
} from 'react-native';

import Styles from '../../css/Styles';
import { themeColor } from '../../css/Theme';

export default Loader = (props) => {
    const { isLoading } = props;
    return (
        isLoading ? (
            <View style={Styles.container}>
                <ActivityIndicator color={themeColor.success} size="large" />
            </View>
        ) : null
    );
}