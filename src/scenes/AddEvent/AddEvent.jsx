import React from 'react';
import { connect } from 'react-redux';
import { tryToCreateEventAction } from '../../actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.tryToCreateEvent = this.tryToCreateEvent.bind(this);
  }

  defaultState = {
    artist: '',
    date: '',
    eventAddress: '',
    eventType: '',
    name: '',
    organizer: '',
    premiumTicketsNumber: '',
    regularTicketsNumber: '',
    resignationPeriod: '',
    status: '',
  }

  handleInputChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  tryToCreateEvent() {
    const {
      artist,
      date,
      eventAddress,
      eventType,
      name,
      organizer,
      premiumTicketsNumber,
      regularTicketsNumber,
      resignationPeriod,
      status,
    } = this.state;

    this.props.tryToCreateEventAction({
      artist: 'string',
      date: '2018-05-19T10:48:12.522Z',
      eventAddress: 'string',
      eventType: 'string',
      id: 0,
      name: 'string',
      organizer: 'string',
      premiumTicketsNumber: 0,
      regularTicketsNumber: 0,
      resignationPeriod: 0,
      status: 'string',
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Add new event</h1>
        <div>
          { this.props.signUpStarted ? 'Please wait, we attempt to create new event' : '' }
        </div>
        <div>
          { this.props.message ? this.props.message : '' }
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Artist'
            name='artist'
            onChange={this.handleInputChange}
            value={this.state.artist}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Date'
            name='date'
            onChange={this.handleInputChange}
            value={this.state.date}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Event address'
            name='eventAddress'
            onChange={this.handleInputChange}
            value={this.state.eventAddress}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Event type'
            name='eventType'
            onChange={this.handleInputChange}
            value={this.state.eventType}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            name='name'
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Organizer'
            name='organizer'
            onChange={this.handleInputChange}
            value={this.state.organizer}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Premium tickets number'
            name='premiumTicketsNumber'
            onChange={this.handleInputChange}
            value={this.state.premiumTicketsNumber}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Regular tickets number'
            name='regularTicketsNumber'
            onChange={this.handleInputChange}
            value={this.state.regularTicketsNumber}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Resignation period'
            name='resignationPeriod'
            onChange={this.handleInputChange}
            value={this.state.resignationPeriod}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Regular tickets number'
            name='status'
            onChange={this.handleInputChange}
            value={this.state.status}
          />
        </div>
        <div className='form-group'>
          <button
            type='button'
            className='btn btn-success'
            onClick={this.tryToCreateEvent}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signUpStarted: state.auth.signUpStarted,
    message: state.auth.message,
  };
};

export default connect(mapStateToProps, { tryToCreateEventAction })(SignUp);
