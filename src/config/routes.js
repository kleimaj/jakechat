import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VideoChat from '.././VideoChat';
import Room from '.././Room';

const Routes = (props) => {

    return (
        <Switch>
          <Route exact path='/' component={ VideoChat } />
          <Route path='/:roomName' component={ Room } />
        </Switch>
      );
    }
    
    export default Routes;
    