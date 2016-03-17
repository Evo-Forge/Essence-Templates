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
              <Block classes={'brick brick-12 e-text-center e-background-indigo-400 e-padding-top-50 e-padding-bottom-50 e-no-margin'} style={{width: '100%'}}>
                <Block>
                  <Image className={'e-img-rsp'} src={'./assets/img/ess-logo.png'} alt={'Essence'} />
                  <Text type={'h5'} classes={'e-display-4 e-text-white'}>
                    essence
                  </Text>
                  <Text type={'h5'} classes={'e-headline e-text-white e-text-uppercase'}>
                    The Essential Material Design Framework
                  </Text>
                  <Text type={'a'} href={'https://www.npmjs.com/~essence_md'} target={'_blank'} classes={'e-btn raised e-background-indigo-600 e-text-white'}>
                    Install from NPM
                  </Text>
                  <Text type={'a'} href={'https://github.com/Evo-Forge/Essence'} target={'_blank'} classes={'e-btn raised e-background-white e-text-indigo-600'}>
                    Download from GitHub
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-12 e-text-center'}>
                <Block>
                  <Text type={'h3'} classes={'e-display-1 e-text-indigo-400 e-text-uppercase e-margin-top-25 e-margin-bottom-100'}>
                    Build it on one, use it on all!
                  </Text>
                  <Image className={'e-img-rsp'} src={'./assets/img/essence_responsive_banner.png'} alt={'Essence'} />
                </Block>

                <Block className={'e-row e-padding-top-15 e-padding-bottom-15'}>
                  <Block classes={'brick brick-1'}>&nbsp;</Block>
                  <Block classes={'brick brick-10'}>
                    <Divider />
                  </Block>
                  <Block classes={'brick brick-1'}>&nbsp;</Block>
                </Block>

                <Text type={'h3'} classes={'e-display-1 e-text-indigo-400 e-text-uppercase e-margin-bottom-15'}>
                  Distilled with
                </Text>

                <Block className={'e-row'}>
                  <Block classes={'brick brick-6 e-text-center'}>
                    <Image className={'e-img-rsp'} src={'./assets/img/less.png'} alt={'Less'} />
                  </Block>
                  <Block classes={'brick brick-6 e-text-center'}>
                    <Image className={'e-img-rsp'} src={'./assets/img/react.png'} alt={'ReactJS'} />
                  </Block>
                </Block>

                <Block className={'e-row'}>
                  <Block classes={'brick brick-1'}>&nbsp;</Block>
                  <Block classes={'brick brick-10'}>
                    <Divider />
                  </Block>
                  <Block classes={'brick brick-1'}>&nbsp;</Block>
                </Block>

                <Block className={'e-row'}>
                  <Block classes={'brick brick-6 e-text-center'}>
                    <Image className={'e-img-rsp'} src={'./assets/img/focus.png'} alt={'Fully focused'} />
                    <Text type={'p'} classes={'e-title line-height-12 e-text-indigo-400 e-text-uppercase'}>
                      Fully focused
                    </Text>
                    <Divider classes={'thick medium e-background-indigo-400'} style={{left: '37%'}} />
                    <Text type={'p'} classes={'e-subhead line-height-12 e-text-blue-grey-700'}>
                      On intuitive & natural interaction
                    </Text>
                  </Block>
                  <Block classes={'brick brick-6 e-text-center'}>
                    <Image className={'e-img-rsp'} src={'./assets/img/document.png'} alt={'Fully documented'} />
                    <Text type={'p'} classes={'e-title line-height-12 e-text-indigo-400 e-text-uppercase'}>
                      Fully documented
                    </Text>
                    <Divider classes={'thick medium e-background-indigo-400'} style={{left: '37%'}} />
                    <Text type={'p'} classes={'e-subhead line-height-12 e-text-blue-grey-700'}>
                      And example-packed
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-12 e-text-center e-text-indigo-100 e-background-indigo-400 e-padding-top-25 e-padding-bottom-25 e-no-margin'} style={{width: '100%'}}>
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