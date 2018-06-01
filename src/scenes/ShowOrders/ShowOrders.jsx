import React from 'react';
import { connect } from 'react-redux';
import { ActionsOrdersFetch } from '../../actions';

class ShowOrders extends React.Component {
  componentDidMount() {
    this.props.ActionsOrdersFetch();
  }

  render() {
    return (
      <div>Test</div>
    );
  }
}

export default connect(null, { ActionsOrdersFetch })(ShowOrders);
