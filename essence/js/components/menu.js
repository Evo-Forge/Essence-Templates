import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Menu from 'essence-menu';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppMenu extends React.Component {
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
						<Text type={'h3'} classes={'e-text-indigo-400'}>MENUS</Text>
		    			<Divider classes={'thick short e-background-indigo-400'} />
						<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
							Sliders let users select a value from a continuous or discrete range of values by moving the slider thumb. The smallest value is to the left, the largest to the right.
						</Text>

			        	<Card>
			        		<CardContent>
				        		<Block>
			        				<Block className={ClassNames('e-row e-padding-bottom-25')}>
										<Block classes={'brick brick-4'}>
			        						<Text type={'p'} classes={'e-text-center e-text-indigo-400'}>Menu left side</Text>
											<Block classes={'e-background-grey-100'} style={{padding:'15px'}}>
												<Menu type={'cover'} placeholder={'Left'}>
													<Text classes={'e-text-black'}>Profile</Text>
													<Text classes={'e-text-black'}>Settings</Text>
													<Text classes={'e-text-black'}>Logout</Text>
												</Menu>
											</Block>
										</Block>

										<Block classes={'brick brick-4'}>
			        						<Text type={'p'} classes={'e-text-center e-text-indigo-400'}>Menu right side</Text>
			        						<Block classes={'e-background-grey-100 clearfix'} style={{padding:'15px'}}>
												<Menu type={'cover'} placeholder={'Right'} classes={'e-right'}>
													<Text classes={'e-text-black'}>Profile</Text>
													<Text classes={'e-text-black'}>Settings</Text>
													<Text classes={'e-text-black'}>Logout</Text>
												</Menu>
											</Block>
										</Block>

										<Block classes={'brick brick-4'}>
			        						<Text type={'p'} classes={'e-text-center e-text-indigo-400'}>Menu with Icon</Text>
											<Block classes={'e-background-grey-100'}  style={{padding:'10px 15px', fontSize:'24px'}}>
												<Menu type={'cover'} icon={'action-account-circle'} className={'e-text-center e-text-indigo-400'}>
													<Text classes={'e-text-black'}>Profile</Text>
													<Text classes={'e-text-black'}>Settings</Text>
													<Text classes={'e-text-black'}>Logout</Text>
												</Menu>
											</Block>
										</Block>
									</Block>
			        			</Block>

			        			<Block>
			        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
			        				<Divider classes={'thin short e-background-indigo-400'} />

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
											npm install <strong>essence-menu</strong>
				        				</code>
			        				</pre>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Menu component has the following options:
										<br />
										<br />
										1. <strong>type</strong>: <u>string</u> from selected list: <u>fab</u> or <u>cover</u>
										<br />
										2. <strong>placeholder</strong>: <u>string</u> for initial menu text
										<br />
										3. <strong>icon</strong>: <u>icon name</u> from the Icons list
									</Text>

			        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
										Create a new ReactJS file with the code bellow.
									</Text>

			        				<pre className={'e-background-grey-100 e-text-black'}>
				        				<code>
				        					import Menu from 'essence-menu';
											<br />
											<br />
											&lt;Menu type=&#123;'cover'&#125; placeholder=&#123;'Left'&#125;&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Profile&lt;/Text&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Settings&lt;/Text&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Logout&lt;/Text&gt;
											<br />
											&lt;/Menu&gt;
											<br />
											<br />
											&lt;Menu type=&#123;'cover'&#125; placeholder=&#123;'Right'&#125; classes=&#123;'e-right'&#125;&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Profile&lt;/Text&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Settings&lt;/Text&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Logout&lt;/Text&gt;
											<br />
											&lt;/Menu&gt;
											<br />
											<br />
											&lt;Menu type=&#123;'cover'&#125; icon=&#123;'action-account-circle'&#125; className=&#123;'e-text-center e-text-orange-500'&#125;&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Profile&lt;/Text&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Settings&lt;/Text&gt;
											<br />
											&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;Logout&lt;/Text&gt;
											<br />
											&lt;/Menu&gt;
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

exports.AppMenu = AppMenu;