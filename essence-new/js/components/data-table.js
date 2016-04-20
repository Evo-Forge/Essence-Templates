import React from 'react';
import Icon from 'essence-icon';
import ReactDOM from 'react-dom';
import Image from 'essence-image';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import DataTable from 'essence-data-table';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

var tableData = {
	'header': [ 
	    {
	    	'name': 'Desert (100g serving)', 
	    	'tooltip': 'Caption for the column Desert (100g serving)',
	    	'onSorting': (function() { console.log('sort by Desert (100g serving)'); })
	    },
	    {
	    	'name': 'Calories', 
	    	'tooltip': 'Caption for the column Calories',
	    	'onSorting': (function() { console.log('sort by Calories'); })
	    },
	    {
	    	'name': 'Fat (g)', 
	    	'tooltip': 'Caption for the column Fat (g)',
	    	'onSorting': (function() { console.log('sort by Fat (g)'); })
	    },
	    {
	    	'name': 'Carbs (g)', 
	    	'tooltip': 'Caption for the column Carbs (g)',
	    	'onSorting': (function() { console.log('sort by Carbs (g)'); })
	    },
	    {
	    	'name': 'Protein (g)', 
	    	'tooltip': 'Caption for the column Protein (g)',
	    	'onSorting': (function() { console.log('sort by Protein (g)'); })
	    },
	    {
	    	'name': 'Sodium (mg)', 
	    	'tooltip': 'Caption for the column Sodium (mg)',
	    	'onSorting': (function() { console.log('sort by Sodium (mg)'); })
	    },
	    {
	    	'name': 'Calcium (%)', 
	    	'tooltip': 'Caption for the column Calcium (%)',
	    	'onSorting': (function() { console.log('sort by Calcium (%)'); })
	    },
	    {
	    	'name': 'Iron (%)', 
	    	'tooltip': 'Caption for the column Iron (%)',
	    	'onSorting': (function() { console.log('sort by Iron (%)'); })
	    },
	],
	'rows': [
		['Frozen yogurt', '159', '6.0', '24', '4.0', '87', '14%', '1%'],
		['Ice cream sandwich', '237', '9.0', '37', '4.3', '129', '8%', '1%'],
		['Eclair', '262', '16.0', '24', '6.0', '337', '6%', '7%'],
		['Cupcake', '305', '16.0', '24', '6.0', '413', '3%', '6%'],
		['Gingerbread', '356', '3.7', '67', '4.3', '413', '3%', '8%'],
		['Jelly bean', '356', '16.0', '94', '4.3', '129', '8%', '16%'],
		['Lollipop', '392', '0.2', '97', '0.0', '50', '0%', '2%'],
		['Honeycomb', '408', '3.2', '87', '0.0', '129', '4%', '2%'],
		['Donut', '452', '25.0', '51', '4.9', '326', '0%', '1%'],
		['KitKat', '518', '26.0', '65', '7.0', '54', '8%', '4%'],
		['Input', '518', '26.0', '65', '7.0', '54', '8%', '6%']
	],
	'footer': {
		'limit': 5, 
		'total': 100,
		'pagination': {
			'start': 1,
			'end': 10,
			'callback': (function() { console.log('footer change page'); })
		},
		'next': {
			'context': (<Icon name='hardware-keyboard-arrow-right' />),
			'callback': (function() { console.log('footer next page'); })
		}, 
		'prev': {
			'context': (<Icon name='hardware-keyboard-arrow-left' />),
			'callback': (function() { console.log('footer previous page'); })
		}, 
	}
};

class AppDataTable extends React.Component {
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
		                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>DATA TABLE</Text>
		                    <Divider classes={'thick medium e-background-white'} />
		                <Text type={'p'} classes={'e-body1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
		                    Data tables display raw data sets. They usually appear in desktop enterprise products.
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
		        		<Block classes={'brick brick-12'} style={{overflow:'hidden'}}>	
							<Text type={'h4'} classes={'e-text-indigo-500'}>LIVE EXAMPLE</Text>
		    				<Divider classes={'thick short e-background-indigo-500'} />							
											    	
							<Block className={'e-row e-body1 e-text-grey-700 e-padding-top-15'}>
								<Block className={'e-text-grey-900 brick brick-12 e-no-margin e-h-center'}>
									<DataTable data={tableData} />
								</Block>						
							</Block>								
						</Block>
						<Block classes={'brick brick-12'}>
							<Text type={'h4'} classes={'e-text-indigo-500'}>USE COMPONENTS</Text>
	        				<Divider classes={'thick short e-background-indigo-500 e-margin-bottom-25'} />	

	        				<pre className={'e-background-orange-100 e-text-black e-no-margin e-padding-top-15'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
		        				<code>
									npm install <strong>essence-data-table</strong>
		        				</code>
	        				</pre>	       						        				

	        				<Text type={'p'} classes={'e-body1 e-text-grey-900 padding-top-bottom-10 e-no-margin'}>
								Create a new ReactJS file with the code bellow.
							</Text>

							<pre className={'e-background-orange-100 e-text-black e-no-margin'} style={{border:'1px solid #FFB74D', lineHeight:'20px'}}>
			    				<code>
									import Icon from 'essence-icon';
									<br />
									import DataTable from 'essence-data-table';
									<br />
									<br />
									var tableInfo = &#123;
									<br />
									&nbsp;&nbsp;'header': [ 
									<br />
									&nbsp;&nbsp;&nbsp;&#123;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;'name': 'Column 1', 
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;'tooltip': 'Caption for the column 1',
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;'onSorting': (function() &#123; console.log('sort by Column 1'); &#125;)
									<br />
									&nbsp;&nbsp;&nbsp;&#125;,
									<br />
									&nbsp;&nbsp;&nbsp;&#123;
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;'name': 'Column 2', 
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;'tooltip': 'Caption for the column 2',
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;'onSorting': (function() &#123; console.log('sort by Column 2'); &#125;)
									<br />
									&nbsp;&nbsp;&nbsp;&#125;
									<br />
									&nbsp;&nbsp;],
									<br />
									&nbsp;&nbsp;'rows': [
									<br />
									&nbsp;&nbsp;&nbsp;['Row 1 Column 1', 'Row 1 Column 2'],
									<br />
									&nbsp;&nbsp;&nbsp;['Row 2 Column 1', 'Row 2 Column 2'],
									<br />
									&nbsp;&nbsp;&nbsp;['Row 3 Column 1', 'Row 3 Column 2']
									<br />
									&nbsp;&nbsp;],
									<br />
									&nbsp;&nbsp;'footer': &#123;
									<br />
									&nbsp;&nbsp;&nbsp;'limit': 5, 
									<br />
									&nbsp;&nbsp;&nbsp;'total': 100,
									<br />
									&nbsp;&nbsp;&nbsp;'pagination': &#123;
									<br />
									&nbsp;&nbsp;&nbsp;'start': 1,
									<br />
									&nbsp;&nbsp;&nbsp;'end': 10,
									<br />
									&nbsp;&nbsp;&nbsp;'callback': (function() &#123; console.log('footer page change'); &#125;)
									<br />
									&nbsp;&nbsp;&#125;,
									<br />
									&nbsp;&nbsp;'next': &#123;
									<br />
									&nbsp;&nbsp;&nbsp;'context': (&lt;Icon name='hardware-keyboard-arrow-right' /&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;'callback': (function() &#123; console.log('footer next page'); &#125;)
									<br />
									&nbsp;&nbsp;&#125;, 
									<br />
									&nbsp;&nbsp;'prev': &#123;
									<br />
									&nbsp;&nbsp;&nbsp;'context': (&lt;Icon name='hardware-keyboard-arrow-left' /&gt;),
									<br />
									&nbsp;&nbsp;&nbsp;'callback': (function() &#123; console.log('footer previous page'); &#125;)
									<br />
									&nbsp;&nbsp;&nbsp;&#125;, 
									<br />
									&nbsp;&nbsp;&#125;
									<br />
									&#125;;
									<br />
									<br />
									&lt;DataTable data=&#123;tableInfo&#125;/&gt;						
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
	        						data
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									An object list with keys: header, rows, footer
	        					</Block>
	        				</Block>	
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						header
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									An object list with keys: name, tooltip, onSorting callback
	        					</Block>
	        				</Block> 
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						rows
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									An array list with the same number of columns as from header
	        					</Block>
	        				</Block>
	        				<Block classes={'e-row tabel-line no-resize e-body1 e-no-margin'}>	
	        					<Block classes={'brick brick-3 e-no-margin e-text-indigo-700'}>	
	        						footer
	        					</Block>
	        					<Block classes={'brick brick-3 e-no-margin e-text-orange-700'}>	
	        						null
	        					</Block>
	        					<Block classes={'brick brick-6 e-no-margin e-text-grey-900'}>	
									An object list with keys: limit, total, pagination with callback, next with context (icon) & callback, prev with context (icon) & callback
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

exports.AppDataTable = AppDataTable;