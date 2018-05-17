import React from 'react';
import jQuery from 'jquery';
import APIsConfig from '../../configs/api';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isLoading: false,
      events: [],
    };

    this.eventsFetched = this.eventsFetched.bind(this);
    this.tryToGetEvents = this.tryToGetEvents.bind(this);
  }

  componentDidMount() {
    this.tryToGetEvents();
  }

  eventsFetched(events) {
    this.setState({
      isLoaded: true,
      isLoading: false,
      events,
    });
  }

  tryToGetEvents() {
    this.setState({
      isLoading: true,
    });

    const type = APIsConfig.events.getEvents.method;
    const url = APIsConfig.events.url + APIsConfig.events.getEvents.endPoint;
    jQuery.ajax({
      type,
      url,
      success: this.eventsFetched,
      dataType: 'json',
    });
  }

  renderEvent(event, index) {
    return (
      <div style={{ padding: '15px' }} key={index}>
        <h2>{ event.name }</h2>
        <h3>Artis: { event.artist }</h3>
        <p style={{ paddingBottom: '25px' }}>Premium Tickets number { event.premiumTicketsNumber }, regular tickets number { event.regularTicketsNumber } </p>
      </div>
    );
  }

  render() {
    const { events } = this.state;

    return (
      <div>
        {events.map((event, index) =>
          this.renderEvent(event, index))}
      </div>
    );
  }
}

export default EventsList;
