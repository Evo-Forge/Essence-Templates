import React from 'react';
import ClassNames from 'classnames';

import Image from 'essence-image';
import {Block, Text, Divider} from 'essence-core';

class AppHome extends React.Component {
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
      <Block>
        <Block>
          <Block classes={'clearfix'}>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-12  e-background-blue-500 e-padding-top-50 e-padding-bottom-50 e-no-margin'} style={{width: '100%'}}>
                <Block classes={'e-container'}>
                  <Block classes={'e-row'}>
                    <Block classes={'brick brick-4'}>
                      <Text type={'h5'} classes={'e-body-1  e-text-deep-purple-900'} style={{fontSize:'30px'}}>
                        essence
                      </Text>
                      <Text type={'h5'} classes={'e-body-1  e-text-deep-purple-900 '} style={{fontSize:'36px'}}>
                        BUILD IT ON ONE,
                      </Text>
                      <Text type={'h5'} classes={'e-body-1  e-text-deep-purple-900 '} style={{fontSize:'36px'}}>
                        USE IT ON ALL
                      </Text>
                       <Block type={'ul'} className={'e-text-white '} style={{paddingLeft:'20px'}}>                        
                        <Block type={'li'}>Cohesive, thoughtful and bold</Block>
                        <Block type={'li'}>Scaling great design</Block>
                        <Block type={'li'}>React.js component-based approach</Block>
                      </Block> 

                      <Block classes={'e-row e-no-margin e-no-padding'}>
                        <Block classes={'brick brick-12  '} style={{paddingLeft:'0', marginLeft:'0'}}>
                          <Text type={'a'} href={'https://www.npmjs.com/~essence_md'} target={'_blank'} classes={'e-btn flat e-background-deep-purple-900 e-text-white e-no-margin'} style={{marginLeft:'0px'}}>
                            Install from NPM
                          </Text>
                        </Block>
                      </Block>

                      <Block classes={'e-row e-no-margin e-no-padding'}>
                        <Block classes={'brick brick-12  '} style={{paddingLeft:'0', marginLeft:'0'}}>                            
                          <Text type={'a'} href={'https://github.com/Evo-Forge/Essence'} target={'_blank'} classes={'e-btn flat e-background-blue-500 e-text-deep-purple-900 e-no-margin'} style={{marginLeft:'0px', border:'1px solid #311b92'}}>
                            Download from GitHub
                          </Text>
                        </Block>
                      </Block>
                    </Block>
                    <Block classes={'brick brick-8'}>
                      <Image className={'e-img-rsp'} src={'./assets/img/Devices.png'} alt={'Essence'} />
                    </Block>
                  </Block>
                </Block>  
              </Block>
            </Block>
            <Block classes={'e-container'}>
              <Block classes={'e-row'}>
                <Block classes={'brick brick-12'}>                  
                    <Text type={'h5'} classes={'e-button e-text-deep-purple-900 e-text-uppercase e-margin-top-50 e-margin-bottom-25 '} style={{fontSize:'36px'}}>
                      THE ESSENCE
                    </Text>                   
                </Block>

                <Block classes={'brick brick-4'}>  
                  <Image className={'e-img-rsp'} src={'./assets/img/Cohesive Image.png'} alt={'cohesive'} />
                </Block>
                <Block classes={'brick brick-8 e-v-center'}> 
                  <Block>
                  <Text type={'h3'} classes={'e-body-1 e-text-deep-purple-900 e-text-uppercase'} style={{fontSize:'18px'}}>
                    cohesive, thoughtful and bold
                  </Text> 
                  <Divider classes={'thick short e-background-deep-purple-900  e-margin-bottom-15'}/>
                  <Text type={'h3'} classes={'e-body-1 e-text-deep-purple-900'} style={{fontSize:'16px', lineHeight:'18px'}}>
                    Elements to create hierarchy, meaning and focus; deliberate color choices, edge-to-edge imagery and large-scale typography;  emphasis on user actions; natural interactions; motion with meaning and purpose. That is Material Design, a bold and graphic interface that immerses the user in the experience.  Material Design is also one of the cornerstones of Essence framework. 
                  </Text> 
                  </Block>
                </Block>

                <Block classes={'brick brick-4'}>  
                  <Image className={'e-img-rsp'} src={'./assets/img/Scaling Image.png'} alt={'scaling'} />
                </Block>
                <Block classes={'brick brick-8 e-v-center'}> 
                  <Block>
                  <Text type={'h3'} classes={'e-body-1 e-text-deep-purple-900 e-text-uppercase'} style={{fontSize:'18px'}}>
                    scaling great design
                  </Text> 
                  <Divider classes={'thick short e-background-deep-purple-900  e-margin-bottom-15'}/>
                  <Text type={'h3'} classes={'e-body-1 e-text-deep-purple-900'} style={{fontSize:'16px', lineHeight:'18px'}}>
                    Scaling great design and bringing it to everyone is no easy task. Material Design, the new design philosophy, makes it easier for developers to do the right thing, while still leaving freedom to designers to express their creativity. Essence implements Material Design 
principles and visual standards to bring a unified experience across platforms and device sizes, ratios and pixel densities.
                  </Text> 
                  </Block>
                </Block>

                <Block classes={'brick brick-4'}>  
                  <Image className={'e-img-rsp'} src={'./assets/img/React Image.png'} alt={'react'} />
                </Block>
                <Block classes={'brick brick-8 e-v-center'}> 
                  <Block>
                  <Text type={'h3'} classes={'e-body-1 e-text-deep-purple-900 e-text-uppercase'} style={{fontSize:'18px'}}>
                    React.js's component-based approach
                  </Text> 
                  <Divider classes={'thick short e-background-deep-purple-900  e-margin-bottom-15'}/>
                  <Text type={'h3'} classes={'e-body-1 e-text-deep-purple-900'} style={{fontSize:'16px', lineHeight:'18px'}}>
                    React is all about building reusable components. It strives for simplicity. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy. React is a great choice for having a manageable and clean code-base. In terms of technical aspects, Essence relies on React for providing the clarity and simplicity that Material Design promotes.   
                  </Text> 
                  </Block>
                </Block>                
              </Block>

              <Block className={'e-row e-no-margin e-background-grey-300'} style={{padding:'20px'}}>
                <Block classes={'brick brick-4 e-v-center e-h-center'}>
                    <Text type={'h3'} classes={'e-display-1 e-text-deep-purple-900 e-text-uppercase e-margin-bottom-15'}>
                      Distilled with
                    </Text>
                </Block>
                <Block classes={'brick brick-4 e-v-center e-h-center'}>
                  <Image className={'e-img-rsp'} src={'./assets/img/less.png'} alt={'Less'} />
                </Block>
                <Block classes={'brick brick-4 e-v-center e-h-center'}>
                  <Image className={'e-img-rsp'} src={'./assets/img/react.png'} alt={'ReactJS'} />
                </Block>
              </Block>
              <Block classes={'e-row e-h-center e-no-margin'}>  
                <Block classes={'brick brick-12 e-no-margin e-no-padding'}>  
                  <Image className={'e-img-rsp'} src={'./assets/img/Arrow Distilled.png'} alt={'arrow'} />
                </Block>
              </Block>

              <Block classes={'e-row e-h-center e-no-margin'}>  
                <Block classes={'brick brick-4 e-v-center e-h-end'}>  
                  <Block>
                    <Text type={'h3'} classes={'e-display-1 e-text-blue-500 e-text-uppercase'} style={{fontSize:'36px'}}>
                    Focused
                  </Text>
                  <Text type={'h3'} classes={'e-display-1 e-text-blue-500'} style={{fontSize:'16px'}}>
                    on intuitive & natural interaction
                  </Text>
                  </Block>
                </Block>
                <Block classes={'brick brick-4'}>  
                  <Image className={'e-img-rsp'} src={'./assets/img/Focused Image.png'} alt={'focused'} />
                </Block>
                <Block classes={'brick brick-4'}>  
                  
                </Block>
              </Block>

            </Block>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-12  e-text-indigo-100 e-background-deep-purple-900 e-padding-top-25 e-padding-bottom-25 e-no-margin e-text-center'} style={{width: '100%'}}>
                <Text type={'p'} classes={'e-title e-text-indigo-100'}>
                  <Text>Join us on </Text>
                  <Text type={'a'} className={'e-text-white'} href={'https://twitter.com/Essence_MD'}>Twitter </Text>
                  <Text type={'a'} className={'e-text-white'} href={'https://www.facebook.com/getEssence/'}>Facebook </Text>
                  <Text type={'a'} className={'e-text-white'} href={'https://github.com/Evo-Forge/Essence'}>GitHub </Text>
                </Text>
                <Text type={'small'} classes={'e-text-indigo-100'}>
                  <Text type={'small'} classes={'e-padding-bottom-15'}>Copyright {(new Date().getFullYear())}</Text>
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = AppHome;