import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import Input from 'essence-input';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppInput extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>TEXT FIELDS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    Text fields allow the user to input text. They can be single line, with or without scrolling or multi-line; they can have an icon, too. Touching a text field places the cursor and automatically displays the keyboard.
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
									<Block className={'brick brick-12'} style={{padding:'0'}}>
										<Input
											classes={'has-success'}
											type={'text'}
											name={'label'}
											placeholder={'Input + Placeholder and has-success'}/>
									</Block>
		        					<Block className={'brick brick-12'} style={{padding:'0'}}>
										<Input
											classes={'has-success'}
											type={'text'}
											name={'label'}
											placeholder={'Input + Placeholder, has-success, Counter = 50'}
											counter={50}/>
									</Block>
		        					<Block className={'brick brick-12'} style={{padding:'0'}}>
										<Input
											classes={'has-error'}
											type={'text'}
											name={'label'}
											placeholder={'Input + Placeholder, has-error, Counter = 20'}
											counter={20}/>
									</Block>
									<Block className={'brick brick-12'}>
										<Input
											type={'text'}
											name={'label'}
											placeholder={'Disabled input'}
											disabled={true}/>
										<Input
											type={'text'}
											name={'label'}
											label={'Input with label'}/>
									</Block>
									<Block className={'brick brick-12'}>
										<Input
											type={'email'}
											name={'label'}
											label={'Email input'}/>
										<Input
											type={'number'}
											name={'label'}
											placeholder={'Number input'}
											hint={'Number input'}/>
									</Block>
									<Block className={'brick brick-12'}>
										<Input
											type={'textarea'}
											name={'label'}
											rows={5}
											label={'Textarea + Label with 5 rows'}/>
									</Block>
									<Block className={'brick brick-12'}>
										<Input
											type={'textarea'}
											name={'label'}
											rows={3}
											placeholder={'Textarea + Placeholder with 3 rows'}/>
									</Block>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-input</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Input from 'essence-input';
									<br />
									<br />
									&lt;Input classes=&#123;'has-success'&#125; type=&#123;'text'&#125; name=&#123;'label'&#125; placeholder=&#123;'Input + Placeholder and has-success'&#125;/&gt;
									<br />
									&lt;Input classes=&#123;'has-success'&#125; type=&#123;'text'&#125; name=&#123;'label'&#125; placeholder=&#123;'Input + Placeholder, has-success, Counter = 50'&#125; counter=&#123;50&#125;/&gt;
									<br />
									&lt;Input classes=&#123;'has-error'&#125; type=&#123;'text'&#125; name=&#123;'label'&#125; placeholder=&#123;'Input + Placeholder, has-error, Counter = 20'&#125; counter=&#123;20&#125;/&gt;
									<br />
									&lt;Input type=&#123;'text'&#125; name=&#123;'label'&#125; placeholder=&#123;'Disabled input'&#125; disabled=&#123;true&#125;/&gt;
									<br />
									&lt;Input type=&#123;'text'&#125; name=&#123;'label'&#125; label=&#123;'Input with label'&#125;/&gt;
									<br />
									&lt;Input type=&#123;'email'&#125; name=&#123;'label'&#125; label=&#123;'Email input'&#125;/&gt;
									<br />
									&lt;Input type=&#123;'number'&#125; name=&#123;'label'&#125; placeholder=&#123;'Number input'&#125; hint=&#123;'Number input'&#125;/&gt;
									<br />
									&lt;Input type=&#123;'textarea'&#125; name=&#123;'label'&#125; rows=&#123;5&#125; label=&#123;'Textarea + Label with 5 rows'&#125;/&gt;
									<br />
									&lt;Input type=&#123;'textarea'&#125; name=&#123;'label'&#125; rows=&#123;3&#125; placeholder=&#123;'Textarea + Placeholder with 3 rows'&#125;/&gt;
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
	        						placeholder
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String for a placeholder text
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						label
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String for a label text which will float above the input when text is typed
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						hint
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String for a hint text which will show below the input as an informative text
	        					</Block>
	        				</Block> 
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						counter
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Integer for limit the input value length, also it will show the current / maximum value length
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						disabled
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Prop for disabling the input 
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

exports.AppInput = AppInput;