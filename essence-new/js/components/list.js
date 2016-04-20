import React from 'react';
import Icon from 'essence-icon';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import Switch from 'essence-switch';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import { List, ListItem } from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppList extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>LISTS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    Lists present multiple line items vertically as a single continuous element. 
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
								<Block className={'e-text-grey-900 brick brick-12'} style={{margin:'70px 0 0 0'}}>
									<Text type={'p'} className={'e-text-indigo-500'}>List - Single Line</Text>
									<Block className={'brick brick-12 e-background-grey-100 '}>
										<List type={'navigation'}>
											<ListItem>
												<Text type={'a'}>
													<Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
													<Block classes={'content e-left'}>List Controls</Block>	
													<Switch type={'checkbox'} classes={'e-right'} name='radioButton'/>
												</Text>
											</ListItem>
											<ListItem>
												<Text type={'a'}>
													<Switch type={'switches'} classes={'e-left'} name='switch'/>
													<Block classes={'content e-left'}>List Controls</Block>
													<Switch type={'switches'} classes={'e-right'} name='switch'/>
												</Text>
											</ListItem>
											<ListItem>
												<Text type={'a'}>
													<Icon name={'action-stars'} classes={'e-left'} />
													<Block classes={'content e-left'}>Mutant Ninja</Block>								
													<Image src={'http://i.imgur.com/DhsdGIs.jpg'} alt={'Star Wars'} classes={'e-avatar e-right'} />
												</Text>
											</ListItem>
										</List>
									</Block>						
								</Block>														
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-list</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								List with Single Line
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import &#123; List, ListItem &#125; from 'essence-list';
									<br />
									<br />
									&lt;List type=&#123;'navigation'&#125;&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Switch type=&#123;'checkbox'&#125; classes=&#123;'e-left'&#125; name='radioButton'/&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;List Controls&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Switch type=&#123;'checkbox'&#125; classes=&#123;'e-right'&#125; name='radioButton'/&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Switch type=&#123;'switches'&#125; classes=&#123;'e-left'&#125; name='switch'/&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;List Controls&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Switch type=&#123;'switches'&#125; classes=&#123;'e-right'&#125; name='switch'/&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-stars'&#125; classes=&#123;'e-left'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;Mutant Ninja&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/DhsdGIs.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-right'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&lt;/List&gt;
									<br />
									<br />															
			    				</code>
							</pre>
						</Block>
						<Block classes={'brick brick-4'} style={{overflow:'hidden'}}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-padding-top-25'}>
									<Text type={'p'} className={'e-text-indigo-500'}>List - Two Lines</Text>
									<Block className={'brick brick-12 e-background-grey-100 '}>
										<List type={'navigation'} classes={'e-twolinelist'}>
											<ListItem>
												<Text type={'a'}>
													<Image src={'http://i.imgur.com/5bteaK6.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
													<Block classes={'content e-left'}>
														<Text classes={'primary'}>Johnny Bravo</Text>
														<Text classes={'secondary'}>Jan 9, 2016</Text>
													</Block>	
													<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
												</Text>
											</ListItem>
											<ListItem>
												<Text type={'a'}>
													<Image src={'http://i.imgur.com/xrDnt12.png'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
													<Block classes={'content e-left'}>
														<Text classes={'primary'}>Uncle Bear</Text>
														<Text classes={'secondary'}>Jan 10, 2016</Text>
													</Block>	
													<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
												</Text>
											</ListItem>
											<ListItem>
												<Text type={'a'}>
													<Image src={'http://i.imgur.com/DhsdGIs.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
													<Block classes={'content e-left'}>
														<Text classes={'primary'}>Mutant Ninja</Text>
														<Text classes={'secondary'}>Jan 11, 2016</Text>
													</Block>	
													<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
												</Text>
											</ListItem>
										</List>
									</Block>						
								</Block>														
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />		        					       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								List with Two Lines
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
			    					import &#123; List, ListItem &#125; from 'essence-list';
									<br />
									<br />
									&lt;List type=&#123;'navigation'&#125; classes=&#123;'e-twolinelist'&#125;&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/5bteaK6.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Johnny Bravo&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 9, 2016&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/xrDnt12.png'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Uncle Bear&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 10, 2016&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/DhsdGIs.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Mutant Ninja&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 11, 2016&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&lt;/List&gt;
									<br />
									<br />															
			    				</code>
							</pre>
						</Block>
						<Block classes={'brick brick-4'} style={{overflow:'hidden'}}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-padding-top-25'}>
									<Text type={'p'} className={'e-text-indigo-500'}>List - Three Lines</Text>
									<Block className={'brick brick-12 e-background-grey-100 '}>
										<List type={'navigation'} classes={'e-threelinelist'}>
											<ListItem>
												<Text type={'a'}>
													<Image src={'http://i.imgur.com/5bteaK6.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
													<Block classes={'content e-left'}>
														<Text classes={'primary'}>Johnny Bravo</Text>
														<Text classes={'secondary'}>Jan 9, 2016</Text>
														<Text classes={'tertiary'}>21:44</Text>
													</Block>	
													<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
												</Text>
											</ListItem>
											<ListItem>
												<Text type={'a'}>
													<Image src={'http://i.imgur.com/xrDnt12.png'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
													<Block classes={'content e-left'}>
														<Text classes={'primary'}>Uncle Bear</Text>
														<Text classes={'secondary'}>Jan 10, 2016</Text>
														<Text classes={'tertiary'}>08:21</Text>
													</Block>	
													<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
												</Text>
											</ListItem>
											<ListItem>
												<Text type={'a'}>
													<Image src={'http://i.imgur.com/DhsdGIs.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>		
													<Block classes={'content e-left'}>
														<Text classes={'primary'}>Mutant Ninja</Text>
														<Text classes={'secondary'}>Jan 11, 2016</Text>
														<Text classes={'tertiary'}>20:14</Text>
													</Block>	
													<Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
												</Text>
											</ListItem>
										</List>
									</Block>							
								</Block>														
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />		        					       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								List with Three Lines
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
			    					import &#123; List, ListItem &#125; from 'essence-list';
									<br />
									<br />
									&lt;List type=&#123;'navigation'&#125; classes=&#123;'e-threelinelist'&#125;&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/5bteaK6.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;&nbsp;&nbsp;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Johnny Bravo&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 9, 2016&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'tertiary'&#125;&gt;21:44&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/xrDnt12.png'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;&nbsp;&nbsp;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Uncle Bear&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 10, 2016&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'tertiary'&#125;&gt;08:21&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&nbsp;&lt;ListItem&gt;
									<br />
									&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Image src=&#123;'http://i.imgur.com/DhsdGIs.jpg'&#125; alt=&#123;'Star Wars'&#125; classes=&#123;'e-avatar e-left'&#125;/&gt;&nbsp;&nbsp;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Block classes=&#123;'content e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'primary'&#125;&gt;Mutant Ninja&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'secondary'&#125;&gt;Jan 11, 2016&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text classes=&#123;'tertiary'&#125;&gt;20:14&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Block&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Icon name=&#123;'action-info'&#125; classes=&#123;'e-right e-text-grey-500'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/ListItem&gt;
									<br />
									&lt;/List&gt;														
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
	        						e-list
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String from the list navigation or big-icon
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

exports.AppList = AppList;