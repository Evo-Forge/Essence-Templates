import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import NavigationMenu from '../partials/navigation-menu';
import Image from 'essence-image';
import Input from 'essence-input';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

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
		                    They cannot be eaten. But can be used to show complex information, such as calendar events or contacts. Use them wisely by adding the e-chip-image/text/address class, as well as desired button class to your nifty code.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block>


				<Block classes={'e-row'}>
					<Block classes={'brick brick-12'}>
						
			        	<Card>
			        		<CardContent>
			        			<Block className={'e-row'}>
									<Block className={'brick brick-5'} style={{paddingLeft:'0', paddingTop:'0'}}>
										<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
										<Divider classes={'thin short e-background-indigo-400'} />
										<Block className={'e-text-center e-padding-top-15 e-text-center'}>
											<Block className={'brick brick-12'}>
												<Input 
													name={'image-src'}
													classes={'has-success'}
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
				        			
				        			<Block className={'brick brick-7'} style={{paddingRight:'0', paddingTop:'0'}}>
				        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
				        				<Divider classes={'thin short e-background-indigo-400'} />

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												npm install <strong>essence-image</strong>
					        				</code>
				        				</pre>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											Create a new ReactJS file with the code bellow.
										</Text>

				        				<pre className={'e-background-grey-100 e-text-black'}>
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
												<br />
					        				</code>
				        				</pre>
				        			</Block>
				        		</Block>
			        		</CardContent>
						</Card>
					</Block>
				</Block>
			</Block>
		);
    }
}

exports.AppImage = AppImage;