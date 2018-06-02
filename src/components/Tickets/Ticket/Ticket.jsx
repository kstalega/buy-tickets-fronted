import React from 'react';

class Ticket extends React.Component {
  render() {
    const { id, status, type } = this.props.ticket;
    return (
      <div>Ticket ID: {id}, Status: {status}, type: {type}</div>
    );
  }
};

export { Ticket };
