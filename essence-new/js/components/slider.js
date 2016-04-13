import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Image from 'essence-image';
import NavigationMenu from '../partials/navigation-menu';
import Btn from 'essence-button';
import Slider from 'essence-slider';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';
import {Dialog, DialogHeader, DialogContent, DialogFooter} from 'essence-dialog';

class AppSlider extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	open: false,
			r: '92',
			g: '107',
			b: '192',
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    changeR(event) {
    	this.setState({
    		r: event.currentTarget.value.toString()
    	})
    }
    changeG(event) {
    	this.setState({
    		g: event.currentTarget.value.toString()
    	})
    }
    changeB(event) {
    	this.setState({
    		b: event.currentTarget.value.toString()
    	})
    }

    showDialog() {
        this.setState({
            open: true
        });
    }

    hideDialog() {
        this.setState({
            open: false
        });
    }

    renderRGB() {
    	return (
    		<Block>    
				<Block 
					className={'preview e-text-center'} 
					style={{backgroundColor: 'rgb('+(this.state.r)+', '+(this.state.g)+', '+(this.state.b)+')'}}>
					<Text type={'h2'} className={'rgb e-padding-top-25 e-text-white'}>
						backgroundColor: {'rgb('+this.state.r+', '+this.state.g+', '+this.state.b+')'}
					</Text>
					<Text type={'h4'} className={'hex e-padding-bottom-25 e-text-white'}>
						backgroundColor: {'#'+('0'+parseInt(this.state.r,10).toString(16)).slice(-2)+('0'+parseInt(this.state.g,10).toString(16)).slice(-2)+('0'+parseInt(this.state.b,10).toString(16)).slice(-2)+''}
					</Text>
				</Block>
				<Block classes={'e-row'} style={{display:'flex'}}>
					<Block classes={'brick brick-1 e-text-left'}>
						R
					</Block>
					<Block classes={'brick brick-10'}>
						<Slider start={this.state.r} max={255} onChange={this.changeR.bind(this)} />
					</Block>
					<Block classes={'brick brick-1 e-text-right'}>
						{this.state.r}
					</Block>
				</Block>

				<Block classes={'e-row'} style={{display:'flex'}}>
					<Block classes={'brick brick-1 e-text-left'}>
						G
					</Block>
					<Block classes={'brick brick-10'}>
						<Slider start={this.state.g} max={255} onChange={this.changeG.bind(this)} />
					</Block>
					<Block classes={'brick brick-1 e-text-right'}>
						{this.state.g}
					</Block>
				</Block>

				<Block classes={'e-row'} style={{display:'flex'}}> 
					<Block classes={'brick brick-1 e-text-left'}>
						B
					</Block>
					<Block classes={'brick brick-10'}>
						<Slider start={this.state.b} max={255} onChange={this.changeB.bind(this)} />
					</Block>
					<Block classes={'brick brick-1 e-text-right'}>
						{this.state.b}
					</Block>
				</Block>				
			</Block>
    	);
    }

    render() {
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>SLIDERS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Sliders let users select a value from a continuous or discrete range of values by moving the slider thumb. The smallest value is to the left, the largest to the right.
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
			        				<Block className={'brick brick-6'} style={{paddingTop:'0', paddingLeft:'0'}}>
			        					<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
			        					<Divider classes={'thin short e-background-indigo-400'} />

										<Block classes={'brick brick-12'}>
											<Slider step={1} fill={false}/>
										</Block>
										<Block classes={'brick brick-12'}>
											<Slider step={10} start={10}/>
										</Block>
										<Block classes={'brick brick-12'}>
											<Slider discrete={true} step={1} start={100} max={255} />
										</Block>
										<Block classes={'brick brick-12'}>
											<Slider discrete={true} step={10} start={150} max={255}/>
										</Block>
										<Block classes={'brick brick-12'}>
											<Slider discrete={true} step={10} start={60} disabled={true}/>
										</Block>										
									</Block>
				        			
				        			<Block className={'brick brick-6'} style={{paddingTop:'0'}}>
				        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
				        				<Divider classes={'thin short e-background-indigo-400'} />

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												npm install <strong>essence-slider</strong>
					        				</code>
				        				</pre>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											Create a new ReactJS file with the code bellow.
										</Text>

				        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
											Slider component has the following options:
											<br />
											<br />
											1. <strong>start</strong>: integer value to set the initial value - values: <strong>0</strong> to <strong>100</strong>
											<br />
											2. <strong>fill</strong>: return a colored track to indicate the current value position
											<br />
											3. <strong>discrete</strong>: <u>true</u> it uses the <u>discrete</u> class name to render a indicator for the current value
											<br />
											4. <strong>disabled</strong>: <u>true</u> it uses the <u>disabled</u> class name to render a non-editable component
											<br />
											5. <strong>onChange</strong>: <u>callback function</u> returns current value of slider
											<br />
											6. <strong>lowerColor</strong>: default <u>e-background-indigo-400</u> or a background color for left side of slider
											<br />
											7. <strong>upperColor</strong>: default <u>e-background-grey-100</u> or a background color for right side of slider
											<br />
											<br />
										</Text>

				        				<pre className={'e-background-grey-100 e-text-black'}>
					        				<code>
												import Slider from 'essence-slider';
												<br />
												<br />
												&lt;Slider step=&#123;1&#125; fill=&#123;false&#125; /&gt;
												<br />
												&lt;Slider step=&#123;10&#125; start=&#123;10&#125;/&gt;
												<br />
												&lt;Slider discrete=&#123;true&#125; step=&#123;1&#125; start=&#123;20&#125;/&gt;
												<br />
												&lt;Slider discrete=&#123;true&#125; step=&#123;10&#125; start=&#123;30&#125;/&gt;
												<br />
												&lt;Slider discrete=&#123;true&#125; step=&#123;10&#125; start=&#123;40&#125; disabled=&#123;true&#125;/&gt;
					        				</code>
				        				</pre>
				        			</Block>
			        			</Block>			        			
			        		</CardContent>
						</Card>

						<Card>
			        		<CardContent>
			        			<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
			        			<Divider classes={'thin short e-background-indigo-400'} />
			        			<Block classes={'e-row'}>
			        				<Block classes={'brick brick-2'}></Block>
			        				<Block classes={'brick brick-8'}>
			        					<Block classes={'e-row'}>
			        						<Block classes={'brick brick-12'}>
												{this.renderRGB()}
											</Block>	
			        					</Block>		        				
			        				</Block>
			        				<Block classes={'brick brick-2'}></Block>			        			
			        			</Block>			        			
			        		</CardContent>
						</Card>

					</Block>
				</Block>
			</Block>
		);
    }
}

exports.AppSlider = AppSlider;