import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Image from 'essence-image';
import Tab from 'essence-tab';
import Btn from 'essence-button';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';


class AppCoreGridSystem extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>ESSENCE CORE COMPONENTS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block> 

		        <Block className={'e-container'}> 
					<Block className={'e-row e-margin-top-25'}>
						<Block classes={'brick brick-12'} style={{marginBottom:'0'}}>						    
	        				<Text type={'h4'} classes={'e-text-indigo-500'}>GRID SYSTEM</Text>
	        				<Divider classes={'thick short e-background-indigo-500'} />
							<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								When it comes to organizing content, grids come in handy. Take a look at the examples below to pick the best system for your content.
							</Text>
						</Block> 
						<Block classes={'brick brick-12'}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block classes={'brick brick-12 e-background-grey-300 e-h-center e-v-center'} style={{height:'60px'}}>
									brick-12
								</Block>
							</Block>

							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block classes={'brick brick-6 e-background-grey-300 e-h-end e-v-end'}  style={{height:'60px'}}>
									brick-6
								</Block>
								<Block classes={'brick brick-6 e-background-grey-300 e-h-start e-v-end'}  style={{height:'60px'}}>
									brick-6
								</Block>
							</Block>

							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block classes={'brick brick-4 e-background-grey-300 e-h-start e-v-end'}  style={{height:'60px'}}>
									brick-4
								</Block>
								<Block classes={'brick brick-4 e-background-grey-300 e-h-center e-v-center'}  style={{height:'60px'}}>
									brick-4
								</Block>
								<Block classes={'brick brick-4 e-background-grey-300 e-h-end e-v-start'}  style={{height:'60px'}}>
									brick-4
								</Block>
							</Block>
							
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15 e-padding-bottom-15'}>
								<Block classes={'brick brick-3 e-background-grey-300'}  style={{height:'60px'}}>
									brick-3
								</Block>
								<Block classes={'brick brick-3 e-background-grey-300'}  style={{height:'60px'}}>
									brick-3
								</Block>
								<Block classes={'brick brick-3 e-background-grey-300'}  style={{height:'60px'}}>
									brick-3
								</Block>
								<Block classes={'brick brick-3 e-background-grey-300'}  style={{height:'60px'}}>
									brick-3
								</Block>									
							</Block>

							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15 e-padding-bottom-15'}>
								<Block classes={'brick brick-1 e-background-grey-300'}  style={{height:'60px'}}>
									brick-1
								</Block>
								<Block classes={'brick brick-1 e-background-grey-300'}  style={{height:'60px'}}>
									brick-1
								</Block>
								<Block classes={'brick brick-1 e-background-grey-300'}  style={{height:'60px'}}>
									brick-1
								</Block>
								<Block classes={'brick brick-1 e-background-grey-300'}  style={{height:'60px'}}>
									brick-1
								</Block>	
								<Block classes={'brick brick-1 e-background-grey-300'}  style={{height:'60px'}}>
									brick-1
								</Block>	
								<Block classes={'brick brick-1 e-background-grey-300'}  style={{height:'60px'}}>
									brick-1
								</Block>	
								<Block classes={'brick brick-6 e-background-grey-300'}  style={{height:'60px'}}>
									brick-6
								</Block>									
							</Block>
						</Block>

						<Block classes={'brick brick-12'}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	
	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-core</strong>
		        				</code>
	        				</pre>			        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import &#123;Block&#125; from 'essence-core';
									<br />
									<br />
									&lt;Block classes=&#123;'e-row'&#125;&gt;
									<br />
										&lt;Block classes=&#123;'brick brick-12 e-h-center e-v-center'&#125;&gt;brick-12&lt;/Block&gt;
									<br />
									&lt;/Block&gt;
									<br />
									<br />
									&lt;Block classes=&#123;'e-row'&#125;&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-6 e-h-end e-v-end'&#125;&gt;brick-6&lt;/Block&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-6 e-h-start e-v-end'&#125;&gt;brick-6&lt;/Block&gt;
									<br />
									&lt;/Block&gt;
									<br />
									<br />
									&lt;Block classes=&#123;'e-row'&#125;&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-4 e-h-start e-v-center'&#125;&gt;brick-4&lt;/Block&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-4 e-h-center e-v-center'&#125;&gt;brick-4&lt;/Block&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-4 e-h-end e-v-center'&#125;&gt;brick-4&lt;/Block&gt;
									<br />
									&lt;/Block&gt;
									<br />
									<br />
									&lt;Block classes=&#123;'e-row'&#125;&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
									<br />
									&lt;Block classes=&#123;'brick brick-3'&#125;&gt;brick-3&lt;/Block&gt;
									<br />
									&lt;/Block&gt;
									<br />
									<br />
									... more bricks on the wall ...
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
	        						div
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									or from the list: span, header, footer, section, ul, li, hr, br
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						e-h-start
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'e-h-start'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									horizontal position: at the bigining of the row
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						e-h-center
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'e-h-center'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									horizontal position: at the middle of the row
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						e-h-end
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'e-h-end'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									horizontal position: at the end of the row
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						e-v-start
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'e-v-start'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									vertical position: at the top of the row
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						e-v-center
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'e-v-center'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									vertical position: at the middle of the row
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						e-v-end
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'e-v-end'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									vertical position: at the bottom of the row
	        					</Block>
	        				</Block>
						</Block>
					</Block>
				</Block>
			</Block>
		);
    }
}

class AppCoreDivider extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>ESSENCE CORE COMPONENTS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'14px'}}>
		                    There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block> 

			    <Block className={'e-container'}>
	        		<Block className={'e-row e-margin-top-25'}>
	        			<Block classes={'brick brick-12'} style={{marginBottom:'0'}}>						    
	        				<Text type={'h4'} classes={'e-text-indigo-500'}>DIVIDER</Text>
	        				<Divider classes={'thick short e-background-indigo-500'} />
							<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								According to our needs we created some dividers and stored them in a .less file called, you've guest it, dividers.										
								We've created three values for width and five values for height. You can combine them as you please.
							</Text>
						</Block>

						<Block classes={'brick brick-12'}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									Thin & short
									<Divider classes={'thin short e-background-indigo-500'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									Thin & medium
									<Divider classes={'thin medium e-background-indigo-500'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									Thin & long
									<Divider classes={'thin long e-background-indigo-500'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									Thin
									<Divider classes={'thin e-background-indigo-500'} />
								</Block>
								
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									Thick & short
									<Divider classes={'thick short e-background-indigo-500'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									Thick & medium
									<Divider classes={'thick medium e-background-indigo-500'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									Thick & long
									<Divider classes={'thick long e-background-indigo-500'} />
								</Block>
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									Thick
									<Divider classes={'thick e-background-indigo-500'} />
								</Block>
							</Block>								
						</Block>

						<Block classes={'brick brick-12'}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	
	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-core</strong>
		        				</code>
	        				</pre>			        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import &#123;Divider&#125; from 'essence-core';
									<br />
									<br />
									&lt;Divider classes=&#123;'thin short e-background-indigo-500'&#125; /&gt;
									<br />
									&lt;Divider classes=&#123;'thin medium e-background-indigo-500'&#125; /&gt;
									<br />
									&lt;Divider classes=&#123;'thin long e-background-indigo-500'&#125; /&gt;
									<br />
									&lt;Divider classes=&#123;'thin e-background-indigo-500'&#125; /&gt;
									<br />
									&lt;Divider classes=&#123;'thick short e-background-indigo-500'&#125; /&gt;
									<br />
									&lt;Divider classes=&#123;'thick medium e-background-indigo-500'&#125; /&gt;
									<br />
									&lt;Divider classes=&#123;'thick long e-background-indigo-500'&#125; /&gt;
									<br />
									&lt;Divider classes=&#123;'thick e-background-indigo-500'&#125; /&gt;
									<br />
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
	        						thinnest
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'thinnest'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Divider thickness:1px
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						thin
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'thin'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Divider thickness:2px
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						regular
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'regular'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Divider thickness:3px
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						thick
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'thick'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Divider thickness:5px
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						thickest
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'thickest'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Divider thickness:7px
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						short
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						lasses=&#123;'short'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Divider widht:5%
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						medium
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'medium'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Divider widht:25%
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						long
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'long'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Divider widht:50%
	        					</Block>
	        				</Block>
						</Block>
	        		</Block>							
				</Block>
			</Block>
		);
    }
}

class AppCoreRippleInk extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>ESSENCE CORE COMPONENTS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'14px'}}>
		                    There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block> 

		        <Block className={'e-container'}>
		        	<Block className={'e-row e-margin-top-25'}>
		        		<Block classes={'brick brick-12'} style={{marginBottom:'0'}}>						    
	        				<Text type={'h4'} classes={'e-text-indigo-500'}>RIPPLE INK</Text>
	        				<Divider classes={'thick short e-background-indigo-500'} />
							<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								This component is design for Btn component to simulate a color ripple effect on the background element.
							</Text>
						</Block>
					

						<Block classes={'brick brick-4'}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block className={'e-padding-top-100 e-text-grey-900 brick brick-12 e-no-margin e-h-center'}>
									<Btn 
										label={'Ripple Effect'}
										ripple={true}
										type={'succes'}
										className={'raised e-background-indigo-600'} />
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	
	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-core</strong>
		        				</code>
	        				</pre>			        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Include the RippleInk component inside an element container where style position must be 'relative'.
								<br />
								<br />
								- The RippleInk will generate a div with style position absolute and the Ripple Effect with the background color calculated from the element.
								<br />
								- The Ripple Effect position is calculated based on the click event position inside the parent. 
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import &#123;Utils, RippleInk&#125; from 'essence-core';
									<br />
									<br />
									let boundingClient = this.currentButton.getBoundingClientRect();
									<br />
									let color = Utils.BackgroundColor(event);
									<br />
									let position = Utils.ClickPosition(event, boundingClient);
									<br />
									<br />
									&lt;RippleInk color=&#123;color&#125; position=&#123;position&#125;/&gt;
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
	        						position
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						&#123;x:0, y:0&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Object with x for left position in px & y for top position in px
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						color
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						#FFFFFF
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									For backgroundColor 
	        					</Block>
	        				</Block>	        				
						</Block>
					</Block>
				</Block>
			</Block>
		);
    }
}

class AppCoreTextTypography extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	textType: 'span',
			textPosition: 'e-text-center',
			textTypography: 'e-body1',
			active: {
				'type': null,
				'position': null,
				'typo': null
			},
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

	changeType(type) {
		let active = this.state.active;
		active.type = type;

		this.setState({
			textType: type || 'span',
			active: active
		});
	}

	changePosition(position) {
		let active = this.state.active;
		active.position = position;

		this.setState({
			textPosition: position || 'e-text-center',
			active: active
		});
	}

	changeTypography(typography) {
		let active = this.state.active;
		active.typo = typography;

		this.setState({
			textTypography: typography || 'e-body1',
			active: active
		});
	}

	renderType() {
		let self = this;
		let typeList = [];
		let types = [
			'a', 'p', 'label', 'strong', 'small', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'sup', 'sub', 'em'
		];


		[].forEach.call(types, function(type) {
			typeList.push(
				<Btn 
					label={type}
					type={ (type === self.state.active.type) ? 'info' : 'succes' }
					ripple={false}
					className={ClassNames('flat', (type === self.state.active.type) ? 'e-background-indigo-600' : 'e-background-indigo-500')}
					key={'text-type-' + type}
					onClick={self.changeType.bind(self, type.toLowerCase())}/>
			);
		});

		return typeList;
	}

	renderPosition() {
		let self = this;
		let positionList = [];
		let positions = [
			'e-text-left', 'e-text-right', 'e-text-center', 'e-text-justify', 'e-text-uppercase', 'e-text-capitalize', 'e-text-lowercase'
		];

		[].forEach.call(positions, function(position) {
			positionList.push(
				<Btn 
					label={position}
					type={ (position === self.state.active.position) ? 'info' : 'succes'}
					ripple={false}
					className={ClassNames('flat', (position === self.state.active.position) ? 'e-background-indigo-600' : 'e-background-indigo-500')}
					key={'text-position-' + position.toLowerCase()}
					onClick={self.changePosition.bind(self, position.toLowerCase())}/>
			);
		});

		return positionList;
	}

	renderTypography() {
		let self = this;
		let typographList = [];
		let typographs = [
			'e-display-4', 'e-display-3', 'e-display-2', 'e-display-1', 'e-headline', 'e-title', 'e-subhead', 'e-body2', 'e-body1', 'e-caption', 'e-button'
		];

		[].forEach.call(typographs, function(typograph) {
			typographList.push(
				<Btn 
					label={typograph}
					type={ (typograph === self.state.active.typo) ? 'info' : 'succes'}
					ripple={false}
					className={ClassNames('flat', (typograph === self.state.active.typo) ? 'e-background-indigo-600' : 'e-background-indigo-500')}
					key={'text-typograph-' + typograph.toLowerCase()}
					onClick={self.changeTypography.bind(self, typograph.toLowerCase())}/>
			);
		});

		return typographList;
	}

    render() {
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>ESSENCE CORE COMPONENTS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'14px'}}>
		                    There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block> 

		        <Block className={'e-container'}>
		        	<Block className={'e-row e-margin-top-25'}>
		        		<Block classes={'brick brick-12'} style={{marginBottom:'0'}}>						    
	        				<Text type={'h4'} classes={'e-text-indigo-500'}>TEXT TYPOGRAPHY</Text>
	        				<Divider classes={'thick short e-background-indigo-500'} />
							<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Typography is such an important part of a catchy website, so you must use it carefully. You are just a few classes away of doing it! To do that, we are here helping you with predefined classes.
							</Text>
						</Block>

						<Block classes={'brick brick-4'} style={{overflow:'hidden'}}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block className={'e-padding-top-50 e-text-grey-900 brick brick-12 e-no-margin e-h-center'}>
									<Block
										classes={''}>										
										<Text 
											target={'_blank'}
											type={this.state.textType}
											href={'http://getessence.io'}
											classes={ClassNames('e-text-grey-600', this.state.textPosition, this.state.textTypography)}>
											Typography
										</Text>
									</Block>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	
	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-core</strong>
		        				</code>
	        				</pre>			        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								There are a list of available types that can be used and a list of of available options.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import &#123;Text&#125; from 'essence-core';
									<br />
									<br />
									&lt;Text type=&#123;'{this.state.textType}'&#125; classes=&#123;'{ClassNames(this.state.textPosition, this.state.textTypography)}'&#125;&gt;
									Typography
									&lt;/Text&gt;
									<br />
			    				</code>
							</pre>
						</Block>

						<Block className={'brick brick-12'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>CHOOSE TEXT STYLING:</Text>
							<Divider classes={'thin short e-background-indigo-500'} />

							<Tab data={{
								'header': [{
										'context': (<Text>Type</Text>)
									},{
										'context': (<Text>Position</Text>)
									},{
										'context': (<Text>Typography</Text>)
									}
								],
								'rows': [ 
									(
										<Block>{this.renderType()}</Block>
									),
									(
										<Block>{this.renderPosition()}</Block>
									),
									(
										<Block>{this.renderTypography()}</Block>
									)
								]
							}}
							classes={'e-background-indigo-500 e-text-grey-50'}
							indicator={'e-background-grey-50'}/>
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
	        						div
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									a, p, label, strong, small, caption, h1, h2, h3, h4, h5, h6, sup, sub, em
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						position
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						classes=&#123;'e-text-left'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									e-text-left,   e-text-right,   e-text-center,   e-text-justify,   e-text-uppercase,   e-text-capitalize,   e-text-lowercase
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						typograpgy
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									e-display-4,   e-display-3,   e-display-2,   e-display-1,   e-headline,   e-title,   e-subhead,   e-body2,   e-body1,   e-caption,   e-button
	        					</Block>
	        				</Block>		        				 
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						color
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						e-text-black
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									From textColor
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						badge
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						-
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									For data-badge option with a maximum lenght of 3 chars
	        					</Block>
	        				</Block>		        				
						</Block>
		        	</Block> 
		        </Block> 
			</Block>
		);
    }
}

class AppCoreUtilities extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>ESSENCE CORE COMPONENTS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'14px'}}>
		                    There are several components that are included in the Essence Core package.
							Please review them bellow to understand how to use them.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block> 

        		<Block className={'e-container'}>
		        	<Block className={'e-row e-margin-top-25'}>
		        		<Block classes={'brick brick-12'} style={{marginBottom:'0'}}>						    
	        				<Text type={'h4'} classes={'e-text-indigo-500'}>UTILITIES</Text>
	        				<Divider classes={'thick short e-background-indigo-500'} />
							<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Utilities are named 'Utils' and represent helpers for other components to maintain the desired functionality.
							</Text>
						</Block>
						<Block classes={'brick brick-12'}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block className={'e-padding-top-15 e-text-grey-900 brick brick-12 e-no-margin'}>
									- <strong>BackgroundColor</strong>: extracts the color property from an element, it is used on the RippleEffect for a Btn component
									<br />
									<br />
									- <strong>ClickPosition</strong>: calculate the position of a click based on the clicked element and the parent coordinates.
									<br />
									<br />
									- <strong>Client</strong> has 3 functions:
										<br />
									&nbsp;&nbsp; <u>isMobile</u> return true or false if the client uses a mobile browser, 
										<br />
									&nbsp;&nbsp; <u>screenSize</u>: return the screen width (1 = small, 2 = medium, 3 = large), 
										<br />
									&nbsp;&nbsp; <u>documentSize</u>: return the document size (1 = small, 2 = medium, 3 = large)
									<br />
									<br />									
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-12'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	
	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-core</strong>
		        				</code>
	        				</pre>			        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								 Timer: starts a timer instance. It is used on the SnackBar & Toast component.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import &#123;Utils&#125; from 'essence-core';
									<br />
									<br />
									let boundingClient = this.refs.yourElement.getBoundingClientRect();
									<br />
									<br />
									let position = Utils.ClickPosition(event, boundingClient);
									<br />
									<br />
									let color = Utils.BackgroundColor(event);
									<br />
									<br />
									let isMobile = Utils.Client.isMobile();
									<br />
									<br />
									let screenSize = Utils.Client.screenSize();
									<br />
									<br />
									let documentSize = Utils.Client.documentSize();
									<br />
									<br />
									this.timer = new Utils.Timer(
									<br />
									&nbsp;&nbsp;function() &#123;
									<br />
									&nbsp;&nbsp;&nbsp;// your callback function
									<br />
									&nbsp;&nbsp;&#125;,
									<br />
									&nbsp;&nbsp;2000 // miliseconds
									<br />
									);
									<br />
									<br />
									pauseTimer() &#123;
									<br />
									&nbsp;if (this.timer) &#123;
									<br />
									&nbsp;&nbsp;this.timer.pause();
									<br />
									&nbsp;&#125;
									<br />
									&#125;
									<br />
									<br />
									resumeTimer() &#123;
									<br />
									&nbsp;if (this.timer) &#123;
									<br />
									&nbsp;&nbsp;this.timer.resume();
									<br />
									&nbsp;&#125;
									<br />
									&#125;
									<br />
			    				</code>
							</pre>
						</Block>
					</Block>
				</Block>
			</Block>
		);
    }
}

exports.AppCoreGridSystem = AppCoreGridSystem;
exports.AppCoreDivider = AppCoreDivider;
exports.AppCoreRippleInk = AppCoreRippleInk;
exports.AppCoreTextTypography = AppCoreTextTypography;
exports.AppCoreUtilities = AppCoreUtilities;
