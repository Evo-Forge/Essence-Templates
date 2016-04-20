import React from 'react';
import Icon from 'essence-icon';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import Navigation from 'essence-navigation';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

class AppCore extends React.Component {

  render() {
    return (
      <Block className={'with-navigation'}>
        <NavigationMenu />
        <Block classes={'e-background-indigo-500'}>
          <Block className={'e-container '}>
            <Block className={'e-row'}>
              <Block classes={'brick brick-6 e-padding-top-25 '}>
                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>ESSENCE CORE</Text>
                    <Divider classes={'thick medium e-background-white'} />
                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
                  Essence Core package includes several components that are vital to the framework.  
                </Text>
              </Block>
              <Block classes={'brick brick-6 e-no-padding'}>
                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
              </Block>
            </Block>
          </Block>
        </Block>  

        <Block className={'e-container e-margin-bottom-15'} style={{minHeight:'calc(100vh - 362px)'}}>          
          <Block className={'e-row'} style={{paddingTop:'5px'}}>   
            <Block className={'brick brick-4'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-deep-purple-500'} to={'/core/grid-system'}>
                  <Block type={'span'} className={'e-text-white'}>Grid System</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/1-grid.png'} alt={'grid'} />
                </Link>                
              </Block>
            </Block>
            <Block className={'brick brick-4'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-blue-500'} to={'/core/divider'}>
                  <Block type={'span'} className={'e-text-white'}>Divider</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/2-divider.png'} alt={'divider'} />
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-4'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-cyan-500'} to={'/core/ripple-ink'}>
                  <Block type={'span'} className={'e-text-white'}>Ripple Ink</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/3-ripple.png'} alt={'ripple'} />
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-4'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-teal-500'} to={'/core/text-typography'}>
                  <Block type={'span'} className={'e-text-white'}>Text Typography</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/4-text.png'} alt={'text'} />
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-4'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-green-500'} to={'/core/utilities'}>
                  <Block type={'span'} className={'e-text-white'}>Utilities</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/5-utilities.png'} alt={'utilities'} />
                </Link>
              </Block>
            </Block>
          </Block>          
        </Block>        
        <Footer />
      </Block>
    );
  }
}

module.exports = AppCore; 