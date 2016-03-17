import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Menu from 'essence-menu';
// import ToolBar from '../../../../Essence/components/essence-toolbar/src/toolbar.jsx';
import ToolBar from 'essence-toolbar';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppToolBar extends React.Component {
	constructor(props) {
      super(props);
      this.state = {
          classes: ClassNames(
              this.props.classes,
              this.props.className
          ),
          ToolBarTitle: false
      };
  }

  changeTitle(string) {
  	this.setState({
  		ToolBarTitle: string.toString()
  	});
  }

  render() {
    return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'e-row'}>
					<Block classes={'brick brick-12'}>
					<Text type={'h3'} classes={'e-text-indigo-400'}>TOOLBAR</Text>
        	<Divider classes={'thick short e-background-indigo-400'} />
					<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
						It’s never been more fun to create an toolbar with button and navigation and whatever. Start with the .e-toolbar class then add buttons, menus and whatever you need.
					</Text>

		      <Card>
        		<CardContent>
        			<Block>
	        			<Block>
	        				<Text type={'h4'} classes={'e-text-indigo-400'}>LIVE EXAMPLE:</Text>
	        				<Divider classes={'thin short e-background-indigo-400'} />
									<ToolBar className={'e-margin-top-25 e-margin-bottom-25 clearfix'}>

										<Menu type={'cover'} icon={'navigation-more-vert'} classes={'e-left'}>
											<Text className={'e-text-black'}>
												<Text
													onClick={this.changeTitle.bind(this, 'Toasts')}>
													<Text>Change Title</Text>
													&nbsp;
													<Text type={'strong'}>Toasts</Text>
												</Text>
											</Text>
											<Text className={'e-text-black'}>
												<Text
													onClick={this.changeTitle.bind(this, 'SnackBars')}>
													<Text>Change Title</Text>
													&nbsp;
													<Text type={'strong'}>SnackBars</Text>
												</Text>
											</Text>
											<Text className={'e-text-black'}>
												<Text
													onClick={this.changeTitle.bind(this, 'Data Table')}>
													<Text>Change Title</Text>
													&nbsp;
													<Text type={'strong'}>Data Table</Text>
												</Text>
											</Text>
										</Menu>

										<Text>Essence - {this.state.ToolBarTitle || 'ToolBar Example'}</Text>

										<Block className={'e-right'}>
											<Menu type={'cover'} icon={'action-settings'} classes={'e-right'}>
												<Text className={'e-text-black'}>
													<Text type={'a'} href={'#icons'}>Link to: Icons</Text>
												</Text>
												<Text className={'e-text-black'}>
													<Text type={'a'} href={'#button'}>Link to: Buttons</Text>
												</Text>
												<Text className={'e-text-black'}>
													<Text type={'a'} href={'#core'}>Link to: Essence Core</Text>
												</Text>
											</Menu>
										</Block>
									</ToolBar>
	        			</Block>
	        			<Block>
	        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
	        				<Divider classes={'thin short e-background-indigo-400'} />

	        				<Text type={'p'} classes={'e-body1 e-text-blue-grey-700 padding-top-bottom-10'}>
								See the Live Example from above and customize your own ToolBar component with code below.
							</Text>

	        				<pre className={'e-background-grey-100 e-text-black'}>
		        				<code>
									npm install <strong>essence-toolbar</strong>
		        				</code>
	        				</pre>

	        				<pre className={'e-background-grey-100 e-text-black'}>
		        				<code>
									import Menu from 'essence-menu';
									<br />
									import ToolBar from 'essence-toolbar';
									<br />
									import &#123;Block, Text, Divider&#125; from 'essence-core';
									<br />
									<br />

									<br />
									<br />
									&lt;ToolBar className=&#123;'e-background-indigo-400 e-text-white'&#125;&gt;
									<br />
									&nbsp;&lt;Menu type=&#123;'cover'&#125; icon=&#123;'navigation-more-vert'&#125; className=&#123;'e-left'&#125;&gt;
									<br />
									&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text onClick=&#123;this.changeTitle.bind(this, 'Toasts')&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Change Title&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125;&gt;Toasts&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text onClick=&#123;this.changeTitle.bind(this, 'SnackBars')&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Change Title&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125;&gt;SnackBars&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text onClick=&#123;this.changeTitle.bind(this, 'Data Table')&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text&gt;Change Title&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'strong'&#125;&gt;Data Table&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&lt;/Menu&gt;
									<br />
									<br />
									&nbsp;&lt;Text&gt;Essence - &#123;this.state.ToolBarTitle || 'ToolBar Example'&#125;&lt;/Text&gt;
									<br />
									<br />
									&nbsp;&lt;Block className=&#123;'e-right'&#125;&gt;
									<br />
									&nbsp;&nbsp;&lt;Menu type=&#123;'cover'&#125; icon=&#123;'action-settings'&#125; className=&#123;'e-right'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#icons'&#125;&gt;Link to: Icons&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#button'&#125;&gt;Link to: Buttons&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;Text className=&#123;'e-text-black'&#125;&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Text type=&#123;'a'&#125; href=&#123;'#core'&#125;&gt;Link to: Essence Core&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&nbsp;&lt;/Text&gt;
									<br />
									&nbsp;&nbsp;&lt;/Menu&gt;
									<br />
									&nbsp;&lt;/Block&gt;
									<br />
									&lt;/ToolBar&gt;
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

exports.AppToolBar = AppToolBar;