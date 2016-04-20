import React from 'react';
import ReactDOM from 'react-dom';
import Btn from 'essence-button';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppCard extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>CARDS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   A card is a sheet of material that serves as an entry point to more detailed information. A card could contain a photo, text, and a link about a single subject.
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
									<Card style={{width:'100%'}}>
										<CardHeader>
											<Text type={'h4'}>Header</Text>
										</CardHeader>
										<CardContent>
											<Text type={'p'}>
												Card content, can be used with images
											</Text>
										</CardContent>
										<CardFooter>
											<Btn label={'OK'} type={'success'} className={'flat e-left e-background-indigo-600'} />
											<Btn label={'SKIP'} type={'info'} className={'flat e-right e-background-grey-700'} />
										</CardFooter>
									</Card>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-card</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import &#123;Card, CardHeader, CardContent, CardFooter&#125; from 'essence-card';
									<br />
									<br />
									&lt;Card&gt;
									<br />
									&nbsp;&lt;CardHeader&gt;
									<br />
									&nbsp;&nbsp;&nbsp;Card header
									<br />
									&nbsp;&lt;/CardHeader&gt;
									<br />
									&nbsp;&lt;CardContent&gt;
									<br />
									&nbsp;&nbsp;&nbsp;Card content
									<br />
									&nbsp;&lt;/CardContent&gt;
									<br />
									&nbsp;&lt;CardFooter&gt;
									<br />
									&nbsp;&nbsp;&nbsp;Card footer with action buttons
									<br />
									&nbsp;&lt;/CardFooter&gt;
									<br />
									&lt;/Card&gt;							
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
	        						classes or className
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									css style class name
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						NOTE
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									CardHeader, CardContent or CardFooter can be use or ignored as a child in Card component
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

exports.AppCard = AppCard;