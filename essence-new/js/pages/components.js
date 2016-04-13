import React from 'react';
import ClassNames from 'classnames';
import Navigation from 'essence-navigation';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import Image from 'essence-image';
import Icon from 'essence-icon';
import NavigationMenu from '../partials/navigation-menu';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

class AppComponents extends React.Component {

  render() {
    return (
      <Block className={'with-navigation'}>
        <NavigationMenu />
        <Block classes={'e-background-indigo-500'}>
          <Block className={'e-container '}>
            <Block className={'e-row'}>
              <Block classes={'brick brick-6 e-padding-top-25 '}>
                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>ESSENCE COMPONENTS</Text>
                    <Divider classes={'thick medium e-background-white'} />
                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
                  There are several components that are included in the Essence Core package. Please review them bellow to understand how to use them.
                </Text>
              </Block>
              <Block classes={'brick brick-6 e-no-padding'}>
                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
              </Block>
            </Block>
          </Block>
        </Block>  

        <Block className={'e-container'}>          
          <Block className={'e-row'} style={{paddingTop:'5px'}}>   
            <Block className={'brick brick-6'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-pink-500'} to={'icons'}>
                  <Block type={'span'} className={'e-text-white'}>Icons</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/6-icons.png'} alt={'icons'} />
                </Link>                
              </Block>
            </Block>
            <Block className={'brick brick-6'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-orange-500'} to={'colors'}>
                  <Block type={'span'} className={'e-text-white'}>Colors</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/7-colors.png'} alt={'colors'} />
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'appbar'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>App Bar</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'bottomsheet'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Bottom Sheets</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'button'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Buttons</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'card'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Card</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'chip'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Chip</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'datatable'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Data Table</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'dialog'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Dialog</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'image'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Image</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'input'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Input</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'list'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>List</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'menu'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Menu</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'navigation'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Navigation</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'paper'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Paper</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'progress'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Progress</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'slider'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Slider</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'snackbar'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Snackbar</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'stepper'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Stepper</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'switch'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Switch</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'tab'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Tab</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'toast'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Toast</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'toolbar'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Toolbar</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'tooltip'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Tooltip</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'touchpad'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Touchpad</Block>                  
                </Link>
              </Block>
            </Block>            
          </Block>          
        </Block>
      </Block>
    );
  }
}

module.exports = AppComponents;