import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Image from 'essence-image';
import Navigation from 'essence-navigation';
import {List, ListItem} from 'essence-list';
import {Block, Text } from 'essence-core';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
			<Navigation visible={this.props.visible}>
				<Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>					
					<List type={'navigation'} classes={'e-background-white'} style={{paddingTop:'0'}}>
						<ListItem key={'component-core'}>
							<Block classes={'group-list-title e-text-indigo-500'}>
								<Image src={'./assets/img/essence core icon-1.png'} height={'20px'} alt={'Essence Core'} />
								&nbsp;
								<Text type={'small'}>
									Essence Core
								</Text>
							</Block>
							<List type={'navigation'} style={{padding:'0'}}>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'core-grid-system'}>Grid System</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'core-divider'}>Divider</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'core-ripple-ink'}>Ripple Ink</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'core-text-typography'}>Text Typography</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'core-utilities'}>Utilities</Link>
								</Block>
							</List>
						</ListItem>

						<ListItem key={'component-components'}>
							<Block classes={'group-list-title e-text-indigo-500'}>
								<Image src={'./assets/img/components icon-1.png'} height={'20px'} alt={'Components'} />
								&nbsp;
								<Text type={'small'}>
									Components
								</Text>
							</Block>
							<List type={'navigation'}>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'icons'}>Icons</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'colors'}>Colors</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'appbar'}>App Bar</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'bottomsheet'}>Bottom Sheets</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'button'}>Button</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'card'}>Card</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'chip'}>Chip</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'datatable'}>Data Table</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'dialog'}>Dialog</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'image'}>Image</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'input'}>Input</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'list'}>List</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'menu'}>Menu</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'navigation'}>Navigation</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'paper'}>Paper</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'progress'}>Progress</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'slider'}>Slider</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'snackbar'}>Snackbar</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'stepper'}>Steppers</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'switch'}>Switch</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'tab'}>Tab</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'toast'}>Toast</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'toolbar'}>ToolBar</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'tooltip'}>Tooltip</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'touchpad'}>Touchpad</Link>
								</Block>
							</List>
						</ListItem>
					</List>
				</Block>
			</Navigation>
        );
    }
}

module.exports = NavigationMenu; 