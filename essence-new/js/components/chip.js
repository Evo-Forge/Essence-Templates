import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Image from 'essence-image';
import NavigationMenu from '../partials/navigation-menu';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';
import Chip from 'essence-chip';

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
				        		<Block classes={'e-text-center'}>
			        				<Block className={ClassNames('e-padding-top-15 e-padding-bottom-25')}>
										<Chip data={ChipDeletable} iconColor='e-background-indigo-400' />
										<Chip data={ChipNonDeletable} iconColor='e-background-grey-600' />
										<Chip data={ChipNoIconDeletable} />
										<Chip data={ChipNoIconNonDeletable} />
									</Block>
			        			</Block>
				        		<Divider />

			        			<Block>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-chip</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Create a new ReactJS file with the code bellow.
									</Text>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Chip component has the following options:
										<br />
										<br />
										1. <strong>data</strong>: object with properties:
										<br />
										2. <strong>name</strong>: string for input name, default: chip
										<br />
										3. <strong>text</strong>: string or html or component
										<br />
										4. <strong>icon</strong>: string or image url
										<br />
										5. <strong>deletable</strong>: boolean ( <strong>true</strong> or <strong>false</strong> ) - default: <strong>false</strong>
										<br />
										6. <strong>onClose</strong>: callback for on closing chip component
										<br />
										7. <strong>iconColor</strong>: string from the Colors list
										<br />
										<br />
									</Text>

			        				<pre className={'e-background-grey-100 e-text-black'}>
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
			        		</CardContent>
						</Card>
					</Block>
				</Block>
			</Block>
		);
    }
}

exports.AppChip = AppChip;