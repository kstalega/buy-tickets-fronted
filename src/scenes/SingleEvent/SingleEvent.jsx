import React from 'react';

class SingleEvent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>Single event view {this.props.match.params.eventID || 'test'}</div>
    );
  }
}

export default SingleEvent;
