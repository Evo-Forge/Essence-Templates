import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Image from 'essence-image';
import NavigationMenu from '../partials/navigation-menu';
import Switch from 'essence-switch';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppSwitch extends React.Component {
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
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>SWITCHES</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Switches allow the user to select options. There are three kinds: checkboxes, radio buttons, and on/off switches. Here they are, in all their splendor.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block>


				<Block className={'e-row'}>
					<Block classes={'brick brick-12'}>
						

			        	<Card>
			        		<CardContent>				        	
			        			<Block className={'e-row'}>
									<Block className={'brick brick-5'} style={{paddingTop:'0', paddingLeft:'0'}}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
										<Divider classes={'thin short e-background-indigo-400'} />
										<Block className={'e-padding-top-15'}>
											<Block className={'e-padding-bottom-25'}>
												<Text className={'e-text-indigo-400'}>Checkbox: </Text>
												<br /><br />
												<Switch type={'checkbox'} text={'Default checkbox'} name={'switch-uncheckbox'}/>
											</Block>
											<Block className={'e-padding-bottom-25'}>
												<Text className={'e-text-indigo-400'}>Radio: </Text>
												<br /><br />
												<Switch type={'radio'} text={'1st option'} name={'switch-radio'} />
												<br />
												<Switch type={'radio'} text={'2nd option'} name={'switch-radio'} />
											</Block>
											<Block className={'e-padding-bottom-25'}>
												<Text className={'e-text-indigo-400'}>Switches: </Text>
												<br /><br />
												<Switch type={'switches'} afterText={'ON'} beforeText={'OFF'} name={'switch-switches'} />
											</Block>
										</Block>
									</Block>
				        			
				        			<Block className={'brick brick-7'} style={{paddingTop:'0'}}>
				        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
				        				<Divider classes={'thin short e-background-indigo-400'} />

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												npm install <strong>essence-switch</strong>
					        				</code>
				        				</pre>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											Switch component has the following options:
											<br />
											<br />
											1. <strong>type</strong>: <u>switches</u>, <u>radio</u>, <u>checkbox</u> (<strong>default</strong>)
											<br />
											2. <strong>text</strong>: <u>string</u> for checkbox label
											<br />
											3. <strong>beforeText</strong>: <u>string</u> for switches position on left side
											<br />
											4. <strong>afterText</strong>: <u>string</u> for switches position on right side
											<br />
											5. <strong>onChange</strong>: callback function on Switch value change
										</Text>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											Create a new ReactJS file with the code bellow.
										</Text>

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												import Switch from 'essence-switch';
												<br />
												<br />
												&lt;Switch type=&#123;'checkbox'&#125; text=&#123;'Default checkbox'&#125; name=&#123;'switch-uncheckbox'&#125; /&gt;
												<br />
												&lt;Switch type=&#123;'radio'&#125; text=&#123;'1st option'&#125; name=&#123;'switch-radio'&#125; /&gt;
												<br />
												&lt;Switch type=&#123;'radio'&#125; text=&#123;'2nd option'&#125; name=&#123;'switch-radio'&#125; /&gt;
												<br />
												&lt;Switch type=&#123;'switches'&#125; afterText=&#123;'ON'&#125; beforeText=&#123;'OFF'&#125; name=&#123;'switch-switches'&#125; /&gt;
												<br />
					        				</code>
				        				</pre>
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

exports.AppSwitch = AppSwitch;