/**
 * SceneNavigationApp
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, TouchableOpacity } from 'react-native';

var SceneListView = require('./scenes/scene_list_view');
var SceneMain = require('./scenes/scene_main');

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
    snapVelocity: 8,
    edgeHitWidth: SCREEN_WIDTH,
});

// Specify transition scene animation preferences
var CustomSceneConfig = Object.assign({}, BaseConfig, {
    springTension: 100, // higher = faster transition
    springFriction: 1,
    gestures: {
        pop: CustomLeftToRightGesture,
    }
});

class SceneNavigationApp extends Component
{
    _renderScene(route, navigator)
    {
        if (route.id === 1) {
            return <SceneMain navigator={navigator} />
        }
        else if (route.id === 2) {
            return <SceneListView navigator={navigator} />
        }
    }

    _configureScene(route) {
        return CustomSceneConfig;
    }

    render() {
        return (
            <Navigator initialRoute={{id: 1, }}
                        renderScene={this._renderScene}
                        configureScene={this._configureScene} />
        );
    }
}

AppRegistry.registerComponent('SceneNavigationApp', () => SceneNavigationApp);
module.exports = SceneNavigationApp;
