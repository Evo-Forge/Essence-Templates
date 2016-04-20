import React from 'react';
import Tab from 'essence-tab';
import Btn from 'essence-button';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import Switch from 'essence-switch';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider, Utils} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppButton extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	buttonType: 'success',
        	buttonColor: 'raised',
        	buttonRipple: false,
        	buttonDisabled: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    changeButton(options) {
    	this.setState({
    		buttonType: options.type || this.state.buttonType,
        	buttonColor: options.color || this.state.buttonColor,
        	buttonRipple: options.ripple ? true : false,
        	buttonDisabled: options.disabled ? true : false
    	});
    }

    renderRaised() {
		let raisedList = [
			(<Btn 
				key={'button-raised-default'}
				onClick={this.changeButton.bind(this, {type: 'default', color: 'raised'} )}
				ripple={false}
				className={'raised'}
				label={'DEFAULT'}
				type={'default'} />),
			(<Btn 
				key={'button-raised-primary'}
				onClick={this.changeButton.bind(this, {type: 'primary', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'PRIMARY'}
				type={'primary'} />),
			(<Btn 
				key={'button-raised-success'}
				onClick={this.changeButton.bind(this, {type: 'success', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'SUCCESS'}
				type={'success'} />),
			(<Btn 
				key={'button-raised-info'}
				onClick={this.changeButton.bind(this, {type: 'info', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'INFO'}
				type={'info'} />),
			(<Btn 
				key={'button-raised-warning'}
				onClick={this.changeButton.bind(this, {type: 'warning', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'WARNING'}
				type={'warning'} />),
			(<Btn 
				key={'button-raised-danger'}
				onClick={this.changeButton.bind(this, {type: 'danger', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'DANGER'}
				type={'danger'} />)
		];

		return raisedList;
    }

    renderFlat() {
		let flatList = [
			(<Btn 
				key={'button-flat-default'}
				onClick={this.changeButton.bind(this, {type: 'default', color: 'flat'} )}
				ripple={false}
				className={'flat'}
				label={'DEFAULT'}
				type={'default'} />),
			(<Btn 
				key={'button-flat-primary'}
				onClick={this.changeButton.bind(this, {type: 'primary', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'PRIMARY'}
				type={'primary'} />),
			(<Btn 
				key={'button-flat-success'}
				onClick={this.changeButton.bind(this, {type: 'success', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'SUCCESS'}
				type={'success'} />),
			(<Btn 
				key={'button-flat-info'}
				onClick={this.changeButton.bind(this, {type: 'info', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'INFO'}
				type={'info'} />),
			(<Btn 
				key={'button-flat-warning'}
				onClick={this.changeButton.bind(this, {type: 'warning', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'WARNING'}
				type={'warning'} />),
			(<Btn 
				key={'button-flat-danger'}
				onClick={this.changeButton.bind(this, {type: 'danger', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'DANGER'}
				type={'danger'} />)
		];

		return flatList;
    }

    renderFab() {
		let fabList = [
			(<Btn 
				key={'button-fab'}
				ripple={false}
				label={'FAB'}
				type={'fab'}
				className={'fab e-text-white'} />),
			(<Btn 
				key={'button-fab-mini'}
				ripple={false}
				label={'MINI'}
				type={'fab'}
				className={'fab-mini e-text-white'} />)
		];

		return fabList;
    }

    renderOptions(self) {

		let optionsList = [
			(
				<Block key={'options-ripple'}
					className={'e-padding-top-25'}>
					<Text type={'p'}>Switch ON or OFF the option for <strong>Ripple Effect</strong></Text>
					<Switch 
						type={'switches'} 
						afterText={'ON'} 
						beforeText={'OFF'} 
						name={'switch-ripple'} 
						onClick={this.changeButton.bind(this, {ripple: !self.state.buttonRipple} )}/>
				</Block>
			),
			(
				<Block key={'options-disable'}
					className={'e-padding-top-25 e-padding-bottom-25'}>
					<Text type={'p'}>Switch ON or OFF the option for <strong>Disabled</strong> option</Text>
					<Switch 
						type={'switches'} 
						afterText={'ON'} 
						beforeText={'OFF'} 
						name={'switch-disable'}
						onClick={this.changeButton.bind(this, {disabled: !self.state.buttonDisabled} )}/>
				</Block>
			)
		];

		return optionsList;
    }

    render() {
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>BUTTONS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    A button clearly communicates what action will occur when the user touches it. It consists of text, an image, or both, designed in accordance with your app’s color theme.
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
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-50'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-h-center'}>
									<Btn
										type={this.state.buttonType}
										ripple={this.state.buttonRipple === true ? true : false}
										label={'Button Example'}
										isDisabled={this.state.buttonDisabled === true ? true : false}
										className={ClassNames(this.state.buttonColor)} />
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />		        						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Steps for using the component:
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Btn from 'essence-button';
									<br />
									<br />
									&lt;Btn
									label=&#123;'Button Example'&#125; 
									ripple=&#123;{this.state.buttonRipple.toString()}&#125; 
									type=&#123;'{this.state.buttonType}'&#125; 
									className=&#123;'{ClassNames(this.state.buttonColor)}'&#125; /&gt; 
								</code>
							</pre>
						</Block>

						<Block classes={'brick brick-12'}>
	        				<Block className={'e-padding-bottom-25'}>
			        			<Text type={'h4'} classes={'e-text-indigo-500'}>CHOOSE BUTTON TYPE</Text>
			    				<Divider classes={'thick short e-background-indigo-500'} />
				        		<Tab data={{
									'header': [{
											'context': (<Text>Raised</Text>)
										},{
											'context': (<Text>Flat</Text>)
										},{
											'context': (<Text>Fab</Text>)
										},{
											'context': (<Text>Options</Text>)
										}
									],
									'rows': [ 
										(
											<Block className={'e-text-center e-padding-top-75 e-padding-bottom-75'}>
												{this.renderRaised()}
											</Block>
										),
										(
											<Block className={'e-text-center e-padding-top-75 e-padding-bottom-75'}>
												{this.renderFlat()}
											</Block>
										),
										(
											<Block className={'e-text-center e-padding-top-75 e-padding-bottom-75'}>
												{this.renderFab()}
											</Block>
										),
										(
											<Block className={'e-text-center'}>
												<Block className={'e-padding-top-25'}>
													<Text type={'p'}>Switch ON or OFF the option for <strong>Ripple Effect</strong></Text>
													<Switch 
														type={'switches'} 
														afterText={'ON'} 
														beforeText={'OFF'} 
														name={'switch-ripple'} 
														onClick={this.changeButton.bind(this, {ripple: !this.state.buttonRipple} )}/>
												</Block>
												<Block className={'e-padding-top-25 e-padding-bottom-25'}>
													<Text type={'p'}>Switch ON or OFF the option for <strong>Disabled</strong> option</Text>
													<Switch 
														type={'switches'} 
														afterText={'ON'} 
														beforeText={'OFF'} 
														name={'switch-disable'}
														onClick={this.changeButton.bind(this, {disabled: !this.state.buttonDisabled} )}/>
												</Block>
											</Block>
										)
									]
								}}
								classes={'e-background-indigo-700 e-text-grey-50'} 
								indicator={'e-background-grey-50'}/>
			    			</Block>
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
	        						button
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						flat
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Choose button type: raised, flat, fab, fab-mini
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						type
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						type=&#123;'default'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Choose button type: default, primary, success, info, warning, danger
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						icon
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Name of icon
	        					</Block>
	        				</Block>   
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						label
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									The text of the button
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						submit
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	 
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Set type to submit or button
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						ripple
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						true
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Enable ripple effect & false - disable ripple effect
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

exports.AppButton = AppButton;