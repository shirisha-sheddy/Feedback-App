// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    changeFeedback: true,
  }

  showResults = () => {
    this.setState({
      changeFeedback: false,
    })
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {changeFeedback} = this.state

    return (
      <div className="bg-container">
        {changeFeedback ? (
          <div className="card-container">
            <h1 className="head-card">
              How Satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(each => (
                <li key={each.id} className="list-card">
                  <button
                    className="emoji-btn"
                    type="button"
                    onClick={this.showResults}
                  >
                    <img
                      src={each.imageUrl}
                      alt={each.name}
                      className="image-card"
                    />
                    <br />
                    <span className="name-card">{each.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="image-card" />
            <h1 className="head-card">Thank You</h1>
            <p className="text-card">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
