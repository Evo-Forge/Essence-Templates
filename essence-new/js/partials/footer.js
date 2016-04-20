import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Image from 'essence-image';
import Navigation from 'essence-navigation';
import {List, ListItem} from 'essence-list';
import {Block, Text } from 'essence-core';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

class Footer extends React.Component {
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
			<Block classes={'e-background-indigo-500'}>  
				<Block className={'e-container'}>    
					<Block className={'e-row'} style={{height:'100px'}}>            
		                <Block classes="brick brick-4 e-v-center" style={{marginBottom:'0'}}>
		                	<Text classes={'e-text-white'} style={{fontWeight:'100'}}>&copy; 2016 Essence</Text>  
		                </Block>
		                <Block classes="brick brick-4">		                	
		                </Block>
		                <Block classes="brick brick-4 e-v-center e-h-end" style={{marginBottom:'0'}}>
			                <Block>
			                  <Block>				                    
			                      <Link className={'e-text-white'} to={'https://twitter.com/Essence_MD'} target={'_blank'} style={{marginRight:'20px'}}>
			                         <Image className={'e-img-rsp'} src={'/assets/img/s-twitter.png'} alt={'twitter'} />
			                      </Link>
			                      <Link className={'e-text-white'} to={'https://www.facebook.com/getEssence/ '} target={'_blank'} style={{marginRight:'20px'}}>
			                         <Image className={'e-img-rsp'} src={'/assets/img/s-facebook.png'} alt={'facebook'} />
			                      </Link>
			                      <Link className={'e-text-white'} to={'https://github.com/Evo-Forge/Essence'} target={'_blank'} style={{marginRight:'20px'}}>
			                         <Image className={'e-img-rsp'} src={'/assets/img/s-github.png'} alt={'github'} />
			                      </Link>
			                      <Link className={'e-text-white'} to={'https://blog.getessence.io/'} target={'_blank'}>
			                         <Image className={'e-img-rsp'} src={'/assets/img/s-medium.png'} alt={'medium'} />
			                      </Link>				                    	                    
			                  </Block>  
			                </Block>
		                </Block>
                	</Block>
                </Block>
             </Block>
        );
    }
}

module.exports = Footer; 