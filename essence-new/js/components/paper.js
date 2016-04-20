import React from 'react';
import Tab from 'essence-tab';
import ReactDOM from 'react-dom';
import Paper from 'essence-paper';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppPaper extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>PAPERS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    In material design, every pixel drawn by an application resides on a sheet of paper. Paper has a flat background color and can be sized to serve a variety of purposes. A typical layout is composed of multiple sheets of paper.
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
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-h-center'}>
									<Paper className={'e-text-indigo-400 e-background-white'}>
										<Text type={'small'}>Paper</Text>
									</Paper>
								</Block>
								<Block className={'e-text-grey-900 brick brick-12 e-h-center'} style={{margin:'20px 0 0 0'}}>
									<Paper type={'sharp'} className={'e-text-indigo-400 e-background-white'}>
										<Text type={'small'}>Sharp</Text>
									</Paper>
								</Block>
								<Block className={'e-text-grey-900 brick brick-12 e-h-center'} style={{margin:'20px 0 0 0'}}>
									<Paper type={'circle'} className={'e-text-indigo-400 e-background-white'}>
										<Text type={'small'}>Circle</Text>
									</Paper>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-paper</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Paper from 'essence-paper';
									<br />
									<br />
									&lt;Paper className=&#123;'e-text-indigo-400 e-background-white'&#125;&gt;
									<br />
									&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Paper&lt;/Text&gt;
									<br />
									&lt;/Paper&gt;						
									<br />
									<br />
									<br />
									&lt;Paper type=&#123;'sharp'&#125; className=&#123;'e-text-yellow-600 e-background-white'&#125;&gt;
									<br />
									&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Sharp&lt;/Text&gt;
									<br />
									&lt;/Paper&gt;
									<br />
									<br />
									<br />
									&lt;Paper type=&#123;'circle'&#125; className=&#123;'e-text-red-400 e-background-white'&#125;&gt;
									<br />
									&nbsp;&lt;Text type=&#123;'small'&#125;&gt;Circle&lt;/Text&gt;
									<br />
									&lt;/Paper&gt;
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
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									type: paper type from Paper list (sharp or circle), as default there is no type
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

exports.AppPaper = AppPaper;