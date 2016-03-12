import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

// Essence core
import {Block} from 'react-essence';

// Components
import CommerceHeader from './components/header';
import CommerceBanner from './components/banner';
import CommerceGoShopping from './components/go-shopping';
import CommerceArticles from './components/articles';
import CommerceProducts from './components/products';
import CommerceFooter from './components/footer';

class Commerce extends React.Component {
	render() {
        return(
        	<Block>
				<CommerceHeader />
				<CommerceBanner />
				<CommerceGoShopping text={'Winter is over & Essence is coming'} />
				<CommerceArticles />
				<CommerceProducts />
				<CommerceGoShopping />
				<CommerceFooter />
        	</Block>
        );
    }
}

ReactDOM.render(
	<Block className={'e-no-margin'}>
		<Commerce />
	</Block>
	,
	document.querySelector('.app')
);