import React from 'react';
import ClassNames from 'classnames';

import {Icon, Btn, Input, Block, Text} from 'react-essence';

class CommerceFooter extends React.Component {
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
        	<Block type={'footer'} classes={'e-text-white e-background-grey-800 e-margin-top-50'}>
        		<Block classes={'e-row e-container e-padding-top-25 e-padding-bottom-25'}>
	        		<Block classes={'brick brick-4'}>
	        			<Text type={'p'} className={'e-subtitle e-text-uppercase e-text-white'}>
	        				commerce
	        				<Text type={'sup'}> 01</Text>
	        			</Text>

						<Block classes={'e-caption clearfix e-margin-top-25 e-margin-bottom-25'}>
							<Block classes={'badge round e-text-center e-background-blue-grey-700 e-left'} style={{marginRight: '6px'}}>
								<Icon name={'action-face-unlock'} className={'e-text-white'} />
							</Block>
							<Block classes={'badge round e-text-center e-background-blue-grey-700 e-left'} style={{marginRight: '6px'}}>
								<Icon name={'action-stars'} className={'e-text-white'} />
							</Block>
							<Block classes={'badge round e-text-center e-background-blue-grey-700 e-left'} style={{marginRight: '6px'}}>
								<Icon name={'maps-local-post-office'} className={'e-text-white'} />
							</Block>
						</Block>

	        			<Text type={'p'} classes={'e-caption e-padding-top-15'}>
	        				&copy; 2016 Commerce 01 All rights reserved
	        			</Text>
					</Block>
					<Block classes={'brick brick-4'}>
						<Text type={'p'} className={'e-caption e-text-white'}>
							Contact Us
						</Text>
						<Text type={'p'}>
							<Text type={'a'} href={'mail:hello@commerce.com'} className={'e-caption'}>hello@commerce.com</Text>
						</Text>
						<Text type={'p'} className={'e-caption'}>
							Studio Street 4th
							<br />
							London, M1 5QE
						</Text>
						<Text type={'p'}>
							<Text type={'a'} href={'tel:+497904345678'} className={'e-caption'}>+49 790 4345 678</Text>
						</Text>
					</Block>
	        		<Block classes={'brick brick-4'}>
		        		<Text type={'p'} className={'e-caption e-text-white'}>
							Subscribe now
						</Text>
						<Text type={'p'} className={'e-caption'}>
							Sign up if you want to get 
							<br />
							notifications
						</Text>
						<Block>
							<Input type={'email'} name={'label'} label={'Enter e-mail address'} classes={'e-left'}/>
							<Btn label={(<Icon name={'content-send'} />)} type={'succes'} classes={'flat e-left'} />
						</Block>
					</Block>
				</Block>
			</Block>
        );
    }
}

module.exports = CommerceFooter;