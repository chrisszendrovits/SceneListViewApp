/**
 * SceneMain
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Navigator, StyleSheet, TouchableOpacity  } from 'react-native';

var appStyles = require('../styles/app_styles');

class SceneMain extends Component
{
    constructor(props)
    {
        super(props);
    }

    _navigate() {
        this.props.navigator.push({id: 2,});
    }

    static get defaultProps() {
        return {
            title: 'Main Scene'
        };
    }

    render() {
        return (
            <View style={appStyles.sceneContainer}>
                <View style={appStyles.titleContainer}>
                    <Text style={appStyles.title}>Scene Navigation App</Text>
                    <View style={appStyles.sceneTitleContainer}>
                        <Text style={appStyles.sceneName}>Scene:</Text>
                        <Text style={appStyles.sceneName}>{this.props.title}</Text>
                    </View>
                </View>
                <View style={appStyles.mainContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
                        <TouchableOpacity onPress={ () => this._navigate() }>
                            <View style={appStyles.selectUserButton}>
                                <Text style={appStyles.selectUserText}>Find User</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

module.exports = SceneMain;
