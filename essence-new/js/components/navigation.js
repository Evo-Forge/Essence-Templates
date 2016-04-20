import React from 'react';
import ReactDOM from 'react-dom';
import Btn from 'essence-button';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import Navigation from 'essence-navigation';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppNavigation extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>NAVIGATION</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    The navigation drawer slides in from the left. It is a common pattern found in Google apps and follows the keylines and metrics for lists.
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
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-padding-top-25'}>
									<Navigation style={{position:'relative', zIndex: '2'}}>
										<Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
											<Block type={'header'} className={'e-nav-header'} style={{lineHeight: '52px'}}>
												<Text type={'a'} href={'#home'}>
													<Image 
														width={'40px'} 
														height={'40px'} 
														style={{ verticalAlign: 'middle'}} 
														src={'http://getessence.io/assets/img/essence_icon.png'} />
												</Text>
												<Text type={'h2'} classes={'e-text-indigo-400 e-right'} style={{width: '74%', lineHeight: '45px'}}>
													<Text>essence</Text>
												</Text>
											</Block>
											<List type={'navigation'} classes={'e-background-white'}>
												<ListItem key={'about'}>
													<Text type={'a'} href={'#about'}>
														<Block classes={'content e-left'}>
															<Text type={'small'}>About</Text>
														</Block>	
													</Text>
												</ListItem>
												<ListItem key={'get-started'}>
													<Text type={'a'} href={'#get-started'}>
														<Block classes={'content e-left'}>
															<Text type={'small'}>Get Started</Text>
														</Block>	
													</Text>
												</ListItem>
												<ListItem key={'contact'}>
													<Text type={'a'} href={'#contact'}>
														<Block classes={'content e-left'}>
															<Text type={'small'}>Contact</Text>
														</Block>	
													</Text>
												</ListItem>
											</List>
										</Block>
									</Navigation>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-navigation</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Navigation from 'essence-navigation';
									<br />
									<br />
									&lt;Navigation&gt;
									<br />
									&nbsp;&lt;Block classes=&#123;'e-navigation-wrapper'&#125; id=&#123;'navigationMenu'&#125;&gt;
									<br />
									&nbsp;&nbsp;&lt;Block type=&#123;'header'&#125; className=&#123;'e-nav-header'&#125; style=&#123;&#123;lineHeight: '52px'&#125;&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#home'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Image width=&#123;'40px'&#125; height=&#123;'40px'&#125; style=&#123;&#123;verticalAlign: 'middle'&#125;&#125; src=&#123;'http://getessence.io/assets/img/essence_icon.png'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'h2'&#125; classes=&#123;'e-text-indigo-400 e-right'&#125; style=&#123;&#123;width: '74%', lineHeight: '45px'&#125;&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;essence&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&lt;List type=&#123;'navigation'&#125; classes=&#123;'e-background-white'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;ListItem key=&#123;'about'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#about'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'small'&#125;&gt;About&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;ListItem key=&#123;'get-started'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#get-started'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Get Started&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;ListItem key=&#123;'contact'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#contact'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Contact&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;/List&gt;
									<br />
									&nbsp;&lt;/Block&gt;
									<br />
									&lt;/Navigation&gt;						
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
	        						visible=&#123;'false'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									<u>true</u> - show the navigation menu or <u>false</u> - hide the navigation menu
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						dismissible
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						dismissible=&#123;'true'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 true or false to toggle the visible prop when clicked on the overlay
	        					</Block>
	        				</Block>       
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onOpen
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Callback function when Navigation component has visible toggled to true
	        					</Block>
	        				</Block>        	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onClose
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Callback function when Navigation component has visible toggled to false
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

exports.AppNavigation = AppNavigation;