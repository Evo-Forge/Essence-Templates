import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import Image from 'essence-image';
import NavigationMenu from '../partials/navigation-menu';
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
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>CARDS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                   There are several types of cards which can be used in different situations.
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

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
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