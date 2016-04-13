import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Image from 'essence-image';
import NavigationMenu from '../partials/navigation-menu';
import Progress from 'essence-progress';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppProgress extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>PROGRESS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   Make loading content in your app as delightful and painless as possible by minimizing the amount of visual change a user sees before they can view and interact with content. Each operation should only be represented by one activity indicator—for example, one refresh operation should not display both a refresh bar and an activity circle. Below you’ll find six variations of activity indicators. Use them wisely.
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
				        		<Block classes={'e-text-center e-padding-top-25'}>
			        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
										<Block classes={'brick brick-3'}>
											<Progress type={'circle'} />
										</Block>
										<Block classes={'brick brick-3'}>
											<Progress type={'circle'} small={true} />
										</Block>
										<Block classes={'brick brick-3'}>
											<Progress type={'dots'} />
										</Block>
										<Block classes={'brick brick-3'}>
											<Progress type={'slider'} />
										</Block>										
									</Block>
			        			</Block>

			        			<Block>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-progress</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Progress component has the following options:
										<br />
										<br />
										1. <strong>color</strong> - string from Colors list for the indicator color
										<br />
										2. <strong>small</strong> - <u>true</u> or <u>false</u> with type: circle will render a small circle visualization 
										<br />
										3. <strong>type</strong>:
										<br />
										- <u>slider</u>: appends <strong>slider</strong> to the class name <u>e-progress-slider</u>
										<br />
										- <u>circle</u>: appends <strong>circle</strong> to the class name <u>e-progress-circle</u>
										<br />
										- <u>dots</u>: appends <strong>dots</strong> to the class name <u>e-progress-dots</u>
										<br />
										- <u>fix</u>: appends <strong>fix</strong> to the class name <u>e-progress-fix</u>
										<br />
										- <u>dynamic</u>: appends <strong>dynamic</strong> to the class name <u>e-progress-dynamic</u>
										<br />
									</Text>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Create a new ReactJS file with the code bellow.
									</Text>

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import Progress from 'essence-progress';
											<br />
											<br />
											&lt;Progress type=&#123;'circle'&#125; />
											<br />
											&lt;Progress type=&#123;'circle'&#125; small=&#123;true&#125; />
											<br />
											&lt;Progress type=&#123;'dots'&#125; />
											<br />
											&lt;Progress type=&#123;'slider'&#125; />
											<br />											
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

exports.AppProgress = AppProgress;