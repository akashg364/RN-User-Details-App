import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, ListItem, Avatar, Input } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { fetchUserDetails } from '../store/actions/userActions';

import Styles from '../css/Styles';
import { themeColor } from '../css/Theme';

import Modal from '../components/Modal';
import Loader from '../components/Loader';
import DataNotFound from '../components/DataNotFound';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 5,
            limit: 5,
            loadMoreData: true,
            loadMoreIndicator: false,
            localStateData: {
                isLoading: true,
                userData: []
            },
            isVisible: false,
            modalData: []
        }
    }

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        if (this.state.pageSize !== 5) {
            this.setState({
                loadMoreIndicator: true,
            })
        }
        this.props.fetchUserDetails({
            pageSize: this.state.pageSize,
        }).then(() => {
            this.setState({
                localStateData: {
                    isLoading: false,
                    userData: this.props.userObj.userData
                },
                pageSize: this.state.pageSize + this.state.limit,
                loadMoreData: true,
                loadMoreIndicator: false,
            })
        })
    }

    handleSearch = (value) => {
        let newArrSet;
        if (value !== "") {
            newArrSet = this.state.localStateData.userData.filter(e => e.name.first.toLowerCase().includes(value.toLowerCase()) || e.name.last.toLowerCase().includes(value.toLowerCase()))
        } else {
            newArrSet = this.props.userObj.userData;
        }
        this.setState({
            localStateData: {
                userData: newArrSet
            }
        })
    }

    userListComponent = () => {
        if (this.state.localStateData.isLoading) {
            return (<Loader isLoading={this.state.localStateData.isLoading} />);
        } else if (this.state.localStateData.userData.length > 0) {
            return (this.state.localStateData.userData.map((u, i) => {
                return (
                    <Card key={i} containerStyle={Styles.cardContainer} >
                        <ListItem key={i} bottomDivider onPress={() => this.setState({ isVisible: true, modalData: u })}>
                            <Avatar source={{ uri: u.picture.medium }} rounded size="large" />
                            <ListItem.Content>
                                <ListItem.Title>{u.name.first} {u.name.last}</ListItem.Title>
                                <ListItem.Subtitle><MaterialCommunityIcons name="phone" color={themeColor.secondary} size={18} /> {u.cell}</ListItem.Subtitle>
                                <ListItem.Subtitle><MaterialCommunityIcons name="email-open-outline" color={themeColor.secondary} size={18} /> {u.email}</ListItem.Subtitle>
                                <ListItem.Subtitle><Ionicons name="md-location-outline" color={themeColor.secondary} size={18} /> {u.location.city}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    </Card>
                );
            }))
        } else {
            return (<DataNotFound dataLength={this.state.localStateData.userData.length} />);
        }
    }

    render() {
        const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
            const paddingToBottom = 40;
            let result = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
            //true if the end is reached other wise false
            return result;
        };
        return (
            <ScrollView style={Styles.mainContainer}
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent) && this.state.loadMoreData) {
                        //prevent multiple hits for same page number
                        this.setState({
                            loadMoreData: false
                        })
                        this.fetchUserData();
                    }
                }}
            >
                <View style={Styles.container}>
                    <Input
                        placeholder="Search User"
                        leftIcon={{ type: 'font-awesome', name: 'search' }}
                        containerStyle={Styles.inputfield}
                        onChangeText={value => this.handleSearch(value)}
                    />
                    {this.userListComponent()}
                </View>
                {this.state.loadMoreIndicator ? <Loader isLoading={this.state.loadMoreIndicator} /> : null}
                <Modal isVisible={this.state.isVisible} modalData={this.state.modalData} toggleOverlay={(visible) => this.setState({ isVisible: visible })} />
            </ScrollView>
        );
    }
};

function mapStateToProps(state) {
    return {
        userObj: state.userReducer,
    };
}
const mapDispatchToProps = {
    fetchUserDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
