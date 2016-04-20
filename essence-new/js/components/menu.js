import React from 'react';
import Menu from 'essence-menu';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppMenu extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>MENUS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    Menus allow users to take an action by selecting from a list of choices revealed upon opening a temporary, new sheet of material.
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
									<Block classes={'brick brick-12'}>
			        						<Text type={'p'} classes={'e-text-center e-text-indigo-500'}>Menu left side</Text>
											<Block classes={'e-background-grey-100'} style={{padding:'15px'}}>
												<Menu type={'cover'} placeholder={'Left'}>
													<Text classes={'e-text-black'}>Profile</Text>
													<Text classes={'e-text-black'}>Settings</Text>
													<Text classes={'e-text-black'}>Logout</Text>
												</Menu>
											</Block>
										</Block>

										<Block classes={'brick brick-12'}>
			        						<Text type={'p'} classes={'e-text-center e-text-indigo-500'}>Menu right side</Text>
			        						<Block classes={'e-background-grey-100 clearfix'} style={{padding:'15px'}}>
												<Menu type={'cover'} placeholder={'Right'} classes={'e-right'}>
													<Text classes={'e-text-black'}>Profile</Text>
													<Text classes={'e-text-black'}>Settings</Text>
													<Text classes={'e-text-black'}>Logout</Text>
												</Menu>
											</Block>
										</Block>

										<Block classes={'brick brick-12'}>
			        						<Text type={'p'} classes={'e-text-center e-text-indigo-500'}>Menu with Icon</Text>
											<Block classes={'e-background-grey-100'}  style={{padding:'10px 15px', fontSize:'24px'}}>
												<Menu type={'cover'} icon={'action-account-circle'} className={'e-text-center e-text-indigo-500'}>
													<Text classes={'e-text-black'}>Profile</Text>
													<Text classes={'e-text-black'}>Settings</Text>
													<Text classes={'e-text-black'}>Logout</Text>
												</Menu>
											</Block>
										</Block>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-menu</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Menu from 'essence-menu';
									<br />
									<br />
									&lt;Menu type=&#123;'cover'&#125; placeholder=&#123;'Left'&#125;&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Profile&lt;/Text&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Settings&lt;/Text&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Logout&lt;/Text&gt;
									<br />
									&lt;/Menu&gt;
									<br />
									<br />
									&lt;Menu type=&#123;'cover'&#125; placeholder=&#123;'Right'&#125; classes=&#123;'e-right'&#125;&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Profile&lt;/Text&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Settings&lt;/Text&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Logout&lt;/Text&gt;
									<br />
									&lt;/Menu&gt;
									<br />
									<br />
									&lt;Menu type=&#123;'cover'&#125; icon=&#123;'action-account-circle'&#125; className=&#123;'e-text-center e-text-orange-500'&#125;&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Profile&lt;/Text&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Settings&lt;/Text&gt;
									<br />
									&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Logout&lt;/Text&gt;
									<br />
									&lt;/Menu&gt;						
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
	        						type
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									From selected list: fab or cover
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						placeholder
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						placeholder=&#123;'menu'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String for initial menu text
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						icon
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Icon name from the Icons list
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						right
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Right position for menu list 
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

exports.AppMenu = AppMenu;