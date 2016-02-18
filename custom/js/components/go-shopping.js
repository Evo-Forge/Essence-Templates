import React from 'react';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import {Block, Text, Divider} from 'essence-core';

class CommerceGoShopping extends React.Component {
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
        	<Block classes={'e-background-blue-grey-50'}>
        		<Block classes={'e-row e-content'}>
	        		<Block classes={'brick brick-12 e-text-center e-padding-top-25 e-padding-bottom-25'}>
		        		<Text type={'h1'} classes={'e-text-grey-800'}>{ this.props.text || '-20% On All New Items!' }</Text>
		        		<br />
		        		<Btn label={'Go shopping'} type={'succes'} classes={'flat e-caption e-text-white e-no-margin'} style={{paddingLeft: '20px', paddingRight: '20px'}}/>
					</Block>
				</Block>
			</Block>
        );
    }
}

module.exports = CommerceGoShopping;