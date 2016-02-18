import React from 'react';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import AppBar from 'essence-appbar';
import {Block, Text, Utils} from 'essence-core';
import {List, ListItem} from 'essence-list';
import Menu from 'essence-menu';

class CommerceHeader extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className
            ),
            isMobile: (Utils.Client.documentSize() < 3 ? true : false)
        };
    }

    renderResize() {
    	let isMobile = Utils.Client.documentSize() < 3 ? true : false;
    	this.setState({
			isMobile: isMobile
		});
    }

    componentDidMount() {
    	let self = this;
    	window.addEventListener('resize', function(event) {
    		self.renderResize();
    	});
    }

    render() {
        return (
        	<AppBar classes={'e-background-white'}>
        		<Block className={'e-container'}>
        			<Block className={'brick-12 e-no-margin'}>
						<Text type={'a'} href={'#custom'} className={'e-text-grey-800 e-title e-text-uppercase'}>
							<Text className={ClassNames({'hide': this.state.isMobile})}>Commerce</Text>
							<Text className={ClassNames({'hide': !this.state.isMobile})}>C</Text>
							<Text type={'small'}>
								<Text type={'sup'} href={'#template'} className={'e-text-grey-500 e-text-uppercase'}>
									&nbsp;01
								</Text>
							</Text>
						</Text>
						&nbsp;&nbsp;
						<Menu 
							type={'cover'} 
							icon={'navigation-menu'} 
							className={ClassNames('e-button', {'hide': !this.state.isMobile})}>
							<Text type={'a'} href={'#Latest'} className={'e-text-uppercase e-text-grey-800'}>Latest</Text>
							<Text type={'a'} href={'#Brands'} className={'e-text-uppercase e-text-grey-800'}>Brands</Text>
							<Text type={'a'} href={'#Clothing'} className={'e-text-uppercase e-text-grey-800'}>Clothing</Text>
							<Text type={'a'} href={'#Shoes'} className={'e-text-uppercase e-text-grey-800'}>Shoes</Text>
							<Text type={'a'} href={'#Accessories'} className={'e-text-uppercase e-text-grey-800'}>Accessories</Text>
							<Text type={'a'} href={'#Sale'} className={'e-text-uppercase e-text-red-600'}>Sale</Text>
						</Menu>

						<List type={'inline'} className={ClassNames('e-button', {'hide': this.state.isMobile})}>
							<ListItem>
								<Text type={'a'} href={'#Latest'} className={'e-text-uppercase e-text-grey-800'}>Latest</Text>
							</ListItem>
							<ListItem>
								<Text type={'a'} href={'#Brands'} className={'e-text-uppercase e-text-grey-800'}>Brands</Text>
							</ListItem>
							<ListItem>
								<Text type={'a'} href={'#Clothing'} className={'e-text-uppercase e-text-grey-800'}>Clothing</Text>
							</ListItem>
							<ListItem>
								<Text type={'a'} href={'#Shoes'} className={'e-text-uppercase e-text-grey-800'}>Shoes</Text>
							</ListItem>
							<ListItem>
								<Text type={'a'} href={'#Accessories'} className={'e-text-uppercase e-text-grey-800'}>Accessories</Text>
							</ListItem>
							<ListItem>
								<Text type={'a'} href={'#Sale'} className={'e-text-uppercase e-text-red-600'}>Sale</Text>
							</ListItem>
						</List>

						<Btn classes={'e-right e-background-white e-text-grey-500 e-btn-fab fab-mini'} icon={'action-shopping-cart'} style={{marginRight: '10px'}} />
						<Btn classes={'e-right e-background-white e-text-grey-500 e-btn-fab fab-mini'} icon={'action-favorite-outline'} style={{marginRight: '10px'}} />
						<Btn classes={'e-right e-background-white e-text-grey-500 e-btn-fab fab-mini'} icon={'action-search'} style={{marginRight: '10px'}} />
					</Block>
				</Block>
			</AppBar>
        );
    }
}

module.exports = CommerceHeader;