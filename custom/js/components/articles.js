import React from 'react';
import ClassNames from 'classnames';

import {
	Btn, 
	Image, 
	Block, 
	Text, 
	Divider, 
	Card, 
	CardHeader, 
	CardContent, 
	CardFooter
} from 'react-essence';

class CommerceArticles extends React.Component {
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
        	<Block className={'e-container e-margin-top-15'}>
	    		<Block classes={'e-row'}>
					<Block classes={'brick brick-12'}>
						<Text type={'h3'} className={'e-text-grey-800'}> Latest blog articles </Text>
					</Block>
					<Block classes={'brick brick-8'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Text type={'a'} href={'#!'}>
									<Image src={'https://source.unsplash.com/category/technology/780x376?computer'} height={'376'} />
								</Text>
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'small'} className={'e-caption e-text-grey-700'}>
											Feb {new Date().getDate()}, 
												{new Date().getUTCFullYear()}
										</Text>
										<Text type={'h4'} className={'text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												CSS variables are finally landing in Chrome to help you clean up your code
											</Text>
										</Text>
										<Divider classes={'thin medium'} />
										<Text type={'small'} className={'e-caption e-text-grey-600'}>
											by <Text type={'a'} href={'#!'} className={'e-text-orange-600'}>ReactJS Lover</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
						</Card>
					</Block>
					<Block classes={'brick brick-4'}>
						<Card>
							<CardContent className={'e-no-padding card-main-image'}>
								<Image src={'https://source.unsplash.com/category/technology/270x270?gadget'} height={'376'} />
								<Block className={'e-container'}>
									<Block className={'brick brick-12'}>
										<Text type={'small'} className={'e-caption e-text-grey-700'}>
											Feb {new Date().getDate() - 1}, {new Date().getUTCFullYear()}
										</Text>
										<Text type={'h4'} className={'text-truncate'}>
											<Text type={'a'} href={'#!'} className={'e-text-grey-900'}>
												Essence - The Essential Material Design Framework (Google Defined, Crafted With Essence)
											</Text>
										</Text>
										<Divider classes={'thin medium'} />
										<Text type={'small'} className={'e-caption e-text-grey-600'}>
											by <Text type={'a'} href={'#!'} className={'e-text-orange-600'}>Essence Intern</Text>
										</Text>
									</Block>
								</Block>
							</CardContent>
						</Card>
					</Block>
					<Block classes={'brick brick-12'}>
						<Divider classes={'e-margin-top-15 e-margin-bottom-15'}/>
					</Block>
				</Block>
			</Block>
        );
    }
}

module.exports = CommerceArticles;