import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

// import Stepper from 'essence-stepper';
import Stepper from '../../../../Essence/components/essence-stepper/src/stepper.jsx';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

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
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block className={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>STEPPERS</Text>
	        			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'} style={{fontSize:'14px'}}>
							Steppers convey progress through numbered steps. They may also be used for navigation.
						</Text>

			        	<Card>
			        		<CardContent>
				        		<Block>
				        			<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />
				        			
				        			<Text type={'h3'} classes={'e-text-indigo-400 e-caption e-padding-top-25'}>EDITABLE:</Text>
			        				<Stepper steps={Steps['editable']} />
				        			
				        			<Text type={'h3'} classes={'e-text-indigo-400 e-caption e-padding-top-25'}>NON EDITABLE:</Text>
			        				<Stepper editable={false} steps={Steps['non-editable']} onContinue={this.continueStep.bind(this)} onBack={this.backStep.bind(this)} />
			        				
				        			<Text type={'h3'} classes={'e-text-indigo-400 e-caption e-padding-top-25'}>VERTICAL:</Text>
			        				<Stepper type={'vertical'} editable={false} steps={Steps['non-editable']} onContinue={this.continueStep.bind(this)} onBack={this.backStep.bind(this)} />
			        				
			        			</Block>

			        			<Block className={'e-padding-top-50'}>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-stepper</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Stepper component has the following options:
										<br />
										<br />
										1. <strong>steps</strong>: default <u>{}</u> empty object, see the example bellow to customize 
										<br />
										2. <strong>editable</strong>: default <u>true</u> or <u>false</u>
										<br />
										3. <strong>type</strong>: default <u>horizontal</u> or <u>vertical</u>
										<br />
										4. <strong>currentStep</strong>: initial step <u>0</u>
										<br />
										5. <strong>onContinue</strong>: default callback <u>null</u>
										<br />
										6. <strong>onBack</strong>: default callback <u>null</u>
										<br />
									</Text>

			        				<pre className={'e-background-grey-100 e-text-black'}>
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
			        		</CardContent>
						</Card>
					</Block>
				</Block>
			</Block>
		);
    }
}

exports.AppStepper = AppStepper;