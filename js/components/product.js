import React from 'react';
import ClassNames from 'classnames';

import {
	Btn, 
	Image, 
	Block, 
	Text,
	Divider,
	Switch,
	Dialog, DialogHeader, DialogContent, DialogFooter
} from 'react-essence';

class CommerceProduct extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	open: props.open || false,
        	classes: ClassNames(
                props.classes,
                props.className
            ),
            icon: {
				'blue': false,
				'teal': false,
				'indigo': false
			},
            product: props.product || {}
        };
    }

    componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.open || false,
			classes: ClassNames(
				nextProps.classes,
				nextProps.className
			),
			icon: {
				'blue': false,
				'teal': false,
				'indigo': false
			},
			product: nextProps.product || {}
		})
    }

	hideDialog() {
		this.setState({
			open: false
		});
	}

	setColor(color) {
		let icon = this.state.icon;
		icon[color] = !this.state.icon[color];

		this.setState({
			icon: icon
		});
	}

    render() {
        return (
			<Dialog visible={this.state.open} onClose={this.props.onClose}>
				<DialogContent style={{opacity: '1'}}>
					<Block className={'e-row'}>
						<Block className={'brick brick-7 e-text-center'}>
							<Image src={this.state.product.image} height={'400'} style={{width: '100%', height: 'auto'}} />
						</Block>
						<Block className={'brick brick-4 e-padding-top-50'}>
							<Text type={'h5'} classes={'e-caption e-text-uppercase e-text-light-blue-600'}>
								{this.state.product.category}
							</Text>
							<Text type={'h2'}>
								{this.state.product.title}
							</Text>
							<Text type={'small'} classes={'e-caption e-text-grey-500'}>
								{this.state.product.description}. The preferred choise of a vast range of developers which can make you wonder if this is really a good time invesment.
							</Text>
							<Divider />
							<Block>
								<Text type={'small'} classes={'e-caption e-text-grey-600'}>
									Color
								</Text>
								<br />
								<Btn 
									icon={this.state.icon.blue ? 'action-done' : 'image-looks-one'}
									onClick={this.setColor.bind(this, 'blue')} 
									className={'flat e-background-blue-400 e-text-white'} />
								<Btn 
									icon={this.state.icon.teal ? 'action-done' : 'image-looks-two'}
									onClick={this.setColor.bind(this, 'teal')} 
									className={'flat e-background-teal-400 e-text-white'} />
								<Btn 
									icon={this.state.icon.indigo ? 'action-done' : 'image-looks-3'}
									onClick={this.setColor.bind(this, 'indigo')} 
									className={'flat e-background-indigo-400 e-text-white'} />
							</Block>
							<Block className={'e-margin-top-15'}>
								<Text type={'small'} classes={'e-caption e-text-grey-600'}>
									Type
								</Text>
								<br />
								<Switch type={'switches'} afterText={'Standard'} beforeText={'Premium'} name={'switch-switches'} />
							</Block>

							<Divider />
							<Text type={'p'} classes={'e-subtitle e-text-grey-500'}>
								&euro;{this.state.product.price}
							</Text>
						</Block>
					</Block>
				</DialogContent>

				<DialogFooter>
					<Btn type={'succes'} label={'BUY'} className={'flat'} onClick={this.hideDialog.bind(this)} />
				</DialogFooter>
			</Dialog>
        );
    }
}

module.exports = CommerceProduct;