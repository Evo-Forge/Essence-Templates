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
                  Material Design UI components, built in React.JS 
                </Text>
              </Block>
              <Block classes={'brick brick-6 e-no-padding'}>
                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
              </Block>
            </Block>
          </Block>
        </Block>  

        <Block className={'e-container e-margin-bottom-15'}>          
          <Block className={'e-row'} style={{paddingTop:'5px'}}>   
            <Block className={'brick brick-6'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-pink-500'} to={'/react-component/icons'}>
                  <Block type={'span'} className={'e-text-white'}>Icons</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/6-icons.png'} alt={'icons'} />
                </Link>                
              </Block>
            </Block>
            <Block className={'brick brick-6'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-orange-500'} to={'/react-component/colors'}>
                  <Block type={'span'} className={'e-text-white'}>Colors</Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/7-colors.png'} alt={'colors'} />
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/appbar'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>App Bar</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/bottomsheets'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Bottom Sheets</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/buttons'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Buttons</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/cards'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Cards</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/chips'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Chips</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/datatables'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Data Tables</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/dialogs'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Dialogs</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/images'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Images</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/inputs'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Inputs</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/lists'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Lists</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/menus'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Menus</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/navigation'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Navigation</Block>                  
                </Link>
              </Block>
            </Block>
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/paper'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Paper</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/progress'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Progress</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/sliders'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Sliders</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/snackbars'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Snackbars</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/steppers'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Steppers</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/switches'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Switches</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/tabs'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Tabs</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/toasts'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Toasts</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/toolbars'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Toolbars</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/tooltips'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Tooltips</Block>                  
                </Link>
              </Block>
            </Block>  
            <Block className={'brick brick-3'}>            
              <Block>                  
                <Link className={'card-link e-shadow-1 e-background-grey-500'} to={'/react-component/touchpad'} style={{height:'130px'}}>
                  <Block type={'span'} className={'e-text-white'}>Touchpad</Block>                  
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

module.exports = AppComponents;