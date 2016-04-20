import React from 'react';
import ClassNames from 'classnames';
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

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
        <Block classes={'e-row'}>
          <Block classes={'brick brick-12  e-background-indigo-500 e-padding-top-50 e-padding-bottom-50 e-no-margin'} style={{width: '100%'}}>
            <Block classes={'e-container'}>
              <Block classes={'e-row'}>
                <Block classes={'brick brick-4 e-v-center'}>
                  <Block>
                    <Block classes={'e-body-1  e-text-white'} style={{fontSize:'30px', fontWeight:'100'}}>
                      essence
                    </Block>
                    <Block classes={'e-body-1  e-text-orange-500'} style={{fontSize:'36px', fontWeight:'700', lineHeight:'22px'}}>
                      BUILD IT ON ONE,
                    </Block>
                    <Block classes={'e-body-1  e-text-orange-500'} style={{fontSize:'36px', fontWeight:'700'}}>
                      USE IT ON ALL
                    </Block>
                     <Block type={'ul'} className={'e-text-white '} style={{paddingLeft:'20px', marginTop:'0'}}>                        
                      <Block type={'li'}>Cohesive, thoughtful and bold</Block>
                      <Block type={'li'}>Scaling great design</Block>
                      <Block type={'li'}>React.js component-based approach</Block>
                    </Block> 

                    <Block classes={'e-row e-no-margin e-no-padding'}>
                      <Block classes={'brick brick-12  '} style={{paddingLeft:'0', marginLeft:'0'}}>
                        <Text type={'a'} href={'https://www.npmjs.com/~essence_md'} target={'_blank'} classes={'e-btn flat e-background-orange-500 e-text-white e-no-margin'} style={{marginLeft:'0px'}}>
                          Install from NPM
                        </Text>
                      </Block>
                    </Block>

                    <Block classes={'e-row e-no-margin e-no-padding'}>
                      <Block classes={'brick brick-12  '} style={{paddingLeft:'0', marginLeft:'0'}}>                            
                        <Text type={'a'} href={'https://github.com/Evo-Forge/Essence'} target={'_blank'} classes={'e-btn flat e-background-orange-800 e-text-white e-no-margin'} style={{marginLeft:'0px'}}>
                          Download from GitHub
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                </Block>
                <Block classes={'brick brick-8'}>
                  <Image className={'e-img-rsp'} src={'./assets/img/devices final colors.png'} alt={'Essence'} />
                </Block>
              </Block>
            </Block>  
          </Block>
        </Block>
        <Block classes={'e-container'}>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-4'}>  
            </Block>
            <Block classes={'brick brick-8'}>                  
                <Block classes={'e-text-indigo-500 e-text-uppercase e-margin-top-50'} style={{fontSize:'36px', fontWeight:'700'}}>
                  THE ESSENCE
                </Block>                   
            </Block>
            <Block classes={'brick brick-4'}>  
            </Block>
            <Block classes={'brick brick-8'}>                  
                <Text type={'h3'} classes={'e-body-1 e-text-grey-600'} style={{fontSize:'16px', lineHeight:'18px'}}>
                  Building with Essence feels like building with lego bricks: simple and fun. Here is why:
                </Text>                   
            </Block>

            <Block classes={'brick brick-4 e-h-center'}>  
              <Image className={'e-img-rsp'} src={'./assets/img/Cohesive Image.png'} alt={'cohesive'} />
            </Block>
            <Block classes={'brick brick-8 e-v-center'}> 
              <Block>
              <Text type={'h3'} classes={'e-body-1 e-text-indigo-700 e-text-uppercase'} style={{fontSize:'18px'}}>
                cohesive, thoughtful and bold
              </Text> 
              <Divider classes={'thick short e-background-indigo-700  e-margin-bottom-15'}/>
              <Text type={'h3'} classes={'e-body-1 e-text-grey-600'} style={{fontSize:'16px', lineHeight:'18px'}}>
                Elements to create hierarchy, meaning and focus; deliberate color choices, edge-to-edge imagery and large-scale typography;  emphasis on user actions; natural interactions; motion with meaning and purpose. That is Material Design, a bold and graphic interface that immerses the user in the experience.  Material Design is the cornerstone of the Essence framework.  
              </Text> 
              </Block>
            </Block>

            <Block classes={'brick brick-4 e-h-center'}>  
              <Image className={'e-img-rsp'} src={'./assets/img/Scaling Image.png'} alt={'scaling'} />
            </Block>
            <Block classes={'brick brick-8 e-v-center'}> 
              <Block>
              <Text type={'h3'} classes={'e-body-1 e-text-indigo-700 e-text-uppercase'} style={{fontSize:'18px'}}>
                scaling great design
              </Text> 
              <Divider classes={'thick short e-background-indigo-700  e-margin-bottom-15'}/>
              <Text type={'h3'} classes={'e-body-1 e-text-grey-600'} style={{fontSize:'16px', lineHeight:'18px'}}>
                Scaling great design and bringing it to everyone is hard. The new Material Design philosophy makes it easier for developers to do the right thing, while still leaving freedom for designers to express their creativity. Essence implements Material Design principles and visual standards to bring a unified experience across platforms and device sizes, ratios and pixel densities.
              </Text> 
              </Block>
            </Block>

            <Block classes={'brick brick-4 e-h-center'}>  
              <Image className={'e-img-rsp'} src={'./assets/img/React Image.png'} alt={'react'} />
            </Block>
            <Block classes={'brick brick-8 e-v-center'}> 
              <Block>
              <Text type={'h3'} classes={'e-body-1 e-text-indigo-700 e-text-uppercase'} style={{fontSize:'18px'}}>
                React.js's component-based approach
              </Text> 
              <Divider classes={'thick short e-background-indigo-700  e-margin-bottom-15'}/>
              <Text type={'h3'} classes={'e-body-1 e-text-grey-600'} style={{fontSize:'16px', lineHeight:'18px'}}>
                React is all about building reusable components. It strives for simplicity. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy. React is a great choice for having a manageable and clean code-base. Tech wise, Essence relies on React to provide the clarity and simplicity that Material Design promotes.</Text> 
              </Block>
            </Block>                
          </Block>
        </Block>
        <Block>
          <Block className={'e-row e-no-margin e-background-grey-300 e-margin-top-50'} style={{padding:'60px', height:'280px' }}>
            <Block classes={'brick brick-5 e-v-end e-h-end e-no-padding e-no-margin'}>
              <Image className={'e-img-rsp'} src={'./assets/img/less_.png'} alt={'Less'} />  
            </Block>
            <Block classes={'brick brick-2 e-v-start e-h-center e-no-padding e-no-margin'}>
              <Block classes={'e-text-grey-500'} style={{fontSize:'34px', fontWeight:'400'}}>
                Distilled with
              </Block>              
            </Block>
            <Block classes={'brick brick-5 e-v-end e-h-start e-no-padding e-no-margin'}>
              <Image className={'e-img-rsp'} src={'./assets/img/react.png'} alt={'ReactJS'} />
            </Block>
          </Block>
          <Block classes={'e-row e-h-center e-no-margin e-margin-bottom-50'}>  
            <Block classes={'brick brick-12 e-no-margin e-no-padding'}>  
              <Image className={'e-img-rsp'} src={'./assets/img/ic_invert_colors_black_48px copy 2.png'} alt={'arrow'} />
            </Block>
          </Block>

          <Block classes={'e-row e-h-center e-no-margin e-margin-bottom-50'}>  
            <Block classes={'brick brick-5 e-v-center e-h-end e-no-padding e-no-margin'}>  
              <Block>
                <Block classes={'e-text-orange-500 e-text-uppercase'} style={{fontSize:'36px', fontWeight:'700'}}>
                Focused
              </Block>
              <Text type={'h3'} classes={'e-display-1 e-text-grey-600'} style={{fontSize:'16px', lineHeight:'10px'}}>
                on intuitive & natural interaction
              </Text>
              </Block>
            </Block>
            <Block classes={'brick brick-2 e-no-padding e-no-margin'}>  
              <Image className={'e-img-rsp'} src={'./assets/img/ic_invert_colors_black_48px copy.png'} alt={'focused'} />
            </Block>
            <Block classes={'brick brick-5 e-v-center e-h-start e-no-padding e-no-margin'}>  
              <Block>
                <Block classes={'e-text-orange-500 e-text-uppercase'} style={{fontSize:'36px', fontWeight:'700'}}>
                Documented
              </Block>
              <Text type={'h3'} classes={'e-display-1 e-text-grey-600'} style={{fontSize:'16px', lineHeight:'10px'}}>
                and example-packed
              </Text>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block classes={'footer'}>
          <Block classes={'e-row e-background-orange-500 e-padding-top-25 e-padding-bottom-50'}>
            <Block classes={'brick brick-12 e-h-center e-no-margin e-margin-top-25'}>  
              <Image className={'e-img-rsp'} src={'./assets/img/citat.png'} alt={'quote'} />
            </Block>
            <Block classes={'brick brick-3'}>                 
            </Block>
            <Block classes={'brick brick-6 e-h-center e-no-margin e-margin-top-25 e-margin-bottom-15'}>                  
                <Text type={'em'} classes={'e-text-white'}>Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below. </Text>                                  
            </Block>
            <Block classes={'brick brick-3'}>                 
            </Block>

            <Block classes={'brick brick-12 e-h-center e-no-margin e-no-padding'}>    
              <Text classes={'e-text-orange-800'} style={{fontWeight:'700'}}>Master Yuan-Ma, The Book of Programming</Text>                     
            </Block>             
          </Block>
          <Block classes={'e-background-indigo-500 e-padding-bottom-50'}>
            <Block classes={'e-container'}>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-6 e-padding-top-50'}>  
                <Block classes={'e-row e-no-margin e-no-padding'}>  
                  <Block classes={'brick brick-4'}>  
                   <Link className={'e-text-white e-text-uppercase'} to={'#'} style={{display:'block'}}>About</Link>
                   <Divider classes={'thin medium e-background-white  e-margin-bottom-15'}/>
                   <Link className={'e-text-white'} to={'https://blog.getessence.io/'} target={'_blank'} style={{display:'block', lineHeight:'30px'}}>Blog</Link>
                   <Link className={'e-text-white'} to={'contact'} style={{display:'block', lineHeight:'30px'}}>Contact</Link>

                  </Block>
                  <Block classes={'brick brick-4'}>  
                   <Link className={'e-text-white e-text-uppercase'} to={'#'} style={{display:'block'}}>Essence</Link>
                   <Divider classes={'thin medium e-background-white  e-margin-bottom-15'}/>
                   <Link className={'e-text-white'} to={'get-started'} style={{display:'block', lineHeight:'30px' }}>Getting Started</Link>
                   <Link className={'e-text-white'} to={'core'} style={{display:'block', lineHeight:'30px'}}>Essence Core</Link>
                   <Link className={'e-text-white'} to={'react-components'} style={{display:'block', lineHeight:'30px'}}>Components</Link>
                  </Block>
                  <Block classes={'brick brick-4'}>  
                   <Link className={'e-text-white e-text-uppercase'} to={'#'} style={{display:'block'}}>Support</Link>                       
                   <Divider classes={'thin medium e-background-white  e-margin-bottom-15'}/>
                   <Link className={'e-text-white'} to={'https://github.com/Evo-Forge/Essence'} style={{display:'block', lineHeight:'30px'}} target={'_blank'} >GitHub</Link>
                   <Link className={'e-text-white'} to={'https://www.npmjs.com/~essence_md'} style={{display:'block', lineHeight:'30px'}} target={'_blank'}>NPM</Link>
                   <Link className={'e-text-white'} to={'http://stackoverflow.com/questions/tagged/essence'} style={{display:'block', lineHeight:'30px'}} target={'_blank'}>StackOverflow</Link>                       
                  </Block>
                </Block>
              </Block>
              <Block classes={'brick brick-6 e-no-padding'} style={{position:'relative'}}>  
                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
                <Block classes="e-h-center">
                  <Block style={{position:'absolute', top:'127px', right:'0'}}>
                    <Block>
                      <Link className={'e-text-white'} to={'https://twitter.com/Essence_MD'} target={'_blank'} style={{marginRight:'20px'}}>
                         <Image className={'e-img-rsp'} src={'./assets/img/s-twitter.png'} alt={'twitter'} />
                      </Link>
                      <Link className={'e-text-white'} to={'https://www.facebook.com/getEssence/ '} target={'_blank'} style={{marginRight:'20px'}}>
                         <Image className={'e-img-rsp'} src={'./assets/img/s-facebook.png'} alt={'facebook'} />
                      </Link>
                      <Link className={'e-text-white'} to={'https://github.com/Evo-Forge/Essence'} target={'_blank'} style={{marginRight:'20px'}}>
                         <Image className={'e-img-rsp'} src={'./assets/img/s-github.png'} alt={'github'} />
                      </Link>
                      <Link classes={'e-text-white'} to={'https://blog.getessence.io/'} target={'_blank'}>
                         <Image className={'e-img-rsp'} src={'./assets/img/s-medium.png'} alt={'medium'} />
                      </Link>
                    </Block>
                    <Text classes={'e-text-white'} style={{fontWeight:'100'}}>&copy; 2016 Essence</Text>  
                  </Block>  
                </Block>
              </Block>
              </Block>
            </Block>
          </Block>
        </Block> 
      </Block>
    );
  }
}

module.exports = AppHome;