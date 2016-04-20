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
								<Image src={'/assets/img/essence core icon-1.png'} height={'20px'} alt={'Essence Core'} />
								&nbsp;
								<Text type={'small'}>
									Essence Core
								</Text>
							</Block>
							<List type={'navigation'} style={{padding:'0'}}>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/core/grid-system'}>Grid System</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/core/divider'}>Divider</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/core/ripple-ink'}>Ripple Ink</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/core/text-typography'}>Text Typography</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/core/utilities'}>Utilities</Link>
								</Block>
							</List>
						</ListItem>

						<ListItem key={'component-components'}>
							<Block classes={'group-list-title e-text-indigo-500'}>
								<Image src={'/assets/img/components icon-1.png'} height={'20px'} alt={'Components'} />
								&nbsp;
								<Text type={'small'}>
									Components
								</Text>
							</Block>
							<List type={'navigation'}>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/icons'}>Icons</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/colors'}>Colors</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/appbar'}>App Bar</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/bottomsheets'}>Bottom Sheets</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/buttons'}>Buttons</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/cards'}>Cards</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/chips'}>Chips</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/datatables'}>Data Tables</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/dialogs'}>Dialogs</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/images'}>Images</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/inputs'}>Inputs</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/lists'}>Lists</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/menus'}>Menus</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/navigation'}>Navigation</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/paper'}>Paper</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/progress'}>Progress</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/sliders'}>Sliders</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/snackbars'}>Snackbars</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/steppers'}>Steppers</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/switches'}>Switches</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/tabs'}>Tabs</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/toasts'}>Toasts</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/toolbars'}>ToolBars</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/tooltips'}>Tooltips</Link>
								</Block>
								<Block type={'li'}>
									<Link className={'e-text-grey-900 link'} to={'/react-component/touchpad'}>Touchpad</Link>
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