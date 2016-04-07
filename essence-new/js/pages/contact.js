import React from 'react';
import ClassNames from 'classnames';

import Toast from 'essence-toast';
import Input from 'essence-input';
import Button from 'essence-button';
import {Block, Text, Divider} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ClassNames(
        this.props.classes,
        this.props.className
      ),
      message: false,
      visibleOK: false,
      visibleFailed: false
    };
  }

  sendMessage() {
    let self = this;
    let email = this.contactEmail; 
    let subject = this.contactSubject;
    let message = this.contactMessage;

    $.post(
      'contact.php',
      {
        email: email.state.inputValue,
        subject: subject.state.inputValue,
        message: message.state.inputValue
      },
      function (result) {
        if (result.status === 200) {
          document.querySelector('[name=email]').value = '';
          document.querySelector('[name=subject]').value = '';
          document.querySelector('[name=message]').value = '';

          self.setState({
            message: 'Your message has been sent!',
            visibleOK: true,
            visibleFailed: false,
          });
        }

        if (result.status === 403) {
          let errors = [
            (<li key={'error-title'} style={{listStyleType:'none'}}>
              Your message has NOT been sent!
            </li>),
            (<li key={'error-separator'} style={{listStyleType:'none'}}>
              &nbsp;
            </li>)
          ];

          Object.keys(result.data.errors).map(function(error, index) {
            errors.push(<li key={'error-'+index}>{result.data.errors[error]}</li>);
          });

          self.setState({
            message: (<ul style={{listStyleType:'circle'}}>{errors}</ul>),
            visibleOK: false,
            visibleFailed: true,
          });
        }
      }.bind(self),
      'json'
    ).fail(function(error) {
      let errors = [
        (<li key={'error-title'} style={{listStyleType:'none'}}>
          Your message has NOT been sent!
        </li>)
      ];

      self.setState({
        message: (<ul style={{listStyleType:'circle'}}>{errors}</ul>),
        visibleOK: false,
        visibleFailed: true,
      });
    });
  }

  render() {
    return (
      <Block classes={'e-container e-padding-top-25'}>
        <Block className={'e-row'}>
          <Block classes={'brick brick-12'}>
            <Text type={'h3'} classes={'e-text-indigo-400 e-text-uppercase'}>GET IN TOUCH WITH US HERE</Text>
                <Divider classes={'thick medium e-background-indigo-400'} />
            <Text type={'p'} classes={'e-body1 e-text-blue-grey-700 e-padding-top-25 e-padding-bottom-25'} style={{fontSize:'14px'}}>
              Let us know what you think about Essence Project, write us any suggestion or idea that can help improve Essence.
            </Text>

                <Card>
                  <CardContent>
                    <Block className={'e-row'}>
                      <Block className={'brick-12'}>
                        <Block className={'e-padding-bottom-15'}>
                      <Text type={'h4'} classes={'e-text-indigo-400'}>CONTACT:</Text>
                      <Divider classes={'thin short e-background-indigo-400'} />

                      <Toast classes={'e-text-green-500'} visible={this.state.visibleOK} delay={3000}>
                        {this.state.message}
                      </Toast>
                      <Toast classes={'e-text-white'} visible={this.state.visibleFailed} delay={8000}>
                        {this.state.message}
                      </Toast>

                      <Block classes={'e-body1'}>
                        <Block className={'e-padding-top-15'}>
                          <Input type={'email'} ref={(ref) => this.contactEmail = ref} name={'email'} label={'Email address'} />
                        </Block>
                        <Block className={'e-padding-top-15'}>
                          <Input type={'text'} ref={(ref) => this.contactSubject = ref} name={'subject'} label={'Message subject'} />
                        </Block>
                        <Block className={'e-padding-top-15'}>
                          <Input type={'textarea'} ref={(ref) => this.contactMessage = ref} name={'message'} label={'Your message for us'} />
                        </Block>
                        <Button label={'SEND MESSAGE'} type={'succes'} className={'raised e-background-indigo-600'} onClick={this.sendMessage.bind(this)} />
                      </Block>
                    </Block>
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

module.exports = AppContact;