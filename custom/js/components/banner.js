import React from 'react';
import ClassNames from 'classnames';

import { Btn, Block, Text } from 'react-essence';

class CommerceBanner extends React.Component {
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
        	<Block classes={'banner e-text-white e-padding-top-100 e-padding-bottom-75'} style={{backgroundImage: 'url(https://source.unsplash.com/category/technology/1920x500)'}}>
                <Block classes={'e-container'}>
            		<Block classes={'e-row text-shadow'}>
    	        		<Block classes={'brick brick-12'}>
    		        		<Text type={'p'} classes={'e-display-1 e-text-white'}>eCommerce with React JS</Text>
    		        		<Text type={'p'} className={'e-subtitle'}>We help you build a fast and modern eCommerce website</Text>
    		        		<br />
    		        		<Btn label={'Learn more'} type={'info'} classes={'flat e-caption e-text-white e-no-margin'} style={{paddingLeft: '20px', paddingRight: '20px'}}/>
    					</Block>
                    </Block>
				</Block>
			</Block>
        );
    }
}

module.exports = CommerceBanner;