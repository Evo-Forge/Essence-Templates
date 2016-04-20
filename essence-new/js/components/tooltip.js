import React from 'react';
import ReactDOM from 'react-dom';
import Btn from 'essence-button';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Tooltip from 'essence-tooltip';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

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
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>TOOLTIPS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Tooltips are labels that appear on hover and focus when the user hovers over an element with the cursor, focuses on an element using a keyboard (usually through the tab key), or upon touch (without releasing) in a touch UI. 
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
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin'}>
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
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-tooltip</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
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
	        						visible=&#123;false&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									true - show the tooltip or false (default) - hide the tooltip
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						target
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String - target ID or element class name or element tag
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

exports.AppTooltip = AppTooltip;