import React from 'react';
import Tab from 'essence-tab';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

var tabs = {
    'header': [
        { 'context': (<Text>Tab 1</Text>) },
        { 'context': (<Text>Tab 2</Text>) }
    ],
    'rows': [ 
        (<Text>This is the context for Tab 1</Text>),
        (<Text>This is the context for Tab 2</Text>)
    ]
};

class AppTab extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>TABS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.
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
									<Tab 
										data={tabs}
										classes={'e-background-indigo-500 e-text-grey-50'} 
										indicator={'e-background-grey-50'}/>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-tab</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Tab from 'essence-tab';
									<br />
									<br />
									<br />
									var tabs = &#123;
									<br />
									&nbsp;'header': [
									<br />
									&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab 1&lt;/Text&gt;) &#125;,
									<br />
									&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab 2&lt;/Text&gt;) &#125;
									<br />									
									&nbsp;&nbsp;],
									<br />
									&nbsp;&nbsp;'rows': [ 
									<br />
									&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab 1&lt;/Text&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab 2&lt;/Text&gt;)									
									<br />
									&nbsp;]
									<br />
									&#125;;
									<br />
									<br />
									&lt;Tab 
									<br />
									&nbsp;&nbsp;data=&#123;tabs&#125;
									<br />
									&nbsp;&nbsp;classes=&#123;'e-background-indigo-500 e-text-grey-50'&#125; 
									<br />
									&nbsp;&nbsp;indicator=&#123;'e-background-grey-500'&#125;/&gt;						
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
	        						data
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									An object list with keys: header, rows, footer
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						header
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 An object list with keys: context & callback callback function
	        					</Block>
	        				</Block> 
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						rows
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 An object list with the same number of columns as from header
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						indicator
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						e-background-amber-200
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 The class color for tab header indicator
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

exports.AppTab = AppTab;