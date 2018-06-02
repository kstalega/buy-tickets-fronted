import React from 'react';

class Ticket extends React.Component {
  render() {
    return (
      <div>Ticket ID: {this.props.ticket.id}, Status: {this.props.ticket.status}</div>
    );
  }
};

export { Ticket };
