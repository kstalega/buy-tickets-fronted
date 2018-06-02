import React from 'react';
import Ticket from '../Ticket/Ticket';

class TicketsList extends React.Component {
  render() {
    return (
      <div>
        <h4>List of tickets</h4>
        {
          this.props.tickets.map((ticket) => {
            return (<Ticket ticket={ticket} key={ticket.id} />);
          })
        }
      </div>
    );
  }
}

export { TicketsList };
