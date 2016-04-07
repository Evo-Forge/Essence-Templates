import React from 'react';
import ClassNames from 'classnames';

import Image from 'essence-image';
import {Block, Text, Divider} from 'essence-core';

import {Link} from 'react-router';

class AppHome extends React.Component {
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
      <Block>
          <Block>
             <Text type={'h5'} classes={'e-text-indigo-400 e-padding-top-25'}>
              Pagina Home
            </Text>
            <Divider classes={'thin short e-background-indigo-400'} />
            <Link to={'contact'} >routing la contact</Link>
          </Block>
      </Block>
    );
  }
}

module.exports = AppHome;