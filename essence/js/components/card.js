import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Btn from 'essence-button';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppCard extends React.Component {
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
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} classes={'e-text-indigo-400'}>CARDS</Text>
	        			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'} style={{fontSize:'14px'}}>
							There are several types of cards which can be used in different situations.
						</Text>		        		

			        	<Card>				        	
			        		<CardContent>
			        			<Block>
			        				<Block className={ClassNames('e-row')}>
										<Block classes={'brick brick-3'} />
										<Block classes={'brick brick-6'}>
			        						<Card>
												<CardHeader>
													<Text type={'h4'}>Header</Text>
												</CardHeader>
												<CardContent>
													<Text type={'p'}>
														Card content, can be used with images
													</Text>
												</CardContent>
												<CardFooter>
													<Btn label={'OK'} type={'succes'} className={'flat e-left e-background-indigo-600'} />
													<Btn label={'SKIP'} type={'info'} className={'flat e-right e-background-grey-700'} />
												</CardFooter>
											</Card>
										</Block>
									</Block>
			        			</Block>

			        			<Block>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-card</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-400'}>
										Create a new ReactJS file with the code bellow.
									</Text>

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											import &#123;Card, CardHeader, CardContent, CardFooter&#125; from 'essence-card';
											<br />
											<br />
											&lt;Card&gt;
											<br />
											&nbsp;&lt;CardHeader&gt;
											<br />
											&nbsp;&nbsp;&nbsp;Card header
											<br />
											&nbsp;&lt;/CardHeader&gt;
											<br />
											&nbsp;&lt;CardContent&gt;
											<br />
											&nbsp;&nbsp;&nbsp;Card content
											<br />
											&nbsp;&lt;/CardContent&gt;
											<br />
											&nbsp;&lt;CardFooter&gt;
											<br />
											&nbsp;&nbsp;&nbsp;Card footer with action buttons
											<br />
											&nbsp;&lt;/CardFooter&gt;
											<br />
											&lt;/Card&gt;
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

exports.AppCard = AppCard;