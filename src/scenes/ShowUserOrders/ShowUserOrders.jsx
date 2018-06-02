import React from 'react';
import { connect } from 'react-redux';
import { ActionsOrdersFetchByUserID } from '../../actions';
import { getUserID } from '../../services/AuthService';

class ShowOrders extends React.Component {
  componentDidMount() {
    this.props.ActionsOrdersFetchByUserID(getUserID());
  }

  render() {
    return (
      <div>Test by user ID</div>
    );
  }
}

export default connect(null, { ActionsOrdersFetchByUserID })(ShowOrders);
