import React from 'react';
import { connect } from 'react-redux';

import selectLoginContainer from './selectors';
import Login from '../../components/Login';
import { login, cancelLogin } from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <Login {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLoginContainer();

function mapDispatchToProps(dispatch) {
  return {
    login: email => dispatch(login(email)),
    cancelLogin: () => dispatch(cancelLogin()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
