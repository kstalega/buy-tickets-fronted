import React from 'react';
import { connect } from 'react-redux';
import { hasUserEnoughPermissionLevel } from '../services/AuthService';

const PrivateElement = (props) => {
  const { neededpermission: neededPermission = 0 } = props;
  if (props.logged && hasUserEnoughPermissionLevel(neededPermission)) {
    return props.children;
  }
  return (null);
};

const mapStateToProps = (state) => {
  const { logged } = state.auth;

  return {
    logged,
  };
};

export default connect(
  mapStateToProps,
  {},
)(PrivateElement);
