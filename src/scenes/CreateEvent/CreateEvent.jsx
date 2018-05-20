import React from 'react';
import { connect } from 'react-redux';
import { EventActionCreateTry } from '../../actions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.defaultState;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.tryToCreateEvent = this.tryToCreateEvent.bind(this);
  }

  defaultState = {
    form: {
      artist: '',
      date: '2018-07-10T19:30:00',
      eventAddress: '',
      eventType: '',
      name: '',
      organizer: '',
      premiumTicketsNumber: '',
      regularTicketsNumber: '',
      resignationPeriod: '',
      status: '',
    },
  }

  handleInputChange(event) {
    const { value, name } = event.target;

    this.setState((prevState, props) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  }

  tryToCreateEvent() {
    this.props.EventActionCreateTry(this.state.form);
  }

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <h1>Add new event</h1>
        <div>
          { this.props.formInProgress ? 'Please wait, we attempt to create new event' : '' }
        </div>
        <div>
          { this.props.message ? this.props.message : '' }
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Artist"
            name="artist"
            onChange={this.handleInputChange}
            value={this.state.form.artist}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Date"
            name="date"
            onChange={this.handleInputChange}
            value={this.state.form.date}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Event address"
            name="eventAddress"
            onChange={this.handleInputChange}
            value={this.state.form.eventAddress}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Event type"
            name="eventType"
            onChange={this.handleInputChange}
            value={this.state.form.eventType}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.form.name}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Organizer"
            name="organizer"
            onChange={this.handleInputChange}
            value={this.state.form.organizer}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Premium tickets number"
            name="premiumTicketsNumber"
            onChange={this.handleInputChange}
            value={this.state.form.premiumTicketsNumber}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Regular tickets number"
            name="regularTicketsNumber"
            onChange={this.handleInputChange}
            value={this.state.form.regularTicketsNumber}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Resignation period"
            name="resignationPeriod"
            onChange={this.handleInputChange}
            value={this.state.form.resignationPeriod}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Regular tickets number"
            name="status"
            onChange={this.handleInputChange}
            value={this.state.form.status}
          />
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-success"
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
  const { formInProgress, message } = state.event.create;

  return {
    formInProgress, message,
  };
};

export default connect(mapStateToProps, { EventActionCreateTry })(SignUp);
