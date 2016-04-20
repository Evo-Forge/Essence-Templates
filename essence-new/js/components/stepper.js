import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Stepper from 'essence-stepper';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

const Steps = {
    'editable': [
        { 
        	'title': (<Text>Select campaign settings</Text>),
        	'content': (<Text className={'e-caption'}>Campaign settings</Text>)
        },
        { 
        	'title': (<Text>Create an ad group</Text>), 
        	'optional': (<Text>Optional</Text>),
        	'content': (<Text className={'e-caption'}>Ad group</Text>)
        },
        { 
        	'title': (<Text>Create an ad</Text>),
        	'content': (<Text className={'e-caption'}>Ad details</Text>)
        }
    ],
    'non-editable': [
        { 
        	'title': (<Text>Select campaign settings</Text>),
        	'content': (<Text className={'e-caption'}>Campaign settings</Text>)
        },
        { 
        	'title': (<Text>Create an ad group</Text>),
        	'content': (<Text className={'e-caption'}>Ad group</Text>)
        },
        { 
        	'title': (<Text>Create an ad</Text>),
        	'content': (<Text className={'e-caption'}>Ad details</Text>)
        }
    ]
};

class AppStepper extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    continueStep(currentStep) {
		console.log('continueStep', currentStep);
    }

    backStep(currentStep) {
    	console.log('backStep', currentStep);
    }

    render() {
		
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>STEPPERS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Steppers convey progress through numbered steps. They may also be used for navigation.
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
		        		<Block classes={'brick brick-12'} style={{overflow:'hidden'}}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin'}>
									<Text type={'h3'} classes={'e-text-indigo-500 e-caption e-padding-top-25'}>EDITABLE:</Text>
			        				<Stepper steps={Steps['editable']}/>
				        			
				        			<Text type={'h3'} classes={'e-text-indigo-500 e-caption e-padding-top-25'}>NON EDITABLE:</Text>
			        				<Stepper editable={false} steps={Steps['non-editable']} onContinue={this.continueStep.bind(this)} onBack={this.backStep.bind(this)} />
			        				
				        			<Text type={'h3'} classes={'e-text-indigo-500 e-caption e-padding-top-25'}>VERTICAL:</Text>
			        				<Stepper type={'vertical'} editable={false} steps={Steps['non-editable']} onContinue={this.continueStep.bind(this)} onBack={this.backStep.bind(this)} />
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-12'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-stepper</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Stepper from 'essence-stepper';
									<br />
									<br />
									const Steps = &#123;
									<br />
									&nbsp;'editable': [
									<br />
									&nbsp;&nbsp;&#123; 
									<br />
									&nbsp;&nbsp;&nbsp;'title': (&lt;Text&gt;Select campaign settings&lt;/Text&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;'content': (&lt;Text className=&#123;'e-caption'&#125;&gt;Campaign settings&lt;/Text&gt;)
									<br />
									&nbsp;&nbsp;&#125;,
									<br />
									&nbsp;&nbsp;&#123; 
									<br />
									&nbsp;&nbsp;&nbsp;'title': (&lt;Text&gt;Create an ad group&lt;/Text&gt;), 
									<br />
									&nbsp;&nbsp;&nbsp;'optional': (&lt;Text&gt;Optional&lt;/Text&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;'content': (&lt;Text className=&#123;'e-caption'&#125;&gt;Ad group&lt;/Text&gt;)
									<br />
									&nbsp;&nbsp;&#125;,
									<br />
									&nbsp;&nbsp;&#123; 
									<br />
									&nbsp;&nbsp;&nbsp;'title': (&lt;Text&gt;Create an ad&lt;/Text&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;'content': (&lt;Text className=&#123;'e-caption'&#125;&gt;Ad details&lt;/Text&gt;)
									<br />
									&nbsp;&nbsp;&#125;
									<br />
									&nbsp;],
									<br />
									&nbsp;'non-editable': [
									<br />
									&nbsp;&nbsp;&#123; 
									<br />
									&nbsp;&nbsp;&nbsp;'title': (&lt;Text&gt;Select campaign settings&lt;/Text&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;'content': (&lt;Text className=&#123;'e-caption'&#125;&gt;Campaign settings&lt;/Text&gt;)
									<br />
									&nbsp;&nbsp;&#125;,
									<br />
									&nbsp;&nbsp;&#123; 
									<br />
									&nbsp;&nbsp;&nbsp;'title': (&lt;Text&gt;Create an ad group&lt;/Text&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;'content': (&lt;Text className=&#123;'e-caption'&#125;&gt;Ad group&lt;/Text&gt;)
									<br />
									&nbsp;&nbsp;&#125;,
									<br />
									&nbsp;&nbsp;&#123; 
									<br />
									&nbsp;&nbsp;&nbsp;'title': (&lt;Text&gt;Create an ad&lt;/Text&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;'content': (&lt;Text className=&#123;'e-caption'&#125;&gt;Ad details&lt;/Text&gt;)
									<br />
									&nbsp;&nbsp;&#125;,
									<br />
									&nbsp;&nbsp;&#123; 
									<br />
									&nbsp;&nbsp;&nbsp;'content': (&lt;Text className=&#123;'e-caption'&#125;&gt;Summary&lt;/Text&gt;)
									<br />
									&nbsp;&nbsp;&#125;
									<br />
									&nbsp;]
									<br />
									&#125;;
									<br />
									<br />
									&lt;Stepper steps=&#123;Steps['editable']&#125; /&gt;
									<br />
									<br />
									&lt;Stepper editable=&#123;false&#125; steps=&#123;Steps['non-editable']&#125; onContinue=&#123;this.continueStep.bind(this)&#125; onBack=&#123;this.backStep.bind(this)&#125; /&gt;
									<br />
									<br />
									&lt;Stepper type=&#123;'vertical'&#125; editable=&#123;false&#125; steps=&#123;Steps['non-editable']&#125; onContinue=&#123;this.continueStep.bind(this)&#125; onBack=&#123;this.backStep.bind(this)&#125; /&gt;						
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
	        						steps
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									See the example
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						activeColor
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						activeColor=&#123;'e-background-indigo-400'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									use a background color class to change the default active color
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						inactiveColor
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						inactiveColor=&#123;'e-background-grey-400'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									use a background color class to change the default inactive color
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						editable
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						editable=&#123;true&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Boolean true or false
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						type
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						type=&#123;'horizontal'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Choose between horizontal or vertical
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						currentStep
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						0
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Initial step 0
	        					</Block>
	        				</Block> 
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onContinue
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Default callback null
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onBack
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Default callback null
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

exports.AppStepper = AppStepper;