import React from 'react';
import ClassNames from 'classnames';

import Toast from 'essence-toast';
import Input from 'essence-input';
import Button from 'essence-button';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppCore extends React.Component {

  render() {
    return (
      <Block classes={'e-container e-padding-top-25'}>
        <Block className={'e-row'}>
          core - carduri cu grid divider etc
        </Block>
      </Block>
    );
  }
}

module.exports = AppCore; 