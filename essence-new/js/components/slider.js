import React from 'react';
import ReactDOM from 'react-dom';
import Btn from 'essence-button';
import Image from 'essence-image';
import Slider from 'essence-slider';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';
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
		                   Sliders let users select a value from a continuous or discrete range of values by moving the slider thumb. The smallest value is to the left, the largest to the right. Sliders can have icons that reflect the value intensity. The interactive nature of the slider makes it a great choice for settings that reflect intensity levels, such as volume, brightness, or color saturation.
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
		        		<Block classes={'brick brick-6'} style={{overflow:'hidden'}}>
		        			<Block classes={'brick brick-12'} style={{overflow:'hidden'}}>	
								<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE 1</Text>
			    				<Divider classes={'thick short e-background-indigo-500'} />							
												    	
								<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
									<Block className={'e-text-grey-900 brick brick-12 e-no-margin'}>
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
								</Block>								
							</Block>
							<Block classes={'brick brick-12'} style={{marginTop:'76px'}}>
								<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
		        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

		        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			        				<code>
										npm install <strong>essence-slider</strong>
			        				</code>
		        				</pre>	       						        				

		        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
									Create a new ReactJS file with the code bellow.
								</Text>

								<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
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
		        		<Block classes={'brick brick-6'} style={{overflow:'hidden'}}>
		        			<Block classes={'brick brick-12'} style={{overflow:'hidden'}}>	
								<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE 2</Text>
			    				<Divider classes={'thick short e-background-indigo-500'} />							
												    	
								<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
									<Block className={'e-text-grey-900 brick brick-12'}>														    					
										{this.renderRGB()}
									</Block>						
								</Block>								
							</Block>
							<Block classes={'brick brick-12'}>
								<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
		        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

		        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			        				<code>
										npm install <strong>essence-slider</strong>
			        				</code>
		        				</pre>	       						        				

		        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
									Create a new ReactJS file with the code bellow.
								</Text>

								<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
				    				<code>
										import React from 'react';
									    <br />
									    import ReactDOM from 'react-dom';
									    <br />
									    import ClassNames from 'classnames';
									    <br />
									    <br />
									    import Slider from 'essence-slider';
									    <br />
									    import &#123;Block, Text&#125; from 'essence-core';
									    <br />
									    <br />
									    class AppSlider extends React.Component &#123;<br />
									    &nbsp;constructor(props) &#123;<br />
									    &nbsp;&nbsp;super(props);<br />
									    &nbsp;&nbsp;this.state = &#123;<br />
									    &nbsp;&nbsp;&nbsp;red: '92',<br />
									    &nbsp;&nbsp;&nbsp;green: '107',<br />
									    &nbsp;&nbsp;&nbsp;blue: '192',<br />
									    &nbsp;&nbsp;&nbsp;classes: ClassNames(<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;this.props.classes,<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;this.props.className<br />
									    &nbsp;&nbsp;&nbsp;)<br />
									    &nbsp;&nbsp;&#125;;<br />
									    &nbsp;&#125;<br />
									    <br />
									    &nbsp;changeRed(event) &#123;<br />
									    &nbsp;&nbsp;this.setState(&#123;<br />
									    &nbsp;&nbsp;&nbsp;red: event.currentTarget.value.toString()<br />
									    &nbsp;&nbsp;&#125;)<br />
									    &nbsp;&#125;<br />
									    &nbsp;changeGreen(event) &#123;<br />
									    &nbsp;&nbsp;this.setState(&#123;<br />
									    &nbsp;&nbsp;&nbsp;green: event.currentTarget.value.toString()<br />
									    &nbsp;&nbsp;&#125;)<br />
									    &nbsp;&#125;<br />
									    &nbsp;changeBlue(event) &#123;<br />
									    &nbsp;&nbsp;this.setState(&#123;<br />
									    &nbsp;&nbsp;&nbsp;blue: event.currentTarget.value.toString()<br />
									    &nbsp;&nbsp;&#125;)<br />
									    &nbsp;&#125;<br />
									    <br />
									    &nbsp;renderRGBColor() &#123;<br />
									    &nbsp;&nbsp;return (`rgb($&#123;this.state.red&#125;, $&#123;this.state.green&#125;, $&#123;this.state.blue&#125;)`);<br />
									    &nbsp;&#125;<br />
									    <br />
									    &nbsp;renderRGBHex() &#123;<br />
									    &nbsp;&nbsp;return ('#'+('0'+parseInt(this.state.red,10).toString(16)).slice(-2)+('0'+parseInt(this.state.green,10).toString(16)).slice(-2)+('0'+parseInt(this.state.blue,10).toString(16)).slice(-2)+'');<br />
									    &nbsp;&#125;<br />
									    <br />
									    &nbsp;renderRGB() &#123;<br />
									    &nbsp;&nbsp;return (<br />
									    &nbsp;&nbsp;&nbsp;&lt;Block&gt;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Block className=&#123;'preview e-text-center'&#125; style=&#123;&#123;backgroundColor: this.renderRGBColor()&#125;&#125;&gt;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: &#123;this.renderRGBColor()&#125;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: &#123;this.renderRGBHex()&#125;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Text&gt;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Block&gt;<br />
									    <br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Slider start=&#123;this.state.red&#125; max=&#123;255&#125; onChange=&#123;this.changeRed.bind(this)&#125; /&gt;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Slider start=&#123;this.state.green&#125; max=&#123;255&#125; onChange=&#123;this.changeGreen.bind(this)&#125; /&gt;<br />
									    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Slider start=&#123;this.state.blue&#125; max=&#123;255&#125; onChange=&#123;this.changeBlue.bind(this)&#125; /&gt;<br />
									    &nbsp;&#125;<br />
									    <br />
									    &nbsp;render() &#123;<br />
									    &nbsp;&nbsp;return this.renderRGB();<br />
									    &nbsp;&#125;<br />
									    &#125;

				    				</code>
								</pre>
							</Block>
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
	        						lowerColor
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						lowerColor=&#123;'e-background-indigo-400'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Or a background color for left side of slider
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						upperColor
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						upperColor=&#123;'e-background-grey-100'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Or a background color for right side of slider
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						start
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						0
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Integer value to set the initial value - values: 0 to 100
	        					</Block>
	        				</Block> 
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						step
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						step=&#123;'1'&#125;
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Integer value to set the steps
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						fill
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Return a colored track to indicate the current value position
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						discrete
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 true it uses the discrete class name to render a indicator for the current value
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
									 true it uses the disabled class name to render a non-editable component
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

exports.AppSlider = AppSlider;