import React from 'react';
import ClassNames from 'classnames';

import Toast from 'essence-toast';
import Input from 'essence-input';
import Button from 'essence-button';
import {Block, Text, Divider} from 'essence-core';

import {Link} from 'react-router';


class AppContact extends React.Component {

  render() {
    return (
      <Block>
          <Block>
             <Text type={'h5'} classes={'e-text-indigo-400 e-padding-top-25'}>
              Pagina Contact
            </Text>
            <Divider classes={'thin short e-background-indigo-400'} />
            <Link to={'home'} >routing la home</Link>
          </Block>
      </Block>
    );
  }
}

module.exports = AppContact;