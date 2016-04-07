import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

import Tab from 'essence-tab';
import Icon from 'essence-icon';
import Menu from 'essence-menu';
import Image from 'essence-image';
import Input from 'essence-input';
import Toast from 'essence-toast';
import AppBar from 'essence-appbar';
import Button from 'essence-button';
import Navigation from 'essence-navigation';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider, Utils} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

// Components list

import AppHome from './pages/home';
import AppContact from './pages/contact';


class App extends React.Component {

  render() {
    return(
    	<div>
				<AppBar classes={'e-background-indigo-400'} style={{overflow: 'inherit'}}>					
					<Text className={'e-text-white'}>Header comun</Text>          
				</AppBar>
				{this.props.children}
    	</div>
    );
  }
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: AppHome },
  childRoutes: [
    { path: 'home', component: AppHome },    
    { path: 'contact', component: AppContact },
  ]
}

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.querySelector('.app')
);