import React from 'react';
import { connect } from 'react-redux';
import { ActionsOrdersFetchByUserID } from '../../actions';
import { getUserInfo } from '../../services/AuthService';

class ShowOrders extends React.Component {
  componentDidMount() {
    const user = getUserInfo();
    this.props.ActionsOrdersFetchByUserID(user.userId);
  }

  render() {
    return (
      <div>Test by user ID</div>
    );
  }
}

export default connect(null, { ActionsOrdersFetchByUserID })(ShowOrders);
