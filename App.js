import * as React from 'react';
import { View} from 'react-native';
import HomeScreen from 'HomeScreen';
import SummaryScreen from 'SummaryScreen';
import AppHeader from 'AppHeader';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
