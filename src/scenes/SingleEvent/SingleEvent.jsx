import React from 'react';
import { connect } from 'react-redux';
import { ActionEventsFetchSingle } from '../../actions';

class SingleEvent extends React.Component {
  componentDidMount() {
    this.props.ActionEventsFetchSingle( this.props.match.params.eventID );
  }

  render() {
    console.log(this.props);
    return (
      <div className="col-sm-12">
        <div>Single event view {this.props.match.params.eventID || 'No ID' }</div>
      </div>
    );
  }
}

export default connect(null, { ActionEventsFetchSingle })(SingleEvent);
