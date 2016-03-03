import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Stepper from 'essence-stepper';
// import Stepper from '../../../../EssenceMD/components/essence-stepper/src/stepper.jsx';
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
        },
        { 
        	'content': (<Text className={'e-caption'}>Summary</Text>)
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

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import Stepper from 'essence-stepper';
											<br />
											<br />
											const Editable = &#123;
											<br />
											&nbsp;'steps': [
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'title': (&lt;Text&gt;Select campaign settings&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'title': (&lt;Text&gt;Create an ad group&lt;/Text&gt;), 'optional': (&lt;Text&gt;Optional&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'title': (&lt;Text&gt;Create an ad&lt;/Text&gt;) &#125;
											<br />
											&nbsp;],
											<br />
											&nbsp;'items': [ 
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'item': (&lt;Text className=&#123;'e-caption'&#125;&gt;Campaign settings&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'item': (&lt;Text className=&#123;'e-caption'&#125;&gt;Ad group&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'item': (&lt;Text className=&#123;'e-caption'&#125;&gt;Ad details&lt;/Text&gt;) &#125;
											<br />
											&nbsp;]
											<br />
											&#125;;
											<br />
											const NonEditable = &#123;
											<br />
											&nbsp;'steps': [
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'title': (&lt;Text&gt;Select campaign settings&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'title': (&lt;Text&gt;Create an ad group&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'title': (&lt;Text&gt;Create an ad&lt;/Text&gt;) &#125;
											<br />
											&nbsp;],
											<br />
											&nbsp;'items': [ 
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'item': (&lt;Text className=&#123;'e-caption'&#125;&gt;Campaign settings&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'item': (&lt;Text className=&#123;'e-caption'&#125;&gt;Ad group&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'item': (&lt;Text className=&#123;'e-caption'&#125;&gt;Ad details&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'item': (&lt;Text className=&#123;'e-caption'&#125;&gt;Summary&lt;/Text&gt;) &#125;
											<br />
											&nbsp;]
											<br />
											&#125;;
											<br />
											<br />
											&lt;Stepper steps=&#123;Editable.steps&#125; items=&#123;Editable.items&#125; /&gt;
											<br />
											<br />
											&lt;Stepper
											<br />											
											&nbsp;&nbsp;editable=&#123;false&#125; 
											<br />											
											&nbsp;&nbsp;steps=&#123;NonEditable.steps&#125; 
											<br />											
											&nbsp;&nbsp;items=&#123;NonEditable.items&#125; 
											<br />
											&nbsp;&nbsp;onContinue=&#123;callbackOnContinue(currentStep)&#125; 
											<br />
											&nbsp;&nbsp;onBack=&#123;callbackOnBack(currentStep)&#125; /&gt;
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