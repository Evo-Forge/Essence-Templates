import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import Input from 'essence-input';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

class AppImage extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            ),
            imageSrc: 'http://getessence.io/assets/img/essence_icon.png'
        };
    }

    changeImage(event) {
    	let src = event.target.value;
    	this.setState({
    		imageSrc: src || 'http://getessence.io/assets/img/essence_icon.png'
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>IMAGES</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    Imagery is more than decoration. It’s a powerful tool to help you communicate and differentiate your product. Bold, graphic, and intentional imagery helps to engage the user.
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
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-text-center'}>
									<Block className={'brick brick-12'}>
										<Input 
											name={'image-src'}
											classes={'e-text-indigo-500'}
											onBlur={this.changeImage.bind(this)}
											placeholder={'Paste an Image URL'}/>
									</Block>
									<Image src={this.state.imageSrc} height={'150px'} />
									<br />
									<Image src={this.state.imageSrc} height={'75px'} />
									<br />
									<Image src={this.state.imageSrc} width={'50px'} />
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-image</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Image from 'essence-image';
									<br />
									<br />
									<br />
									&lt;Image src=&#123;'{this.state.imageSrc}'&#125; /&gt;
									<br />
									<br />
									&lt;Image src=&#123;'{this.state.imageSrc}'&#125; height=&#123;'150px'&#125; /&gt;
									<br />
									<br />
									&lt;Image src=&#123;'{this.state.imageSrc}'&#125; width=&#123;'50px'&#125; height=&#123;'100px'&#125; /&gt;
									<br />
									<br />
									&lt;Image src=&#123;'{this.state.imageSrc}'&#125; height=&#123;'75px'&#125; /&gt;
									<br />
									<br />
									&lt;Image src=&#123;'{this.state.imageSrc}'&#125; width=&#123;'50px'&#125; height=&#123;'50px'&#125; alt=&#123;'Essence Image'&#125; /&gt;
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
	        						width
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Adjust image with
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						height
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Adjust image height
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

exports.AppImage = AppImage;