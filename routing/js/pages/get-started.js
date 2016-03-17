import React from 'react';
import ClassNames from 'classnames';

import Toast from 'essence-toast';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

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
      <Block classes={'e-container e-padding-top-25'}>
        <Block className={'e-row'}>
          <Block classes={'brick brick-12'}>
            <Text type={'h3'} classes={'e-text-indigo-400 e-text-uppercase'}>Get Started with Essence</Text>
                <Divider classes={'thick medium e-background-indigo-400'} />
            <Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
              Learn how to use Essence for your application
            </Text>

                <Card>
                  <CardContent>
                    <Block className={'e-row'}>
                      <Block className={'brick brick-6'} style={{padding:'0'}}>
                        <Block>
                      <Text type={'h4'} classes={'e-text-indigo-400'}>INSTALL:</Text>
                      <Divider classes={'thin short e-background-indigo-400'} />

                      <Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
                        To install all Essence components you can use the command bellow.
                      </Text>

                      <pre className={'e-background-grey-100 e-text-black'}>
                        <code>
                          npm install <strong>react-essence</strong>
                        </code>
                      </pre>
                    </Block>
                  </Block>
                  <Block className={'brick brick-6'} style={{padding:'0'}}>
                    <Block>
                      <Text type={'h4'} classes={'e-text-indigo-400'}>USE COMPONENTS:</Text>
                      <Divider classes={'thin short e-background-indigo-400'} />

                      <Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
                        To install individual components please see the side menu. Each component has a live example and a "How To Use" instructions.
                      </Text>

                      <pre className={'e-background-grey-100 e-text-black'}>
                        <code>
                          npm install <strong>essence-__component-name__</strong>
                        </code>
                      </pre>
                    </Block>
                  </Block>
                </Block>

                    <Block className={'e-row'}>
                      <Block className={'brick brick-12'} style={{padding:'0'}}>
                    <Block className={'e-padding-bottom-15'}>
                      <Text type={'h4'} classes={'e-text-indigo-400'}>MAKE A TEMPLATE:</Text>
                      <Divider classes={'thin short e-background-indigo-400'} />

                      <Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
                        1. create a copy of the boilerplate template
                        <br />
                        2. choose a unique name for the template
                        <br />
                        3. use the Essence components & copy/paste the component code from "How to use"
                        <br />
                        4. run the command bellow & replace the <u>your-template-name</u> with the name for the template
                        <br />
                      </Text>

                      <pre className={'e-background-grey-100 e-text-black'}>
                        <code>
                          git clone https://github.com/Evo-Forge/Essence-Templates.git
                        </code>
                        <div>or</div>
                        <code>
                        download the ZIP archive from <a target='_blank' href='https://github.com/Evo-Forge/Essence-Templates'>Git Essence-Templates</a>
                        </code>
                      </pre>

                      <pre className={'e-background-grey-100 e-text-black'}>
                        <code>
                          cd Essence-Templates
                        </code>
                      </pre>

                      <pre className={'e-background-grey-100 e-text-black'}>
                        <code>
                          npm install
                        </code>
                      </pre>

                      <pre className={'e-background-grey-100 e-text-black'}>
                        <code>
                          npm run <strong>template:dev</strong>
                        </code>
                        <div>or</div>
                      </pre>


                      <pre className={'e-background-grey-100 e-text-black'}>
                        <code>
                          npm run <strong>template:custom</strong>
                        </code>
                        <div>or</div>
                      </pre>

                      <pre className={'e-background-grey-100 e-text-black'}>
                        <code>
                          npm run <strong>template:your-template-name</strong>
                        </code>
                      </pre>
                      <Text className={'e-caption'}>
                        <strong>NOTE: </strong> See more information on <a href={'https://www.npmjs.com/package/essence-templates'} target={'_blank'}>Essence Templates Package</a>
                      </Text>
                    </Block>
                  </Block>
                </Block>
                  </CardContent>
            </Card>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = AppGetStarted;