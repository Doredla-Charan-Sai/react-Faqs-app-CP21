// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {answerVisible: false}

  onSelectItem = () => {
    this.setState(prevState => ({answerVisible: !prevState.answerVisible}))
  }

  render() {
    const {answerVisible} = this.state
    console.log(answerVisible)
    const {details} = this.props
    return (
      <li className="list-item-cont">
        <div className="ques-cont">
          <h1 className="ques">{details.questionText}</h1>
          <button className="btn" type="button" onClick={this.onSelectItem}>
            {answerVisible === false && (
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
            {answerVisible === true && (
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            )}
          </button>
        </div>
        {answerVisible === true && (
          <>
            <hr className="line" />
            <p className="ans">{details.answerText}</p>
          </>
        )}
      </li>
    )
  }
}
export default FaqItem
