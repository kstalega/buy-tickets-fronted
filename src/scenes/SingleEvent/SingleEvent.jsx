import React from 'react';

class SingleEvent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-sm-12">
        <div>Single event view {this.props.match.params.eventID || 'test'}</div>
      </div>
    );
  }
}

export default SingleEvent;
