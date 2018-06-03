import React from 'react';
import { isLoggedIn, hasUserEnoughPermissionLevel } from '../services/AuthService';

const PrivateElement = (props) => {
  if (isLoggedIn() && hasUserEnoughPermissionLevel(props.neededpermission)) {
    return props.children;
  }
  return (null);
};

export default PrivateElement;
