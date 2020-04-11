import React, { useState } from 'react';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import VideoChat from '.././VideoChat';
import About from '.././About';
import Room from '.././Room';

const Routes = (props) => {

    return (
        <Switch>
          <Route exact path='/' component={ VideoChat } />
          {/* <Route path='/:roomName' 
          render={() =>
            (token ?
              (<About />)
              : (<Redirect to="/" />))} /> */}
              <Route path='/:roomName' component={ About } />
          {/* <Route 
            path='/profile' 
            render={() => 
              (loggedIn ? 
              (<Profile currentUser={props.user} loggedIn={props.loggedIn}/>) : (<Redirect to="/signup"/>))}/> */}
        </Switch>
      );
    }
    
    export default Routes;
    