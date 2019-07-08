import React from 'react';
import PropTypes from 'prop-types';
import validator from 'email-validator';

import TextInput from '../TextInput';

import styles from './styles.css';

class Login extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: PropTypes.func.isRequired,
    cancelLogin: PropTypes.func.isRequired,
  };

  state = {};

  login = () => {
    const email = this.emailField.value();
    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email.',
      });
      return;
    }
    this.setState({
      errorText: null,
    });

    this.props.login(email);
  };

  render() {
    return (
      <div className={styles.login}>
        <div className={styles.heading}>Login with your email</div>
        <TextInput
          placeholder="Your email"
          ref={f => {
            this.emailField = f;
          }}
          errorText={this.state.errorText}
        />
        <div className={styles.actionContainer}>
          <div
            className={styles.button}
            role="button"
            tabIndex="0"
            onClick={this.props.cancelLogin}
            onKeyDown={this.props.cancelLogin}
          >
            cancel
          </div>
          <div
            className={styles.button}
            role="button"
            tabIndex="0"
            onClick={this.login}
            onKeyDown={this.login}
          >
            log in
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
