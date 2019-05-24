import React from 'react';
import { connect } from 'react-redux';

const LoginComponenet = () => {
  return <div>Login Here</div>;
};

const mapStateToProps = state => state;

export const ConnectedLogin = connect(mapStateToProps)(LoginComponenet);
