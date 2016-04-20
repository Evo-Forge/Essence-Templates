import React from 'react';
import Chip from 'essence-chip';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

var ChipDeletable = {
  name: 'deletable',
  text: [<strong>Chip</strong>, <span> (deletable)</span>],
  icon: 'D',  
  deletable: true,
  onClose: ( function () { console.log('deletable chip'); } )
};

var ChipNonDeletable = {
  name: 'nondeletable',
  text: [<strong>Chip</strong>, <span> (non deletable)</span>],
  icon: 'N',
  deletable: false,
  onClose: ( function () { console.log('non deletable chip'); } )
};

var ChipNoIconDeletable = {
  name: 'noicondeletable',
  text: [<strong>Chip</strong>, <span> (no icon deletable)</span>],
  deletable: true,
  onClose: ( function () { console.log('no icon deletable chip'); } )
};

var ChipNoIconNonDeletable = {
  name: 'noiconnondeletable',
  text: [<strong>Chip</strong>, <span> (no icon non deletable)</span>],
  deletable: false,
  onClose: ( function () { console.log('no icon non deletable chip'); } )
};

class AppChip extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>CHIPS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    Chips represent complex entities in small blocks, such as a contact. A chip may contain a photo, short title, and brief information.
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
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-h-center'} style={{height:'50px'}}>
									<Chip data={ChipDeletable} iconColor='e-background-indigo-400' />									
								</Block>	
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-h-center'} style={{height:'50px'}}>									
									<Chip data={ChipNonDeletable} iconColor='e-background-grey-600'  />									
								</Block>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-h-center'} style={{height:'50px'}}>								 	
									<Chip data={ChipNoIconDeletable}  />
								</Block>						
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-h-center'} style={{height:'50px'}}>
									<Chip data={ChipNoIconNonDeletable}  />
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
									import Chip from 'essence-chip';
									<br />
									<br />
									var ChipDeletable = &#123;
									<br />
									&nbsp;&nbsp;name: 'ChipDeletable',
									<br />
									&nbsp;&nbsp;text: [&lt;strong&gt;Chip&lt;/strong&gt;, &lt;span&gt; (deletable)&lt;/span&gt;],
									<br />
									&nbsp;&nbsp;icon: 'D',
									<br />
									&nbsp;&nbsp;deletable: true,
									<br />
									&nbsp;&nbsp;onClose: ( function () &#123; console.log('deletable chip'); &#125; )
									<br />
									&#125;
									<br />
									<br />
									var ChipNonDeletable = &#123;
									<br />
									&nbsp;&nbsp;name: 'ChipNonDeletable',
									<br />
									&nbsp;&nbsp;text: [&lt;strong&gt;Chip&lt;/strong&gt;, &lt;span&gt; (non deletable)&lt;/span&gt;],
									<br />
									&nbsp;&nbsp;icon: 'N',
									<br />
									&nbsp;&nbsp;deletable: false,
									<br />
									&nbsp;&nbsp;onClose: ( function () &#123; console.log('non deletable chip'); &#125; )
									<br />
									&#125;
									<br />
									<br />var ChipNoIconDeletable = &#123;
									<br />
									&nbsp;&nbsp;name: 'ChipNoIconDeletable',
									<br />
									&nbsp;&nbsp;text: [&lt;strong&gt;Chip&lt;/strong&gt;, &lt;span&gt; (no icon deletable)&lt;/span&gt;],
									<br />
									&nbsp;&nbsp;deletable: true,
									<br />
									&nbsp;&nbsp;onClose: ( function () &#123; console.log('no icon deletable chip'); &#125; )
									<br />
									&#125;<br />
									<br />var ChipNoIconNonDeletable = &#123;
									<br />
									&nbsp;&nbsp;name: 'ChipNoIconNonDeletable',
									<br />
									&nbsp;&nbsp;text: [&lt;strong&gt;Chip&lt;/strong&gt;, &lt;span&gt; (no icon non deletable)&lt;/span&gt;],
									<br />
									&nbsp;&nbsp;deletable: false,
									<br />
									&nbsp;&nbsp;onClose: ( function () &#123; console.log('no icon non deletable chip'); &#125; )
									<br />
									&#125;
									<br />
									<br />
									&lt;Chip data=&#123;ChipDeletable&#125;/&gt;
									<br />
									&lt;Chip data=&#123;ChipNonDeletable&#125;/&gt;
									<br />
									&lt;Chip data=&#123;ChipNoIconDeletable&#125;/&gt;
									<br />
									&lt;Chip data=&#123;ChipNoIconNonDeletable&#125;/&gt;						
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
	        						name
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						chip
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String for input name
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						text
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String or html or component
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						icon
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									String or image url
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						deletable
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Boolean ( true or false )
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onClose
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 Callback for on closing chip component
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						iconColor
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									 String from the Colors list
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

exports.AppChip = AppChip;