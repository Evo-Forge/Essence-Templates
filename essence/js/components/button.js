import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import Btn from 'essence-button';
import Switch from 'essence-switch';
import {Block, Text, Divider, Utils} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppButton extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	buttonType: 'succes',
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
				onClick={this.changeButton.bind(this, {type: 'succes', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'SUCCESS'}
				type={'succes'} />),
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
				onClick={this.changeButton.bind(this, {type: 'succes', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'SUCCESS'}
				type={'succes'} />),
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
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>BUTTONS</Text>
		    			<Divider classes={'thick short e-background-indigo-400'} />
		    			<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
							A button clearly communicates what action will occur when the user touches it. It consists of text, an image, or both, designed in accordance with your app’s color theme.
						</Text>

			        	<Card>
			        		<CardContent>
			        			<Block className={'e-row'}>
									<Block className={'brick brick-5'} style={{paddingLeft:'0', paddingTop:'0'}}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
										<Divider classes={'thin short e-background-indigo-400'} />
										<Block className={'e-text-center e-padding-top-15'}>
				        					<Btn
												type={this.state.buttonType}
												ripple={this.state.buttonRipple === true ? true : false}
												label={'Button Example'}
												isDisabled={this.state.buttonDisabled === true ? true : false}
												className={ClassNames(this.state.buttonColor)} />
										</Block>
									</Block>
									<Block className={'brick brick-7'} style={{paddingRight:'0', paddingTop:'0'}}> 
										<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
										<Divider classes={'thin short e-background-indigo-400'} />

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											Button component has the following options:
											<br />
											<br />
											1. <strong>icon</strong>: name of icon
											<br />
											2. <strong>label</strong>: the text of the button
											<br />
											3. <strong>type</strong>: type of button from the list: <u>raised</u>, <u>flat</u> or <u>fab</u>
											<br />
											4. <strong>submit</strong>: <u>false</u> (<strong>default</strong>) or <u>true</u> - set type to <u>submit</u> or <u>button</u>
											<br />
											5. <strong>onClick</strong>: callback function on click event
											<br />
											6. <strong>ripple</strong>: <u>true</u> (<strong>default</strong>) - enable ripple effect & <u>false</u> - disable ripple effect
											<br />
											<br />
										</Text>

										<pre className={'e-background-grey-100 e-text-black'}>
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
		        				</Block>
			        		</CardContent>
						</Card>

		        		<Block className={'e-padding-bottom-25'}>
							<Text type={'h4'} classes={'e-text-indigo-400'}>CHOOSE BUTTON TYPE</Text>
							<Divider classes={'thin short e-background-indigo-400'} />

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
							classes={'e-background-indigo-400 e-text-grey-50'} 
							indicator={'e-background-grey-50'}/>
		        		</Block>
					</Block>
				</Block>
			</Block>
		);
    }
}

exports.AppButton = AppButton;