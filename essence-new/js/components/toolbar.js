import React from 'react';
import Menu from 'essence-menu';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import ClassNames from 'classnames';
import ToolBar from 'essence-toolbar';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppToolBar extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
          classes: ClassNames(
              this.props.classes,
              this.props.className
          ),
          ToolBarTitle: false
      };
  }

  changeTitle(string) {
  	this.setState({
  		ToolBarTitle: string.toString()
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>TOOLBAR</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Toolbars are versatile and can be used in many different ways.
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
											    	
							<Block className={'e-row e-body1 e-text-grey-700'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin'}>
									<ToolBar className={' clearfix'} style={{margin:'85px 0 25px 0'}}>
										<Menu type={'cover'} icon={'navigation-more-vert'} classes={'e-left'}>
											<Text className={'e-text-black'}>
												<Text
													onClick={this.changeTitle.bind(this, 'Toasts')}>
													<Text>Change Title</Text>
													&nbsp;
													<Text type={'strong'}>Toasts</Text>
												</Text>
											</Text>
											<Text className={'e-text-black'}>
												<Text
													onClick={this.changeTitle.bind(this, 'SnackBars')}>
													<Text>Change Title</Text>
													&nbsp;
													<Text type={'strong'}>SnackBars</Text>
												</Text>
											</Text>
											<Text className={'e-text-black'}>
												<Text
													onClick={this.changeTitle.bind(this, 'Data Table')}>
													<Text>Change Title</Text>
													&nbsp;
													<Text type={'strong'}>Data Table</Text>
												</Text>
											</Text>
										</Menu>

										<Text>Essence - {this.state.ToolBarTitle || 'ToolBar Example'}</Text>

										<Block className={'e-right'}>
											<Menu type={'cover'} icon={'action-settings'} classes={'e-right'}>
												<Text className={'e-text-black'}>
													<Text type={'a'} href={'#icons'}>Link to: Icons</Text>
												</Text>
												<Text className={'e-text-black'}>
													<Text type={'a'} href={'#button'}>Link to: Buttons</Text>
												</Text>
												<Text className={'e-text-black'}>
													<Text type={'a'} href={'#core'}>Link to: Essence Core</Text>
												</Text>
											</Menu>
										</Block>
									</ToolBar>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
		    				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />		        						        				

		    				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								See the Live Example and customize your own AppBar component with code below.
								<br />
								<br />								
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>		
			    					npm install essence-toolbar							
			    				</code>
			    			</pre>
			    			<br />
			    			<br />
			    			<pre className={'e-background-orange-100 e-text-black e-no-margin e-margin-bottom-25'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Menu from 'essence-menu';
									<br />
									import ToolBar from 'essence-toolbar';
									<br />
									import &#123;Block, Text, Divider&#125; from 'essence-core';
									<br />
									<br />

									<br />
									<br />
									&lt;ToolBar className=&#123;'e-background-white e-text-black'&#125;&gt;
									<br />
									&nbsp;&lt;Menu type=&#123;'cover'&#125; icon=&#123;'navigation-more-vert'&#125; className=&#123;'e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text onClick=&#123;this.changeTitle.bind(this, 'Toasts')&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Change Title&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125;&gt;Toasts&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text onClick=&#123;this.changeTitle.bind(this, 'SnackBars')&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Change Title&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125;&gt;SnackBars&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text onClick=&#123;this.changeTitle.bind(this, 'Data Table')&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Change Title&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125;&gt;Data Table&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/Menu&gt;
									<br />
									<br />
									&nbsp;&lt;Text&gt;Essence - &#123;this.state.ToolBarTitle || 'ToolBar Example'&#125;&lt;/Text&gt;
									<br />
									<br />
									&nbsp;&lt;Block className=&#123;'e-right'&#125;&gt;
									<br />
									&nbsp;&nbsp;&lt;Menu type=&#123;'cover'&#125; icon=&#123;'action-settings'&#125; className=&#123;'e-right'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#icons'&#125;&gt;Link to: Icons&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#button'&#125;&gt;Link to: Buttons&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#core'&#125;&gt;Link to: Essence Core&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Menu&gt;
									<br />
									&nbsp;&lt;/Block&gt;
									<br />
									&lt;/ToolBar&gt;			
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
	        						floating
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						floating=&#123;false&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Boolean true or false, add a className <u>floating</u> to component classes
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						bottom
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						bottom=&#123;false&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Boolean true or false, add a className <u>bottom</u> to component classes
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						noShadow
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						noShadow=&#123;false&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Boolean true or false, add a className <u>no-shadow</u> to component classes
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

exports.AppToolBar = AppToolBar;