import React, { Component } from 'react'
import './App.css'
import moment from 'moment'
import { connect } from 'react-redux'
import { setFormData, resetFormData } from './redux'

const closeTime = moment('2018-04-06 12:00')

class App extends Component {
  componentDidMount() {
    const updateCountdown = () => {
      const millis = closeTime.diff(moment())
      const duration = moment.duration(millis)
      const hours = Math.floor(duration.asHours())
      const minutes = duration.minutes()
      const seconds = duration.seconds()
      this.props.onFormDataChange(
        'countdown',
        `${hours} hours ${minutes} minutes ${seconds} seconds remaining`
      )
    }
    updateCountdown()
    this.props.onFormReset()
    // this.intervalId = setInterval(updateCountdown, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  render() {
    const {
      name,
      email,
      ticketType,
      food,
      agreeTerms,
      countdown
    } = this.props.form
    const { onFormDataChange, onFormReset, loading, initialized } = this.props
    let total = 0
    if (ticketType === 'premium') {
      total += 300
    } else if (ticketType === 'regular') {
      total += 100
    }
    if (food) {
      total += 50
    }
    if (!initialized) return <div>Initializing...</div>
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>{countdown}</p>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                value={name}
                onChange={e => onFormDataChange('name', e.target.value)}
                className="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                value={email}
                onChange={e => onFormDataChange('email', e.target.value)}
                className="input is-danger"
                type="email"
                placeholder="Email input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle" />
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Ticket Type</label>
            <div className="control">
              <div className="select">
                <select
                  value={ticketType}
                  onChange={e => onFormDataChange('ticketType', e.target.value)}
                >
                  <option>Select ticket type</option>
                  <option value="regular">Regular - 100 THB</option>
                  <option value="premium">Premium - 300 THB</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="label">Add food?</label>
              <label className="radio">
                <input
                  onChange={() => onFormDataChange('food', true)}
                  checked={food}
                  type="radio"
                  name="question"
                />{' '}
                Yes (+50 THB)
              </label>
              <label className="radio">
                <input
                  onChange={() => onFormDataChange('food', false)}
                  checked={!food}
                  type="radio"
                  name="question"
                />{' '}
                No
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={e =>
                    onFormDataChange('agreeTerms', e.target.checked)
                  }
                />{' '}
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <p>Total price: {total} THB</p>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button
                disabled={loading}
                onClick={onFormReset}
                className="button is-text"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  form: state.formData,
  loading: state.loading,
  initialized: state.initialized
})

// const mapDispatchToProps = dispatch => ({
//   onFormDataChange: (key, value) => dispatch(setFormData(key, value))
// })

const mapDispatchToProps = {
  onFormDataChange: setFormData,
  onFormReset: resetFormData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
