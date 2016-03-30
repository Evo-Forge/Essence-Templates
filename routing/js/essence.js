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
	'about-essence': {
		title: 'About Essence'
	},
	'get-started': {
		title: 'Getting started'
	},
	'contact': {
		title: 'Contact'
	}
};

let EssenceCoreMenu = {
	'grid-system': {
		title: 'Grid System'
	},
	'divider': {
		title: 'Divider'
	},
	'ripple-ink': {
		title: 'Ripple Ink'
	},
	'text-typography': {
		title: 'Text Typography'
	},
	'utilities': {
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
						<Link to={'/core/' + key}>
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
							<Link to={'/react-component/' + key}>
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
  						<Text type={'a'} href={'/'}>
  							<Image
  								width={'40px'}
  								height={'40px'}
  								style={{ verticalAlign: 'middle'}}
  								src={'/assets/img/essence_icon.png'} />
  							<Text type={'h2'} classes={'e-text-indigo-400 e-right'} style={{width: '74%', lineHeight: '45px'}}>
  								<Text>essence</Text>
  							</Text>
  						</Text>
  					</Block>
  					<List type={'navigation'} classes={'e-background-white'}>
  						<ListItem key={'component-md'}>
  							<Block classes={'group-list-title'}>
  								<Image src={'/assets/img/material-design.png'} height={'24px'} alt={'Material Design'} />
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
  								<Image src={'/assets/img/styles-b.png'} height={'24px'} alt={'Essence Core'} />
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
  								<Image src={'/assets/img/components.png'} height={'24px'} alt={'Components'} />
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

  changeTitle(string, page = null) {
    // set head title & description
    let title = document.querySelector('head title');
    let description = document.querySelector('head meta[name=description]');

    title.innerHTML = 'Essence - ' + string.toString();
    description.setAttribute('content', 'Essence - ' + string.toString());

  	this.setState({
  		AppBarTitle: string.toString()
  	});
  }

  componentWillReceiveProps(nextProps) {
    let componentPath = nextProps.location.pathname;
    let componentPage = componentPath.split('/').filter(n => n.length);
    let componentKey = componentPath.split('/').filter(n => n.length).join('-');
    let componentTitle = this.state.essenceComponents[componentKey]['title'];

    this.changeTitle(componentTitle, componentPage);
  }

  componentDidMount() {
  	let essenceComponents = this.state.essenceComponents;
		for (var objKey in EssenceMenu) {
      essenceComponents[objKey] = EssenceMenu[objKey];
    }
		for (var objKey in EssenceCoreMenu) {
      essenceComponents['core-' + objKey] = EssenceCoreMenu[objKey];
    }
		for (var objKey in Components) {
      essenceComponents['react-component-' + objKey] = Components[objKey];
    }

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
    { path: '/home', component: AppHome },
    { path: '/about-essence', component: AppAbout },
    { path: '/contact', component: AppContact },
    { path: '/get-started', component: AppGetStarted },

    { path: '/core/grid-system', component: AppCoreGridSystem },
    { path: '/core/divider', component: AppCoreDivider },
    { path: '/core/ripple-ink', component: AppCoreRippleInk },
    { path: '/core/text-typography', component: AppCoreTextTypography },
    { path: '/core/utilities', component: AppCoreUtilities },

    { path: '/react-component/icons', component: AppIcons },
    { path: '/react-component/colors', component: AppColors },
    { path: '/react-component/appbar', component: AppBarComponent },
    { path: '/react-component/bottomsheet', component: AppBottomSheet },
    { path: '/react-component/button', component: AppButton },
    { path: '/react-component/card', component: AppCard },
    { path: '/react-component/chip', component: AppChip },
    { path: '/react-component/dialog', component: AppDialog },
    { path: '/react-component/data-table', component: AppDataTable },
    { path: '/react-component/image', component: AppImage },
    { path: '/react-component/input', component: AppInput },
    { path: '/react-component/list', component: AppList },
    { path: '/react-component/menu', component: AppMenu },
    { path: '/react-component/navigation', component: AppNavigation },
    { path: '/react-component/paper', component: AppPaper },
    { path: '/react-component/progress', component: AppProgress },
    { path: '/react-component/slider', component: AppSlider },
    { path: '/react-component/snackbar', component: AppSnackBar },
    { path: '/react-component/stepper', component: AppStepper },
    { path: '/react-component/switch', component: AppSwitch },
    { path: '/react-component/toast', component: AppToast },
    { path: '/react-component/tab', component: AppTab },
    { path: '/react-component/touchpad', component: AppTouchPad },
    { path: '/react-component/toolbar', component: AppToolBar },
    { path: '/react-component/tooltip', component: AppTooltip },
  ]
}

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.querySelector('.app')
);