import React, { Component } from 'react';
import { Alert, BackHandler, Text } from 'react-native';
import { ActionConst, Actions, Router, Scene, Stack } from 'react-native-router-flux';
import { inject, observer } from 'mobx-react';
import Login from "@login";
import Home from "@home"

@inject('authStore')
@observer
class RootView extends Component {

  render() {
    const { authStore } = this.props;
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" hideNavBar={true} />
          <Scene key="home" component={Home} />
        </Stack>
      </Router>
    );
  }
}

export default RootView;