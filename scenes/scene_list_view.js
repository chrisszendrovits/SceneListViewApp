/**
 * SceneListView
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Navigator, ListView, StyleSheet, TouchableOpacity, Image  } from 'react-native';

var appStyles = require('../styles/app_styles');

class SceneListView extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            jsonUrl: 'http://chrisszendrovits.com/Examples/SceneNavigationApp/data.json',
            userData: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,}),
        };

    }

    static get defaultProps() {
        return {
            title: 'Fetech User Data Scene'
        };
    }

    _navigate() {
        this.props.navigator.push({id: 1,});
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData()
    {
        var that = this;

        fetch(this.state.jsonUrl, {method: "GET"})
            .then((response) => response.json())
            .then((responseData) => {
                that.setState({
                    userData: that.state.userData.cloneWithRows(responseData)
                });
            })
            .done();
    }

    render() {
        return (
            <View style={appStyles.sceneContainer}>
                <View style={appStyles.titleContainer}>
                    <Text style={appStyles.title}>User List View</Text>
                    <View style={appStyles.sceneTitleContainer}>
                        <Text style={appStyles.sceneName}>Scene:</Text>
                        <Text style={appStyles.sceneName}>{this.props.title}</Text>
                    </View>
                </View>
                <View style={appStyles.mainContainer}>
                    <ListView dataSource={this.state.userData}
                                renderRow={this.renderUserData}
                                style={listStyles.listContainer} />
                    <View style={appStyles.findButtonContainer}>
                        <TouchableOpacity onPress={ () => this._navigate() }>
                            <View style={appStyles.selectUserButton}>
                                <Text style={appStyles.selectUserText}>Back</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    renderUserData(user) {
        return (
            <View style={listStyles.listRow}>
                <Image source={{uri: user.picture.thumbnail}}
                        style={listStyles.photo} />
                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={listStyles.text}>{user.name.first}</Text>
                        <Text style={[listStyles.text, listStyles.marginText]}>{user.name.last}</Text>
                    </View>
                    <Text>{user.email}</Text>
                </View>
            </View>
        );
    }
}

const listStyles = StyleSheet.create({
    listContainer: {
        height: 410,
    },

    listRow: {
        flexDirection: 'row',
        marginTop: 5,
        paddingBottom: 5,
        borderColor: '#bbb',
        borderBottomWidth: 1,
    },

    marginText: {
        marginLeft: 5,
    },

    text: {
        fontSize: 16,
        color: '#000'
    },

    photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
    },

    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});

module.exports = SceneListView;
