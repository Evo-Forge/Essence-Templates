import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import { IndexRoute, Router, Route, Link, browserHistory, hashHistory } from 'react-router';

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
import { AppHome, AppAbout, AppCore , AppContact, AppGetStarted, AppComponents , AppTemplates } from './pages/index';

let EssenceMenu = { 
	'home': {
		title: 'Home'
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
}

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	search: 'close',
    	toast: false,
    	showSideBar: false,
    	content: <AppHome />,
  		components: [
  			'home',
  			'get-started',
  			'contact',
  			'icons',
  			'colors',
  			'appbar',
  			'bottomsheet',
  			'button',
  			'card',
  			'chip',
  			'core-grid-system',
  			'core-divider',
  			'core-ripple-ink',
  			'core-text-typography',
  			'core-utilities',
  			'data-table',
  			'dialog',
  			'image',
  			'input',
  			'list',
  			'menu',
  			'navigation',
  			'paper',
  			'progress',
  			'slider',
  			'snackbar',
  			'stepper',
  			'switch',
  			'tab',
  			'toast',
  			'toolbar',
  			'tooltip',
  			'touchpad',
  		],
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

  	return this.loadComponent();
  }

  componentWillReceiveProps(nextProps) {
    this.loadComponent();
  }

  renderSearch() {
  	let classes = ClassNames('e-no-margin e-text-white e-left', this.state.search);
  	return (
			<Input
				type={'search'}
				name='search-input'
				placeholder='Search...'
				classes={classes}/>
		);
	}

  renderToast() {
  	if (this.state.toast) {
  		return (
    		<Toast classes={'e-text-green-500'} visible={true} delay={5000}>
					Added to Favorite
				</Toast>
			);
  	}

  	return;
  }

  toggleSearch() {
  	this.setState({
  		search: (this.state.search === 'close' ? 'open' : 'close')
  	});
  }

  toggleToast() {
  	var toastStatus = !this.state.toast;

  	this.setState({
  		toast: toastStatus
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
  			className={'flat e-background-indigo-700 e-text-white e-left'}
  			icon={'navigation-menu'}
  			type={'primary'} />
  	);
  }

  loadComponent() {
  	let componentHash = this.props.params.component; // window.location.hash.replace('#', '');
  	let componentContent = '';

  	switch (componentHash) {
  		case 'icons':
  			componentContent = <AppIcons classes={'e-padding-top-15'} />;
  			break;
  		case 'colors':
  			componentContent = <AppColors classes={'e-padding-top-15'} />;
  			break;
  		case 'appbar':
  			componentContent = <AppBarComponent />;
  			break;
  		case 'bottomsheet':
  			componentContent = <AppBottomSheet />;
  			break;
  		case 'button':
  			componentContent = <AppButton />;
  			break;
  		case 'card':
  			componentContent = <AppCard />;
  			break;
  		case 'chip':
  			componentContent = <AppChip />;
  			break;
  		case 'core-grid-system':
  			componentContent = <AppCoreGridSystem />;
  			break;
  		case 'core-divider':
  			componentContent = <AppCoreDivider />;
  			break;
  		case 'core-ripple-ink':
  			componentContent = <AppCoreRippleInk />;
  			break;
  		case 'core-text-typography':
  			componentContent = <AppCoreTextTypography />;
  			break;
  		case 'core-utilities':
  			componentContent = <AppCoreUtilities />;
  			break;
  		case 'dialog':
  			componentContent = <AppDialog />;
  			break;
  		case 'data-table':
  			componentContent = <AppDataTable />;
  			break;
  		case 'image':
  			componentContent = <AppImage />;
  			break;
  		case 'input':
  			componentContent = <AppInput />;
  			break;
  		case 'list':
  			componentContent = <AppList />;
  			break;
  		case 'menu':
  			componentContent = <AppMenu />;
  			break;
  		case 'navigation':
  			componentContent = <AppNavigation />;
  			break;
  		case 'paper':
  			componentContent = <AppPaper />;
  			break;
  		case 'progress':
  			componentContent = <AppProgress />;
  			break;
  		case 'slider':
  			componentContent = <AppSlider />;
  			break;
  		case 'snackbar':
  			componentContent = <AppSnackBar />;
  			break;
  		case 'stepper':
  			componentContent = <AppStepper />;
  			break;
  		case 'switch':
  			componentContent = <AppSwitch />;
  			break;
  		case 'toast':
  			componentContent = <AppToast />;
  			break;
  		case 'tab':
  			componentContent = <AppTab />;
  			break;
  		case 'touchpad':
  			componentContent = <AppTouchPad />;
  			break;
  		case 'toolbar':
  			componentContent = <AppToolBar />;
  			break;
  		case 'tooltip':
  			componentContent = <AppTooltip />;
  			break;
  		case 'get-started':
  			componentContent = <AppGetStarted />;
  			break;
  		case 'contact':
  			componentContent = <AppContact />;
  			break;
  		case 'home':
  		default:
  			componentContent = <AppHome />;
  			break;
  	}

  	if (this.state.components.indexOf(componentHash) > -1) {
			this.changeTitle(this.state.essenceComponents[componentHash]['title']);
			this.setState({
				content: componentContent
			});
			this.hideSideBar();
  	}
  }

  renderContent() {
  	return this.props.children;
  }

  render() {
    return(
    	<div>
				<AppBar classes={'e-background-indigo-700'} style={{overflow: 'hidden'}}>				
          <Link className={'e-text-white e-left'} to={'/home'}>
            <Image src={'/assets/img/Logo Essence.png'} />
          </Link>                 
					<Link className={'e-text-white e-right'} to={'/contact'} style={{fontWeight:'300'}}>Contact</Link>
          <Text type={'a'} href={'https://blog.getessence.io/'} target={'_blank'} className={'e-text-white e-right'} style={{fontWeight:'300'}}>Blog</Text>
          <Link className={'e-text-white e-right'} to={'/react-components'} style={{fontWeight:'300'}}>Components</Link>
          <Link className={'e-text-white e-right'} to={'/core'} style={{fontWeight:'300'}}>Essence Core</Link>          
          <Link className={'e-text-white e-right'} to={'/get-started'} style={{fontWeight:'300'}}>Getting Started</Link>
				</AppBar>

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
    { path: 'contact', component: AppContact },
    { path: 'get-started', component: AppGetStarted },    
    { path: 'templates', component: AppTemplates },
    
    { path: 'core', component: AppCore },
    { path: 'core/grid-system', component: AppCoreGridSystem },
    { path: 'core/divider', component: AppCoreDivider },
    { path: 'core/ripple-ink', component: AppCoreRippleInk },
    { path: 'core/text-typography', component: AppCoreTextTypography },
    { path: 'core/utilities', component: AppCoreUtilities },

    { path: 'react-components', component: AppComponents },
    { path: 'react-component/icons', component: AppIcons },
    { path: 'react-component/colors', component: AppColors },
    { path: 'react-component/appbar', component: AppBarComponent },
    { path: 'react-component/bottomsheets', component: AppBottomSheet },
    { path: 'react-component/buttons', component: AppButton },
    { path: 'react-component/cards', component: AppCard },
    { path: 'react-component/chips', component: AppChip },
    { path: 'react-component/dialogs', component: AppDialog },
    { path: 'react-component/datatables', component: AppDataTable },
    { path: 'react-component/images', component: AppImage },
    { path: 'react-component/inputs', component: AppInput },
    { path: 'react-component/lists', component: AppList },
    { path: 'react-component/menus', component: AppMenu },
    { path: 'react-component/navigation', component: AppNavigation },
    { path: 'react-component/paper', component: AppPaper },
    { path: 'react-component/progress', component: AppProgress },
    { path: 'react-component/sliders', component: AppSlider },
    { path: 'react-component/snackbars', component: AppSnackBar },
    { path: 'react-component/steppers', component: AppStepper },
    { path: 'react-component/switches', component: AppSwitch },
    { path: 'react-component/toasts', component: AppToast },
    { path: 'react-component/tabs', component: AppTab },
    { path: 'react-component/touchpad', component: AppTouchPad },
    { path: 'react-component/toolbars', component: AppToolBar },
    { path: 'react-component/tooltips', component: AppTooltip },
  ]
}

ReactDOM.render(
	<Router history={hashHistory} routes={routes} />,
	document.querySelector('.app')
);