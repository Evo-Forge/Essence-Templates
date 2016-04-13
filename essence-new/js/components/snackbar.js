import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Image from 'essence-image';
import NavigationMenu from '../partials/navigation-menu';
import Btn from 'essence-button';
import Input from 'essence-input';
import SnackBar from 'essence-snackbar';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppSnackBar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	delay: 5000,
			visible: false,
			message: 'You got a new message!',
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    snackbarStarted() {
    	{/* console.log('snackbar started'); */}
    }
    
    snackbarPaused() {
    	{/* console.log('snackbar paused'); */}
    }

    snackbarResumed() {
    	{/* console.log('snackbar resumed'); */}
    }

    snackbarEnded() {
    	{/* console.log('snackbar ended'); */}
    	this.setState({
            visible: false
        });
    }

    showSnackBar() {
        this.setState({
            visible: true
        });
    }

    changeMessage(event) {
    	let message = event.target.value;
    	this.setState({
    		message: message || 'You got a new message!'
    	});
    }

    changeNumber(event) {
    	let delay = event.target.value;
    	this.setState({
    		delay: delay || 5000
    	});
    }

    render() {
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>SNACKBARS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Remember those confirmation messages from long time ago? They’re now called snackbars and toasts and they come with rules. Head onto Google to check out how to use them. Then check out the below examples hot to integrate them from Essence.
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
			        				<Block className={'brick brick-6'} style={{paddingLeft:'0'}}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
										<Divider classes={'thin short e-background-indigo-400'} />
			        					<Block className={'e-row e-padding-top-15'}>
				        					<Block className={'brick brick-8'}>
					        					<Input
													classes={'has-success'}
													defaultValue={this.state.message}
													onBlur={this.changeMessage.bind(this)}
													label={'Toast message'}/>
				        					</Block>
				        					<Block className={'brick brick-4'}>
												<Input 
													type={'number'}
													classes={'has-success'}
													defaultValue={this.state.delay}
													onBlur={this.changeNumber.bind(this)}
												label={'Delay in ms'}/>
				        					</Block>
				        				</Block>
						        		<Block classes={'e-text-center e-padding-bottom-25'}>
											<SnackBar 
												delay={this.state.delay}
												visible={this.state.visible}
												className={'e-text-white'} 
												onStart={this.snackbarStarted.bind(this)} 
												onPause={this.snackbarPaused.bind(this)} 
												onResume={this.snackbarResumed.bind(this)} 
												onEnd={this.snackbarEnded.bind(this)} >
												{this.state.message}
											</SnackBar>

											<Btn 
												type={'primary'} 
			                					className={'flat e-background-indigo-600'} 
												label={'Show Snackbar'}
												onClick={this.showSnackBar.bind(this)} />
					        			</Block>
					        		</Block>

				        			<Block className={'brick brick-6'} style={{paddingRight:'0'}}>
				        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
				        				<Divider classes={'thin short e-background-indigo-400'} />

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												npm install <strong>essence-snackbar</strong>
					        				</code>
				        				</pre>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											To customise the hide function for SnackBar modify the number from option <strong>delay</strong> with a delay in miliseconds. 
										</Text>

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												import SnackBar from 'essence-snackbar';
												<br />
												<br />
												&lt;SnackBar classes=&#123;'e-text-green-500'&#125; visible=&#123;{this.state.visible.toString()}&#125; delay=&#123;{this.state.delay}&#125;&gt;
												<br />
												&nbsp;{this.state.message}
												<br />
												&lt;/SnackBar&gt;
												<br />
					        				</code>
				        				</pre>
				        			</Block>

				        			<Block className={'brick brick-12'}>
				        				<Divider />
				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											SnackBar component has the following options:
											<br />
											<br />
											1. <strong>visible</strong>: <u>true</u> - show the snackbar & <u>false</u> (<strong>default</strong>) - hide the snackbar
											<br />
											2. <strong>delay</strong>: <u>2000</u> (<strong>default</strong>) - miliseconds delay to hide
											<br />
											3. <strong>onStart</strong>: callback function when SnackBar component has <strong>visible</strong> toggle to <u>true</u>
											<br />
											4. <strong>onEnd</strong>: callback function when SnackBar component has <strong>visible</strong> toggle to <u>false</u>
											<br />
											5. <strong>onPause</strong>: callback function when SnackBar component has an active <u>mouseOver</u> event
											<br />
											6. <strong>onResume</strong>: callback function when SnackBar component has an active <u>mouseOout</u> event
											<br />
										</Text>
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

exports.AppSnackBar = AppSnackBar;