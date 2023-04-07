import {
    View, Image
} from 'react-native';
import { Card, ListItem, Text, Button, Icon, Avatar, Overlay, Input, PricingCard } from 'react-native-elements'
import Styles from '../../css/Styles';

export default Modal = (props) => {
    const { isVisible, modalData, toggleOverlay } = props;
    return (
        <Overlay overlayStyle={Styles.modalStyle} isVisible={isVisible} onBackdropPress={() => props.toggleOverlay(!isVisible)}>
            <View>
                <Avatar source={{ uri: modalData?.picture?.medium }} rounded size="large" />
                <ListItem.Title>{modalData?.name?.first} {modalData?.name?.last}</ListItem.Title>
                <ListItem.Subtitle>{modalData?.cell}</ListItem.Subtitle>
                <ListItem.Subtitle>{modalData?.email}</ListItem.Subtitle>
                <ListItem.Subtitle>{modalData?.location?.city}</ListItem.Subtitle>
                <ListItem.Subtitle>{modalData?.login?.uuid}</ListItem.Subtitle>
                <Card.Divider />
                <Button
                    onPress={() => props.toggleOverlay(!isVisible)}
                    icon={<Icon name='close' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Close' />
            </View>
        </Overlay>
    );
}
