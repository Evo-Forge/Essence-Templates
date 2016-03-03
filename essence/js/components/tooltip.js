import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import Tooltip from 'essence-tooltip';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppTooltip extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	visible: {
        		byID: false,
        		byClassName: false,
        	},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    showTooltipByID() {
    	let visible = this.state.visible;
    	visible.byID = true;

        this.setState({
            visible: visible
        });
    }
    
    hideTooltipByID() {
    	let visible = this.state.visible;
    	visible.byID = false;

        this.setState({
            visible: visible
        });
    }

    showTooltipByClassName() {
    	let visible = this.state.visible;
    	visible.byClassName = true;

        this.setState({
            visible: visible
        });
    }

    hideTooltipByClassName() {
    	let visible = this.state.visible;
    	visible.byClassName = false;
    	
        this.setState({
            visible: visible
        });
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block className={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>TOOLTIPS</Text>
	        			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
							Tooltips are labels that appear on hover and focus when the user hovers over an element with the cursor, focuses on an element using a keyboard (usually through the tab key), or, in a touch UI, upon touch (without releasing). Check out some examples and how to use them below.
						</Text>

			        	<Card>
			        		<CardContent>
			        			<Block className={'e-row'}>
					        		<Block className={'brick brick-4'} style={{paddingTop:'0', paddingLeft:'0'}}>
			        					<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
			        					<Divider classes={'thin short e-background-indigo-400'} />
				        				<Block className={'e-text-center e-padding-top-50'}>
											<Btn 
												id={'tooltipButton'} 
												type={'succes'} 
												label={'Tooltip by ID'}
												onMouseOver={this.showTooltipByID.bind(this)} 
												onMouseOut={this.hideTooltipByID.bind(this)} 
												className={'flat e-margin-bottom-50 e-background-indigo-600'} />
											<br />
											<Btn 
												type={'info e-background-grey-700'} 
												label={'Tooltip by class name'}
												onMouseOver={this.showTooltipByClassName.bind(this)} 
												onMouseOut={this.hideTooltipByClassName.bind(this)} 
												className={'flat tooltipButton'} />
											<br />

										</Block>
										<Tooltip 
											target={'#tooltipButton'}  
											visible={this.state.visible.byID}>
												Tooltip by ID tooltipButton
										</Tooltip>

										<Tooltip 
											target={'.tooltipButton'}  
											visible={this.state.visible.byClassName}>
												Tooltip by class name tooltipButton
										</Tooltip>
				        			</Block>
				        			<Block className={'brick brick-8'} style={{paddingTop:'0', paddingRight:'0'}}>
				        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
				        				<Divider classes={'thin short e-background-indigo-400'} />

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												npm install <strong>essence-tooltip</strong>
					        				</code>
				        				</pre>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											Tooltip component has the following options:
											<br />
											<br />
											1. <strong>target</strong>: <u>string</u> - target ID or element class name or element tag (see example below)
											<br />
											2. <strong>visible</strong>: <u>true</u> - show the tooltip or <u>false</u> (<strong>default</strong>) - hide the tooltip
											<br />
											<br />
										</Text>
										
				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											Create a new ReactJS file with the code bellow.
										</Text>

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												import Tooltip from 'essence-tooltip';
												<br />
												<br />
												&lt;Tooltip target=&#123;'#tooltipButton'&#125; visible=&#123;{this.state.visible.byID.toString()}&#125;&gt;
												<br />
												&nbsp;&nbsp;Tooltip by ID #tooltipButton
												<br />
												&lt;/Tooltip&gt;
												<br />
												<br />
												&lt;Tooltip target=&#123;'.tooltipButton'&#125; visible=&#123;{this.state.visible.byClassName.toString()}&#125;&gt;
												<br />
												&nbsp;&nbsp;Tooltip by class name .tooltipButton
												<br />
												&lt;/Tooltip&gt;
												<br />
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

exports.AppTooltip = AppTooltip;