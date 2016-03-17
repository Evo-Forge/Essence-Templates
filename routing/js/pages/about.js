import React from 'react';
import ClassNames from 'classnames';

import Image from 'essence-image';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppAbout extends React.Component {
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
        <Block classes={'e-row'}>
          <Block classes={'brick brick-12'}>
            <Text type={'h3'} classes={'e-text-indigo-400 e-text-uppercase'}>The Basics of Material Design</Text>
                <Divider classes={'thick medium e-background-indigo-400'} />
            <Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
              What is it and how it works?
            </Text>

                <Card>
                  <CardContent>
                    <Block className={'e-row'}>
                      <Block className={'brick-12'}>
                        <Text type={'blockquote'} className={'e-text-indigo-400'} style={{marginLeft: '90px', marginTop: '60px'}}>
                          <Text classes={'e-title e-text-blue-grey-700'}>
                            Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.
                          </Text>
                          <Divider className={'thick short e-background-indigo-400 e-margin-top-25 e-margin-bottom-25'} />
                          <Block type={'footer'} className={'e-title e-text-blue-grey-700'}>
                            Master Yuan-Ma
                            <Text type={'cite'} className={'e-subhead e-text-blue-grey-700'}>
                              The Book of Programming
                            </Text>
                          </Block>
                        </Text>
                      </Block>
                    </Block>

                <Divider className={'thinnest e-background-grey-300'} />


                <Block className={'e-row'}>
                      <Block className={'brick-12'}>
                        <Block classes={'e-padding-top-15 e-padding-bottom-15'}>
                      <Text type={'h3'} classes={'e-text-indigo-400 e-text-uppercase'}>THE ESSENCE</Text>
                      <Divider classes={'thick medium e-background-indigo-400'} />
                    </Block>
                  </Block>
                </Block>

                <Block className={'e-row'}>
                      <Block className={'brick-12'}>
                        <Block className={'e-row'}>
                      <Block className={'brick brick-4'}>
                        <Image src={'./assets/img/visual-1.png'} className={'e-img-rsp'} />
                      </Block>
                      <Block className={'brick brick-8 e-text-left'}>
                        <Text type={'p'} classes={'e-headline line-height-15 e-text-uppercase e-text-indigo-400'}>
                          GOOGLE DEFINED, CRAFTED WITH ESSENCE
                        </Text>
                        <Divider classes={'thin short e-background-indigo-400'} />
                        <Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-700 padding-top-bottom-10'}>
                          In the word of the mighty Google, material design is a visual language for our users that synthesizes the classic principles of good design with the innovation and possibility of technology and science. Google's goal is to develop a system of design that allows for a unified user experience across all their products on any platform.
                        </Text>
                        <Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-700 padding-top-bottom-10'}>
                          And we're trying to make this even better with Essence
                        </Text>
                      </Block>
                        </Block>
                      </Block>
                    </Block>

                    <Block className={'e-row'}>
                      <Block className={'brick-12'}>
                        <Block className={'e-row'}>
                      <Block className={'brick brick-4'}>
                        <Image src={'./assets/img/visual-2.png'} className={'e-img-rsp'} />
                      </Block>
                      <Block className={'brick brick-8 e-text-left'}>
                        <Text type={'p'} classes={'e-headline line-height-15 e-text-uppercase e-text-indigo-400'}>
                          INHERENTLY NATURAL FEEL
                        </Text>
                        <Divider classes={'thin short e-background-indigo-400'} />
                        <Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-700 padding-top-bottom-10'}>
                          It’s not always natural what feels to be natural. We call natural interactions those that are total automatisms and require no extra thinking on our part. And for this to happen we need to have meaning, intuitiveness and intention. We use crisp and large typography, big imagery and perfect color balances to immerse the user in his experience.
                        </Text>
                        <Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-700 padding-top-bottom-10'}>
                          All this combined provide a user interaction that “feels natural”.
                        </Text>
                      </Block>
                        </Block>
                      </Block>
                    </Block>

                    <Block className={'e-row'}>
                      <Block className={'brick-12'}>
                        <Block className={'e-row'}>
                      <Block className={'brick brick-4'}>
                        <Image src={'./assets/img/visual-3.png'} className={'e-img-rsp'} />
                      </Block>
                      <Block className={'brick brick-8 e-text-left'}>
                        <Text type={'p'} classes={'e-headline line-height-15 e-text-uppercase e-text-indigo-400'}>
                          MOVEMENT DEFINES FLOW
                        </Text>
                        <Divider classes={'thin short e-background-indigo-400'} />
                        <Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-700 padding-top-bottom-10'}>
                          No interface should start movement by itself. Motion is only within the grasp of the user and he holds the absolute authority of what happens and when. And when the motion starts, it transforms the whole design - but it all takes place in a single environment that gives the user a sense of familiarity, coherence and trust.
                        </Text>
                        <Text type={'p'} classes={'e-body1 line-height-15 e-text-blue-grey-700 padding-top-bottom-10'}>
                          Movement has purpose and that purpose is to provide seamless interaction and continuity, down to its essence.
                        </Text>
                      </Block>
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

module.exports = AppAbout;