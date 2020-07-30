/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';

const App = () => (
  <Router>
    <Stack key="root">
      <Tabs
        key="tabbar"
        routeName="tabbar">
        <Stack
          key="tab_1"
          title="Tab #1"
          tabBarLabel="TAB #1">
          <Scene
            key="tab_1_1"
            component={TabView}
            title="Tab #1_1"
          />
        </Stack>

        <Stack key="tab_2" title="Tab #2" initial>
          <Scene
            key="tab_2_1"
            component={TabView}
            title="Tab #2_1"
          />
        </Stack>

        <Stack key="tab_3" title="Tab #3">
          <Scene
            key="tab_3_1"
            component={TabView}
          />
        </Stack>
      </Tabs>
    </Stack>
  </Router>
);


class TabView extends React.Component{
  render(){
      return(
          <View>
              <Text>This is tab view</Text>
              <Icon name="add-circle-outline" size={90} color="green"></Icon>
              <Icon name="add-circle" size={90} color="blue"></Icon>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
