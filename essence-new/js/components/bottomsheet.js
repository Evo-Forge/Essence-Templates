import React from 'react';
import Icon from 'essence-icon';
import Btn from 'essence-button';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {List, ListItem} from 'essence-list';
import BottomSheets from 'essence-bottomsheet';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppBottomSheet extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	visible: {
        		simple: false,
        		bigicons: false,
        	},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    showSimple() {
    	let visible = this.state.visible;
    	visible.simple = true;

    	this.setState({
    		visible: visible
    	})
    }

    hideSimple() {
    	let visible = this.state.visible;
    	visible.simple = false;

    	this.setState({
    		visible: visible
    	})
    }

    showBigIcons() {
    	let visible = this.state.visible;
    	visible.bigicons = true;

    	this.setState({
    		visible: visible
    	})
    }

    hideBigIcons() {
    	let visible = this.state.visible;
    	visible.bigicons = false;

    	this.setState({
    		visible: visible
    	})
    }

    render() {
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>BOTTOM SHEETS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    Bottom sheets slide up from the bottom edge of the screen to reveal additional content.
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
		        		<Block classes={'brick brick-6'} style={{overflow:'hidden'}}>
		        			<Block classes={'brick brick-12'} style={{overflow:'hidden'}}>	
								<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE 1</Text>
			    				<Divider classes={'thick short e-background-indigo-500'} />							
												    	
								<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15 e-padding-bottom-15'}>
									<Block className={'e-text-grey-900 brick brick-12 e-no-margin'}>
										<Block className={'e-text-center'}>
											<Btn 
												type={'succes'} 
												label={'Show Simple Bottom Sheets'}
												onClick={this.showSimple.bind(this)} 
												className={'flat e-background-indigo-600'} />										
										</Block>
										<BottomSheets 
											classes={'e-background-white'} 
											onEnd={this.hideSimple.bind(this)}
											visible={this.state.visible.simple}>
										    <List type={'navigation'}>
										        <ListItem>
										            <Text type={'a'} href={'#icons'}>
										                <Icon name={'action-picture-in-picture'} />
										                <Text>Icons </Text>
										                &nbsp;
										                <Text type={'sup'}>
										                	<Text type={'strong'} className={'e-text-indigo-400'}>by Essence</Text>
										                </Text>
										            </Text>
										        </ListItem>
										        <ListItem>
										            <Text type={'a'} href={'#colors'}>
										                <Icon name={'image-color-lens'} />
										                <Text>Colors</Text>
										                &nbsp;
										                <Text type={'sup'}>
										                	<Text type={'strong'} className={'e-text-indigo-400'}>by Essence</Text>
										                </Text>
										            </Text>
										        </ListItem>
										        <ListItem>
										            <Text type={'a'} href={'#button'}>
										                <Icon name={'toggle-radio-button-on'} />
										                <Text>Buttons</Text>
										                &nbsp;
										                <Text type={'sup'}>
										                	<Text type={'strong'} className={'e-text-indigo-400'}>by Essence</Text>
										                </Text>
										            </Text>
										        </ListItem>
										        <ListItem>
										            <Text type={'a'} href={'#slider'}>
										                <Icon name={'image-wb-irradescent'} />
										               	<Text>Sliders</Text>
										               	&nbsp;
										               	<Text type={'sup'}>
										               		<Text type={'strong'} className={'e-text-indigo-400'}>by Essence</Text>
										               	</Text>
										            </Text>
										        </ListItem>
										    </List>
										</BottomSheets>
									</Block>						
								</Block>								
							</Block>
							<Block classes={'brick brick-12'}>
								<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
		        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />		        						        				

		        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
									Use the "BottomSheets" Essence component to render a group of "BottomSheetsItem" components. The "BottomSheets" Essence component will return a div container with class name "e-bottom-sheet". Inside the BottomSheets component you can include only the BottomSheetsItem component. A "BottomSheetsItem" Essence component will render one List component.
								</Text>

								<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
				    				<code>
										npm install <strong>essence-bottomsheet</strong>
			        				</code>
								</pre>
								<br />
								<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
									BOTTOM SHEETS SIMPLE
									<br />
									<br />
									Create a new ReactJS file with the code bellow.
								</Text>
								
								<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
				    				<code>
										import BottomSheets from 'essence-bottomsheet';
										<br />
										<br />
										&lt;BottomSheets classes=&#123;'e-background-white'&#125; visible=&#123;true&#125;&gt;
										<br />
										&nbsp;&lt;List type=&#123;'navigation'&#125;&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#icons'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-picture-in-picture'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Icons &lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'sup'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;by Essence&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#colors'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'image-color-lens'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Colors&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'sup'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;by Essence&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#button'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'toggle-radio-button-on'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Buttons&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'sup'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;by Essence&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#slider'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'image-wb-irradescent'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Sliders&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'sup'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;by Essence&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;/List&gt;
										<br />
										&lt;/BottomSheets&gt;								
				    				</code>
								</pre>
							</Block>						
		        		</Block>

		        		<Block classes={'brick brick-6'} style={{overflow:'hidden'}}>
		        			<Block classes={'brick brick-12'} style={{overflow:'hidden'}}>	
								<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE 2</Text>
			    				<Divider classes={'thick short e-background-indigo-500'} />							
												    	
								<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15 e-padding-bottom-15'}>
									<Block className={'e-text-grey-900 brick brick-12 e-no-margin'}>
										<Block className={'e-text-center'}>
											<Btn 
												type={'info'} 
												label={'Show Big Icons Bottom Sheets'}
												onClick={this.showBigIcons.bind(this)} 
												className={'flat e-background-grey-700'} />
										</Block>
										<BottomSheets 
											classes={'e-background-white big-icons'}
											onEnd={this.hideBigIcons.bind(this)}
											visible={this.state.visible.bigicons}>
										    <List type={'navigation'} className={'e-text-indigo-400'}>
										        <ListItem>
										            <Text type={'a'} href={'#icons'}>
										                <Icon name={'action-picture-in-picture'} />
										                <Text>Icons</Text>
										            </Text>
										        </ListItem>
										        <ListItem>
										            <Text type={'a'} href={'#colors'}>
										                <Icon name={'image-color-lens'} />
										                <Text>Colors</Text>
										            </Text>
										        </ListItem>
										        <ListItem>
										            <Text type={'a'} href={'#button'}>
										                <Icon name={'toggle-radio-button-on'} />
										                <Text>Buttons</Text>
										            </Text>
										        </ListItem>
										        <ListItem>
										            <Text type={'a'} href={'#core'}>
										                <Icon name={'action-group-work'} />
										               	<Text>Core</Text>
										            </Text>
										        </ListItem>
										        <ListItem>
										            <Text type={'a'} href={'#slider'}>
										                <Icon name={'image-wb-irradescent'} />
										               	<Text>Sliders</Text>
										            </Text>
										        </ListItem>
										        <ListItem>
										            <Text type={'a'} href={'#touchpad'}>
										                <Icon name={'action-tab-unselected'} />
										               	<Text>TouchPad</Text>
										            </Text>
										        </ListItem>
										    </List>
										</BottomSheets>
									</Block>						
								</Block>								
							</Block>
							<Block classes={'brick brick-12'}>
								<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
		        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />		        						        				

		        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
									Use the "BottomSheets" Essence component to render a group of "BottomSheetsItem" components. The "BottomSheets" Essence component will return a div container with class name "e-bottom-sheet". Inside the BottomSheets component you can include only the BottomSheetsItem component. A "BottomSheetsItem" Essence component will render one List component.
								</Text>

								<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
				    				<code>
										npm install <strong>essence-bottomsheet</strong>
			        				</code>
								</pre>
								<br />
								<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
									BOTTOM SHEETS BIG ICONS
									<br />
									<br />
									Create a new ReactJS file with the code bellow.
								</Text>
								
								<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
				    				<code>
										import BottomSheets from 'essence-bottomsheet';
										<br />
										<br />
										&lt;BottomSheets classes=&#123;'e-background-white big-icons'&#125; visible=&#123;true&#125;&gt;
										<br />
										&nbsp;&lt;List type=&#123;'navigation'&#125; className=&#123;'e-text-indigo-400'&#125;&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#icons'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-picture-in-picture'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Icons&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#colors'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'image-color-lens'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Colors&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#button'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'toggle-radio-button-on'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Buttons&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#core'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-group-work'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Core&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#slider'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'image-wb-irradescent'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Sliders&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&nbsp;&lt;ListItem&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#touchpad'&#125;&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-tab-unselected'&#125; /&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;TouchPad&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
										<br />
										&nbsp;&nbsp;&lt;/ListItem&gt;
										<br />
										&nbsp;&lt;/List&gt;
										<br />
										&lt;/BottomSheets&gt;
			        				</code>
								</pre>
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
	        						visible
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									visible: true - show the bottom sheet & false (default) - hide the bottom sheet
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
									 Callback function when the BottomSheet has toggled visible to true
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
									 Callback function when the BottomSheet has toggled visible to false
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

exports.AppBottomSheet = AppBottomSheet;