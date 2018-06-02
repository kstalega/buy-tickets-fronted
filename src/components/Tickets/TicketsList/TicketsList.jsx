import React from 'react';
import { Ticket } from '../';

class TicketsList extends React.Component {
  render() {
    console.log(this.props.tickets);
    return (
      <div>
        <div>List of tickets</div>
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
