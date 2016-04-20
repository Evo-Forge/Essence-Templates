import React from 'react';
import ReactDOM from 'react-dom';
import Btn from 'essence-button';
import Input from 'essence-input';
import Toast from 'essence-toast';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppToast extends React.Component {
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

    toastStarted() {
    	{/* console.log('toast started'); */}
    }
    
    toastPaused() {
    	{/* console.log('toast paused'); */}
    }

    toastResumed() {
    	{/* console.log('toast resumed'); */}
    }

    toastEnded() {
    	{/* console.log('toast ended'); */}
    	this.setState({
            visible: false
        });
    }

    showToast() {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>TOASTS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Toasts are similar to snackbars but do not contain actions and cannot be swiped off screen.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'/assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block>


				<Block className={'e-container'}>
		        	<Block className={'e-row e-margin-top-25'}>
		        		<Block classes={'brick brick-4'} style={{overflow:'hidden'}}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin'}>
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
			        				<Block className={'e-text-center e-padding-top-15'}>
	                					<Btn 
	                						type={'succes e-background-indigo-600'} 
	                						label={'Show Toast'}
	                						onClick={this.showToast.bind(this)} 
	                						className={'flat'} />
									</Block>
									<Toast 
										delay={this.state.delay}
										classes={'e-text-white'} 
										visible={this.state.visible} 
										onStart={this.toastStarted.bind(this)} 
										onPause={this.toastPaused.bind(this)} 
										onResume={this.toastResumed.bind(this)} 
										onEnd={this.toastEnded.bind(this)} >
										{this.state.message}
									</Toast>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-toast</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Toast from 'essence-toast';
									<br />
									<br />
									&lt;Toast classes=&#123;'e-text-white'&#125; visible=&#123;{this.state.visible.toString()}&#125; delay=&#123;{this.state.delay}&#125;&gt;
									<br />
									&nbsp;{this.state.message}
									<br />
									&lt;/Toast&gt;
									<br />		
			    				</code>
							</pre>
						</Block>
						<Block classes={'brick brick-12 properties e-margin-bottom-25'}>	
							<Text type={'h4'} classes={'e-text-indigo-500 e-margin-top-15'}>PROPERTIES</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />

	        				<Block classes={'e-row tabel-header no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-grey-700'}>	
	        						Name
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-grey-700'}>	
	        						Default
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-700'}>	
									Description
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						visible
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									true - show the toast & false (default) - hide the toast
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						delay
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						delay=&#123;2000&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Miliseconds delay to hide
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onStart
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Callback function when Toast component has visible toggle to true
	        					</Block>
	        				</Block>   
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onEnd
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Callback function when Toast component has visible toggle to false
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onPause
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Callback function when Toast component has an active mouseOver event
	        					</Block>
	        				</Block> 
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onResume
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Callback function when Toast component has an active mouseOout event
	        					</Block>
	        				</Block>        						        				
						</Block>
					</Block>
				</Block>
				<Footer />
			</Block>
		);
    }
}

exports.AppToast = AppToast;