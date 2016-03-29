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
import {
	Components,
	AppBarComponent,
	AppBottomSheet,
	AppButton,
	AppCard,
	AppChip,
	AppColors,
	AppDataTable,
	AppDialog,
	AppIcons,
	AppImage,
	AppInput,
	AppList,
	AppMenu,
	AppNavigation,
	AppPaper,
	AppProgress,
	AppSlider,
	AppSnackBar,
	AppStepper,
	AppSwitch,
	AppTab,
	AppToast,
	AppToolBar,
	AppTooltip,
	AppTouchPad,
} from './components/';

// Core components
import { AppCoreGridSystem, AppCoreDivider, AppCoreRippleInk, AppCoreTextTypography, AppCoreUtilities } from './components/core';

// Pages
import { AppHome, AppAbout, AppContact, AppGetStarted } from './pages/index';

let EssenceMenu = {
	'home': {
		title: 'Home'
	},
	'about': {
		title: 'About'
	},
	'get-started': {
		title: 'Getting started'
	},
	'contact': {
		title: 'Contact'
	}
};

let EssenceCoreMenu = {
	'core-grid-system': {
		title: 'Grid System'
	},
	'core-divider': {
		title: 'Divider'
	},
	'core-ripple-ink': {
		title: 'Ripple Ink'
	},
	'core-text-typography': {
		title: 'Text Typography'
	},
	'core-utilities': {
		title: 'Utilities'
	},
};

class AppNavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderEssenceMenu() {
		let self = this;
		let renderComponents = [];

		Object.keys(EssenceMenu).forEach(function(key) {
			var component = EssenceMenu[key];
			renderComponents.push(
				(
					<li key={'component-'+key}>
						<Link to={'/' + key}>
							<Block classes={'content e-left'}>
								<Text type={'small'}>{component.title}</Text>
							</Block>
						</Link>
					</li>
				)
			);
		});

		return renderComponents;
    }

    renderEssenceCoreMenu() {
		let self = this;
		let renderComponents = [];

		Object.keys(EssenceCoreMenu).forEach(function(key) {
			var component = EssenceCoreMenu[key];
			renderComponents.push(
				(
					<li key={'component-'+key}>
						<Link to={'/' + key}>
							<Block classes={'content e-left'}>
								<Text type={'small'}>{component.title}</Text>
							</Block>
						</Link>
					</li>
				)
			);
		});

		return renderComponents;
    }

    renderComponentsMenu() {
			let self = this;
			let renderComponents = [];

			Object.keys(Components).forEach(function(key) {
				var component = Components[key];
				renderComponents.push(
					(
						<ListItem key={'component-'+key}>
							<Link to={'/' + key}>
								<Block classes={'content e-left'}>
									<Text type={'small'}>{component.title}</Text>
								</Block>
							</Link>
						</ListItem>
					)
				);
			});

			return renderComponents;
    }

    render() {
      return (
  			<Navigation visible={this.props.visible}>
  				<Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
  					<Block type={'header'} className={'e-nav-header'} style={{lineHeight: '52px'}}>
  						<Text type={'a'} href={'#home'}>
  							<Image
  								width={'40px'}
  								height={'40px'}
  								style={{ verticalAlign: 'middle'}}
  								src={'./assets/img/essence_icon.png'} />
  							<Text type={'h2'} classes={'e-text-indigo-400 e-right'} style={{width: '74%', lineHeight: '45px'}}>
  								<Text>essence</Text>
  							</Text>
  						</Text>
  					</Block>
  					<List type={'navigation'} classes={'e-background-white'}>
  						<ListItem key={'component-md'}>
  							<Block classes={'group-list-title'}>
  								<Image src={'./assets/img/material-design.png'} height={'24px'} alt={'Material Design'} />
  								&nbsp;
  								<Text type={'small'}>
  									Material Design
  								</Text>
  							</Block>
  							<List type={'navigation'}>
  								{this.renderEssenceMenu()}
  							</List>
  						</ListItem>

  						<ListItem key={'component-core'}>
  							<Block classes={'group-list-title'}>
  								<Image src={'./assets/img/styles-b.png'} height={'24px'} alt={'Essence Core'} />
  								&nbsp;
  								<Text type={'small'}>
  									Essence Core
  								</Text>
  							</Block>
  							<List type={'navigation'}>
  								{this.renderEssenceCoreMenu()}
  							</List>
  						</ListItem>

  						<ListItem key={'component-components'}>
  							<Block classes={'group-list-title'}>
  								<Image src={'./assets/img/components.png'} height={'24px'} alt={'Components'} />
  								&nbsp;
  								<Text type={'small'}>
  									Components
  								</Text>
  							</Block>
  							<List type={'navigation'}>
  								{this.renderComponentsMenu()}
  							</List>
  						</ListItem>
  					</List>
  				</Block>
  			</Navigation>
      );
    }
}

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	search: 'close',
    	toast: false,
    	showSideBar: false,
    	content: <AppHome />,
      classes: ClassNames(
          this.props.classes,
          this.props.className
      ),
      AppBarTitle: false,
      essenceComponents: {}
    };
  }

  changeTitle(string) {
  	this.setState({
  		AppBarTitle: string.toString()
  	});
  }

  componentDidMount() {
  	let essenceComponents = this.state.essenceComponents;
		for (var objKey in EssenceMenu) { essenceComponents[objKey] = EssenceMenu[objKey]; }
		for (var objKey in EssenceCoreMenu) { essenceComponents[objKey] = EssenceCoreMenu[objKey]; }
		for (var objKey in Components) { essenceComponents[objKey] = Components[objKey]; }

		this.setState({
			essenceComponents: essenceComponents
		});
  }

  showSideBar() {
  	this.setState({
  		showSideBar: true
  	});
  }

  hideSideBar() {
  	this.setState({
  		showSideBar: false
  	});
  }

  renderSideBarButton() {
  	if (Utils.Client.documentSize() > 2) {
  		return;
  	}

  	return (
  		<Button
  			onClick={this.showSideBar.bind(this)}
  			className={'flat e-background-indigo-400 e-text-white e-left'}
  			icon={'navigation-menu'}
  			type={'primary'} />
  	);
  }

  renderContent() {
  	return this.props.children;
  }

  render() {
    return(
    	<div>
				<AppBar classes={'e-background-indigo-400'} style={{overflow: 'inherit'}}>
					{this.renderSideBarButton()}
					<Text className={'e-text-white'}>{this.state.AppBarTitle || 'Material Design Framework'}</Text>
				</AppBar>

				<AppNavigationMenu visible={this.state.showSideBar}/>

				{this.renderContent()}
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
    { path: 'about', component: AppAbout },
    { path: 'contact', component: AppContact },
    { path: 'get-started', component: AppGetStarted },
    { path: 'icons', component: AppIcons },
    { path: 'colors', component: AppColors },
    { path: 'appbar', component: AppBarComponent },
    { path: 'bottomsheet', component: AppBottomSheet },
    { path: 'button', component: AppButton },
    { path: 'card', component: AppCard },
    { path: 'chip', component: AppChip },
    { path: 'core-grid-system', component: AppCoreGridSystem },
    { path: 'core-divider', component: AppCoreDivider },
    { path: 'core-ripple-ink', component: AppCoreRippleInk },
    { path: 'core-text-typography', component: AppCoreTextTypography },
    { path: 'core-utilities', component: AppCoreUtilities },
    { path: 'dialog', component: AppDialog },
    { path: 'datatable', component: AppDataTable },
    { path: 'image', component: AppImage },
    { path: 'input', component: AppInput },
    { path: 'list', component: AppList },
    { path: 'menu', component: AppMenu },
    { path: 'navigation', component: AppNavigation },
    { path: 'paper', component: AppPaper },
    { path: 'progress', component: AppProgress },
    { path: 'slider', component: AppSlider },
    { path: 'snackbar', component: AppSnackBar },
    { path: 'stepper', component: AppStepper },
    { path: 'switch', component: AppSwitch },
    { path: 'toast', component: AppToast },
    { path: 'tab', component: AppTab },
    { path: 'touchpad', component: AppTouchPad },
    { path: 'toolbar', component: AppToolBar },
    { path: 'tooltip', component: AppTooltip },
  ]
}

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.querySelector('.app')
);