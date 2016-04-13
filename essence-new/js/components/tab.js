import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Image from 'essence-image';
import NavigationMenu from '../partials/navigation-menu';
import Tab from 'essence-tab';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

var tabs = {
    'header': [
        { 'context': (<Text>Tab 1</Text>) },
        { 'context': (<Text>Tab 2</Text>) },
        { 'context': (<Text>Tab with callback alert</Text>), 'callback': ( function() { alert('Hey you'); } ) },
        { 'context': (<Text>Tab with callback link</Text>), 'callback': ( function() { window.open('http://getessence.io/', '_blank'); }) }
    ],
    'rows': [ 
        (<Text>This is the context for Tab 1</Text>),
        (<Text>This is the context for Tab 2</Text>),
        (<Text>This is the context for Tab with callback alert</Text>),
        (<Text>This is the context for Tab with callback link</Text>)
    ]
};

class AppTab extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>TABS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.
		                </Text>
		              </Block>
		              <Block classes={'brick brick-6 e-no-padding'}>
		                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
		              </Block>
		            </Block>
		          </Block>
		        </Block>


				<Block className={'e-row'}>
					<Block classes={'brick brick-12'}>
						

			        	<Card>
			        		<CardContent>
				        		<Block>
				        			<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />
			        				<Tab 
										data={tabs}
										classes={'e-background-indigo-400 e-text-grey-50'} 
										indicator={'e-background-grey-50'}/>
			        			</Block>

			        			<Block className={'e-padding-top-50'}>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-tab</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Tab component has the following options:
										<br />
										<br />
										1. <strong>data</strong>: an object list with keys: <u>header</u>, <u>rows</u>, <u>footer</u>
										<br />
										2. <strong>header</strong>: an object list with keys: <u>context</u> & <u>callback</u> callback function
										<br />
										3. <strong>rows</strong>: an array list with the same number of columns as from header
										<br />
										4. <strong>indicator</strong>: the class color for tab header indicator
									</Text>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										To customise the colour <strong>indicator</strong> try the example below. 
									</Text>

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import Tab from 'essence-tab';
											<br />
											<br />
											<br />
											var tabs = &#123;
											<br />
											&nbsp;'header': [
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab 1&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab 2&lt;/Text&gt;) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab with callback alert&lt;/Text&gt;), 'callback': ( function() &#123; alert('Hey you'); &#125; ) &#125;,
											<br />
											&nbsp;&nbsp;&nbsp;&#123; 'context': (&lt;Text&gt;Tab with callback link&lt;/Text&gt;), 'callback': ( function() &#123; window.open('http://getessence.io/', '_blank'); &#125;) &#125;
											<br />
											&nbsp;&nbsp;],
											<br />
											&nbsp;&nbsp;'rows': [ 
											<br />
											&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab 1&lt;/Text&gt;),
											<br />
											&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab 2&lt;/Text&gt;),
											<br />
											&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab with callback alert&lt;/Text&gt;),
											<br />
											&nbsp;&nbsp;&nbsp;(&lt;Text&gt;This is the context for Tab with callback link&lt;/Text&gt;)
											<br />
											&nbsp;]
											<br />
											&#125;;
											<br />
											<br />
											&lt;Tab 
											<br />
											&nbsp;&nbsp;data=&#123;tabs&#125;
											<br />
											&nbsp;&nbsp;classes=&#123;'e-background-cyan-500 e-text-grey-50'&#125; 
											<br />
											&nbsp;&nbsp;indicator=&#123;'e-background-red-500'&#125;/&gt;
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

exports.AppTab = AppTab;