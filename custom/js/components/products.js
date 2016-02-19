import React from 'react';
import ClassNames from 'classnames';

import { Btn, Image, Block, Text, Divider, Card, CardHeader, CardContent, CardFooter, SnackBar } from 'react-essence';

class CommerceProducts extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.classes,
                this.props.className
            ),
            addToCartVisible: false,
            addToCartMessage: ''
        };
    }

   	hideSnackBar() {
   		this.setState({
            addToCartVisible: false
   		});
   	}

   	addToCart(product) {
   		this.setState({
            addToCartVisible: true,
            addToCartMessage: product.toString() + ' added to cart'
   		});
   	}

    render() {
        return (
        	<Block className={'e-container'}>
		   		<SnackBar 
		   			delay={5000}
		   			classes={'e-text-green-500'}
		   			visible={this.state.addToCartVisible}
		   			onEnd={this.hideSnackBar.bind(this)}>
					{this.state.addToCartMessage}
				</SnackBar>
	    		<Block classes={'e-row'}>
	    			<Block classes={'brick brick-12'}>
						<Text type={'h3'} className={'e-text-grey-800'}> Trending products </Text>
					</Block>
	    		</Block>
	    		<Block classes={'e-row'}>
					<Block classes={'brick brick-3'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'} className={'e-text-center'}>
									<Image src={'https://source.unsplash.com/category/technology/270x270?computer'} height={'275'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Product computer edition
											</Text>
										</Text>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-400'}>
												Aluminium premium materials
											</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
							<CardFooter>
								<Block className={'e-row'}>
									<Block className={'brick brick-12'}>
										<Text style={{lineHeight: '36px'}} className={'e-text-grey-700'}>
											&euro;679.00
											<del className={'e-caption e-text-red-500'}>&euro;779.00</del>
										</Text>
										<Btn 
											label={'shop'} 
											type={'succes'} 
											classes={'flat e-background-white e-text-green-800 e-right'}
											onClick={this.addToCart.bind(this, 'Product computer edition')} />
									</Block>
								</Block>
							</CardFooter>
						</Card>
					</Block>
					<Block classes={'brick brick-3'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'} className={'e-text-center'}>
									<Image src={'https://source.unsplash.com/category/technology/270x270?gadget'} height={'275'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Product Gadgets edition
											</Text>
										</Text>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-400'}>
												Latest trends in 2016
											</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
							<CardFooter>
								<Block className={'e-row'}>
									<Block className={'brick brick-12'}>
										<Text style={{lineHeight: '36px'}} className={'e-text-grey-700'}>&euro;249.00</Text>
										<Btn 
											label={'shop'} 
											type={'succes'} 
											classes={'flat e-background-white e-text-green-800 e-right'}
											onClick={this.addToCart.bind(this, 'Product Gadgets edition')} />
									</Block>
								</Block>
							</CardFooter>
						</Card>
					</Block>
					<Block classes={'brick brick-3'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'} className={'e-text-center'}>
									<Image src={'https://source.unsplash.com/category/technology/270x270?phone'} height={'275'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Premium Phone edition
											</Text>
										</Text>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-400'}>
												The cheapest phone from India
											</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
							<CardFooter>
								<Block className={'e-row'}>
									<Block className={'brick brick-12'}>
										<Text style={{lineHeight: '36px'}} className={'e-text-grey-700'}>&euro;3.50</Text>
										<Btn 
											label={'shop'} 
											type={'succes'} 
											classes={'flat e-background-white e-text-green-800 e-right'}
											onClick={this.addToCart.bind(this, 'Premium Phone edition')} />
									</Block>
								</Block>
							</CardFooter>
						</Card>
					</Block>
					<Block classes={'brick brick-3'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'} className={'e-text-center'}>
									<Image src={'https://source.unsplash.com/category/technology/270x270?camera'} height={'275'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Camera Water Protective edition
											</Text>on
										</Text>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-400'}>
												Resist up to 50m underwater
											</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
							<CardFooter>
								<Block className={'e-row'}>
									<Block className={'brick brick-12'}>
										<Text style={{lineHeight: '36px'}} className={'e-text-grey-700'}>&euro;135.00</Text>
										<Btn 
											label={'shop'} 
											type={'succes'} 
											classes={'flat e-background-white e-text-green-800 e-right'}
											onClick={this.addToCart.bind(this, 'Camera Water Protective edition')} />
									</Block>
								</Block>
							</CardFooter>
						</Card>
					</Block>
				</Block>
				<Block classes={'e-row e-padding-top-25'}>
					<Block classes={'brick brick-3'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'} className={'e-text-center'}>
									<Image src={'https://source.unsplash.com/category/technology/270x270?apple,pro,computer'} height={'275'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Product computer edition
											</Text>
										</Text>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-400'}>
												Aluminium premium materials
											</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
							<CardFooter>
								<Block className={'e-row'}>
									<Block className={'brick brick-12'}>
										<Text style={{lineHeight: '36px'}} className={'e-text-grey-700'}>&euro;679.00</Text>
										<Btn label={'shop'} type={'succes'} classes={'flat e-background-white e-text-green-800 e-right e-right'} />
									</Block>
								</Block>
							</CardFooter>
						</Card>
					</Block>
					<Block classes={'brick brick-3'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'} className={'e-text-center'}>
									<Image src={'https://source.unsplash.com/category/technology/270x270?glasses'} height={'275'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Product Gadgets edition
											</Text>
										</Text>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-400'}>
												Latest trends in 2016
											</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
							<CardFooter>
								<Block className={'e-row'}>
									<Block className={'brick brick-12'}>
										<Text style={{lineHeight: '36px'}} className={'e-text-grey-700'}>&euro;249.00</Text>
										<Btn label={'shop'} type={'succes'} classes={'flat e-background-white e-text-green-800 e-right e-right'} />
									</Block>
								</Block>
							</CardFooter>
						</Card>
					</Block>
					<Block classes={'brick brick-3'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'} className={'e-text-center'}>
									<Image src={'https://source.unsplash.com/category/technology/270x270?iphone'} height={'275'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Premium Phone edition
											</Text>
										</Text>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-400'}>
												The cheapest phone from India
											</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
							<CardFooter>
								<Block className={'e-row'}>
									<Block className={'brick brick-12'}>
										<Text style={{lineHeight: '36px'}} className={'e-text-grey-700'}>&euro;3.50</Text>
										<Btn label={'shop'} type={'succes'} classes={'flat e-background-white e-text-green-800 e-right'} />
									</Block>
								</Block>
							</CardFooter>
						</Card>
					</Block>
					<Block classes={'brick brick-3'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'} className={'e-text-center'}>
									<Image src={'https://source.unsplash.com/category/technology/270x270?canon'} height={'275'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Camera Water Protective edition
											</Text>on
										</Text>
										<Text type={'p'} className={'e-caption text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-400'}>
												Resist up to 50m underwater
											</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
							<CardFooter>
								<Block className={'e-row'}>
									<Block className={'brick brick-12'}>
										<Text style={{lineHeight: '36px'}} className={'e-text-grey-700'}>&euro;135.00</Text>
										<Btn label={'shop'} type={'succes'} classes={'flat e-background-white e-text-green-800 e-right'} />
									</Block>
								</Block>
							</CardFooter>
						</Card>
					</Block>
				</Block>
			</Block>
        );
    }
}

module.exports = CommerceProducts;