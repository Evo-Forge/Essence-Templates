import React from 'react';
import ReactDOM from 'react-dom';
import Btn from 'essence-button';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';
import {Dialog, DialogHeader, DialogContent, DialogFooter} from 'essence-dialog';

class AppDialog extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	open: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
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
    
    dialogClosed() {
    	console.log('dialogClosed');
    }

    dialogOpened() {
    	console.log('dialogOpened');
    }

    render() {
        return (
			<Block classes={ClassNames('with-navigation', this.state.classes)}>
        		<NavigationMenu />

        		<Block classes={'e-background-indigo-500'}>
		          <Block className={'e-container '}>
		            <Block className={'e-row'}>
		              <Block classes={'brick brick-6 e-padding-top-25 '}>
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>DIALOGS</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    Dialogs contain text and UI controls focused on a specific task. They inform users about critical information, require users to make decisions, or involve multiple tasks.
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
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-h-center'}>
									<Btn 
                						type={'primary'} 
                						label={'Show Dialog'}
                						onClick={this.showDialog.bind(this)} 
                						className={'flat e-background-indigo-600'} />

									<Dialog dismissible={false} visible={this.state.open} onOpen={this.dialogOpened.bind(this)} onClose={this.dialogClosed.bind(this)}>
										<DialogHeader className={'e-text-right'} style={{paddingBottom:'0', position:'relative'}}>
											<Btn icon={'navigation-close'} onClick={this.hideDialog.bind(this)} className={'flat e-background-white'} style={{position:'absolute', right:'-24px', top:'-24px', zIndex:'1'}}/>
										</DialogHeader>
										<DialogContent>
											This is the Dialog content
										</DialogContent>
										<DialogFooter>
											<Btn type={'succes'} label={'OK'} className={'flat e-background-indigo-600'} />
											<Btn type={'info'} label={'Cancel'} onClick={this.hideDialog.bind(this)}  className={'flat e-background-indigo-600'} />
										</DialogFooter>
									</Dialog>
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-8'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-dialog</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import &#123;Dialog, DialogHeader, DialogContent, DialogFooter&#125; from 'essence-dialog';
									<br />
									<br />
									showDialog() &#123;
									<br />
									&nbsp;this.setState(&#123;
									<br />
									&nbsp;&nbsp;open: true
									<br />
									&nbsp;&#125;);
									<br />
									&#125;
									<br />
									<br />
									hideDialog() &#123;
									<br />
									&nbsp;this.setState(&#123;
									<br />
									&nbsp;&nbsp;open: false
									<br />
									&nbsp;&#125;);
									<br />
									&#125;
									<br />
									<br />
									dialogClosed() &#123;
									<br />
									&nbsp;console.log('dialogClosed');
									<br />
									&#125;
									<br />
									<br />
									dialogOpened() &#123;
									<br />
									&nbsp;console.log('dialogOpened');
									<br />
									&#125;
									<br />
									<br />
									&lt;Dialog dismissible=&#123;false&#125; visible=&#123;this.state.open&#125; onOpen=&#123;this.dialogOpened.bind(this)&#125; onClose=&#123;this.dialogClosed.bind(this)&#125;&gt;
									<br />
									&nbsp;&lt;DialogHeader className=&#123;'e-text-right'&#125;&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn icon=&#123;'navigation-close'&#125; onClick=&#123;this.hideDialog.bind(this)&#125; className=&#123;'flat e-background-white'&#125; /&gt;
									<br />
									&nbsp;&lt;/DialogHeader&gt;
									<br />
									<br />
									&nbsp;&lt;DialogContent&gt;
									<br />
									&nbsp;&nbsp;This is the Dialog content
									<br />
									&nbsp;&lt;/DialogContent&gt;
									<br />
									<br />
									&nbsp;&lt;DialogFooter&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'succes'&#125; label=&#123;'OK'&#125; className=&#123;'flat'&#125; /&gt;
									<br />
									&nbsp;&nbsp;&lt;Btn type=&#123;'info'&#125; label=&#123;'Cancel'&#125; onClick=&#123;this.hideDialog.bind(this)&#125; className=&#123;'flat'&#125; /&gt;
									<br />
									&nbsp;&lt;/DialogFooter&gt;
									<br />
									&lt;/Dialog&gt;							
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
	        						dismissible
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									true or false to toggle on/off the dialog clicked overlay background
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						visible
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						false
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									true or false to hide or show the dialog modal
	        					</Block>
	        				</Block>  
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						onOpen
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						undefined
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									Callback function on the Dialog is shown
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
									Callback function on the Dialog is hidden
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

exports.AppDialog = AppDialog;