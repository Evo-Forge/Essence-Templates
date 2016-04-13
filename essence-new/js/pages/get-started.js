import React from 'react';
import ClassNames from 'classnames';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import Image from 'essence-image';
import NavigationMenu from '../partials/navigation-menu';

class AppGetStarted extends React.Component {
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
      <Block className={'with-navigation'}>
        <NavigationMenu />

        <Block classes={'e-background-indigo-500'}>
          <Block className={'e-container '}>
            <Block className={'e-row'}>
              <Block classes={'brick brick-6 e-padding-top-25 '}>
                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>Get Started with Essence</Text>
                    <Divider classes={'thick medium e-background-white'} />
                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'14px'}}>
                  Learn how to use Essence for your application
                </Text>
              </Block>
              <Block classes={'brick brick-6 e-no-padding'}>
                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
              </Block>
            </Block>
          </Block>
        </Block>  

        <Block className={'e-container'}>
          <Block className={'e-row install e-margin-top-25'}>
            <Block className={'brick brick-12'} style={{marginBottom:'0'}}>
              <Text type={'h4'} classes={'e-text-indigo-500'}>INSTALL:</Text>
              <Divider classes={'thin short e-background-indigo-500'} />
              <Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
                To install all Essence components you can use the command bellow.
              </Text>
            </Block>
            <Block className={'brick brick-12'}>
              <pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D'}}>
                <code>
                  npm install <strong>react-essence</strong>
                </code>
              </pre>
            </Block>
          </Block>
          <Block className={'e-row use e-margin-top-25'}>
            <Block className={'brick brick-12'} style={{marginBottom:'0'}}>
              <Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS:</Text>
              <Divider classes={'thin short e-background-indigo-500'} />
              <Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
                To install individual components please see the side menu. Each component has a live example and a "How To Use" instructions.
              </Text>
            </Block>
            <Block className={'brick brick-12'}>
              <pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D'}}>
                <code>
                  npm install <strong>essence-__component-name__</strong>
                </code>
              </pre>
            </Block>
          </Block>
          <Block className={'e-row make-template e-margin-top-25'}>
            <Block className={'brick brick-12'} style={{marginBottom:'0'}}>
              <Text type={'h4'} classes={'e-text-indigo-500'}>MAKE A TEMPLATE:</Text>
              <Divider classes={'thin short e-background-indigo-500'} />
              <Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
                1. create a copy of the boilerplate template
                <br />
                2. choose a unique name for the template
                <br />
                3. use the Essence components & copy/paste the component code from "How to use"
                <br />
                4. run the command bellow & replace the <u>your-template-name</u> with the name for the template
                <br />
              </Text>
            </Block>
            <Block className={'brick brick-12'}>
              <pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D'}}>
                <code>
                git clone https://github.com/Evo-Forge/Essence-Templates.git
                </code>
                <div>or</div>
                <code>
                download the ZIP archive from <a target='_blank' href='https://github.com/Evo-Forge/Essence-Templates' className={'e-text-indigo-700'}>Git Essence-Templates</a>
                </code>
                <br />
                <br />
                <code>
                  cd Essence-Templates
                </code>
                <br />
                <br />
                <code>
                  npm install
                </code>
                <br />
                <br />
                <code>
                  npm run <strong>template:dev</strong>
                </code>
                <div>or</div>
                <br />
                <br />
                <code>
                  npm run <strong>template:custom</strong>
                </code>
                <div>or</div>
                <br />
                <br />
                <code>
                  npm run <strong>template:your-template-name</strong>
                </code>
              </pre>
            </Block>
          </Block>
          <Block className={'e-row'}>   
            <Block className={'brick brick-12 e-h-end'}>
              <Text className={'e-caption e-text-grey-900'}>
                <strong>NOTE: </strong> See more information on <a href={'https://www.npmjs.com/package/essence-templates'} target={'_blank'} className={'e-text-indigo-700'}>Essence Templates Package</a>
              </Text>
            </Block>
          </Block>          
        </Block>
      </Block>
    );
  }
}

module.exports = AppGetStarted;