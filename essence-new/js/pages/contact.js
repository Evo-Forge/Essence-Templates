import React from 'react';
import Input from 'essence-input';
import Toast from 'essence-toast';
import Image from 'essence-image';
import Button from 'essence-button';
import ClassNames from 'classnames';
import Footer from '../partials/footer';
import {List, ListItem} from 'essence-list';
import {Block, Text, Divider} from 'essence-core';
import NavigationMenu from '../partials/navigation-menu';

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
          self.setState({
            message: 'Your message has not been sent!',
            visibleOK: false,
            visibleFailed: true,
          });
        }
      }.bind(self),
      'json'
    ).fail(function(error) {
       self.setState({
          message: 'Your message has not been sent!',
          visibleOK: false,
          visibleFailed: true,
        });
    });
  }

  render() {
    return (
      <Block className={'with-navigation'}>
        <NavigationMenu />
        <Block classes={'e-background-indigo-500'}>
          <Block className={'e-container '}>
            <Block className={'e-row'}>
              <Block classes={'brick brick-6 e-padding-top-25 '}>
                <Text type={'h3'} classes={'e-text-white e-text-uppercase'}>GET IN TOUCH WITH US HERE</Text>
                    <Divider classes={'thick medium e-background-white'} />
                <Text type={'h3'} classes={'e-body-1 e-text-white e-padding-top-15 e-padding-bottom-25'} style={{fontSize:'16px'}}>
                  We welcome feedback and we’re here if you happen to need some help with Essence.
                </Text>
              </Block>
              <Block classes={'brick brick-6 e-no-padding'}>
                <Image className={'e-img-rsp'} src={'./assets/img/footer.png'} alt={'footer'} />
              </Block>
            </Block>
          </Block>
        </Block> 

        <Block className={'e-container'} style={{minHeight:'calc(100vh - 348px)'}}>
              <Block className={'e-row contact e-margin-top-25'}>
                <Block className={'brick brick-6'}>
            
                    <Text type={'h4'} classes={'e-text-indigo-500'} style={{fontSize:'18px'}}>CONTACT</Text>
                    <Divider classes={'thick short e-background-indigo-500'} />
                    <Text type={'p'} classes={'e-body-1 e-text-grey-900 e-padding-top-15'} style={{fontSize:'16px', lineHeight:'18px'}}>
                      We're a team of passionate coders who believe React.JS and Material Design are amazing. We combined them into Essence as an open source project.  
                      <br/>
                      <br/>

Feel free to say "Hi" or give us feedback & suggestions:<br/>
</Text>
Twitter: <Text type={'a'} href={'https://twitter.com/Essence_MD'} target={'_blank'} className={'e-text-indigo-700'} >https://twitter.com/Essence_MD</Text>  <br/>
Facebook: <Text type={'a'} href={'https://www.facebook.com/getEssence/'} target={'_blank'} className={'e-text-indigo-700'} >https://www.facebook.com/getEssence/</Text>  <br/>
Twitter: <Text type={'a'} href={'mailto:hello@getessence.io'} className={'e-text-indigo-700'} >hello@getessence.io</Text>  <br/>

<Text type={'p'} classes={'e-body-1 e-text-grey-900 e-padding-top-15'} style={{fontSize:'16px', lineHeight:'18px'}}>
For specific questions we recommend using StackOverflow. Tag your questions with the “essence” tag and our team will offer support with getting started and using Essence:
</Text>
<Text type={'a'} href={'http://stackoverflow.com/questions/tagged/essence '} target={'_blank'} className={'e-text-indigo-700'} >http://stackoverflow.com/questions/tagged/essence </Text>  <br/>
<Text type={'p'} classes={'e-body-1 e-text-grey-900 e-padding-top-15'} style={{fontSize:'16px', lineHeight:'18px'}}>

If you need to build a custom interface, we're here to help; drop us a line at hello@getessence.io and let's talk the specifics of your project.
                    </Text>
                  </Block>
                  <Block className={'brick brick-6'}>
                    <Toast classes={'e-text-green-500'} visible={this.state.visibleOK} delay={3000}>
                      {this.state.message}
                    </Toast>
                    <Toast classes={'e-text-white'} visible={this.state.visibleFailed} delay={8000}>
                      {this.state.message}
                    </Toast>

                    <Block classes={'e-body-1 e-padding-top-15'}>
                      <Block className={'e-padding-top-15'}>
                        <Input type={'email'} ref={(ref) => this.contactEmail = ref} name={'email'} label={'Email address'} />
                      </Block>
                      <Block className={'e-padding-top-15'}>
                        <Input type={'text'} ref={(ref) => this.contactSubject = ref} name={'subject'} label={'Message subject'} />
                      </Block>
                      <Block className={'e-padding-top-15'}>
                        <Input type={'textarea'} ref={(ref) => this.contactMessage = ref} name={'message'} label={'Your message for us'} />
                      </Block>
                      <Button label={'SEND MESSAGE'} type={'succes'} className={'raised e-background-indigo-500'} onClick={this.sendMessage.bind(this)} />
                    </Block>
                  
                </Block>
              </Block>
        </Block>
        <Footer />
      </Block>
    );
  }
}

module.exports = AppContact;