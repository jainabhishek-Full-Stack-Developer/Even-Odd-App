import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNo = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomNo = this.getRandomNo()
    this.setState(prevSate => ({count: prevSate.count + randomNo}))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bgContainer">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="para1">Count is {text}</p>
          <div>
            <button
              type="button"
              className="incrementBtn"
              onClick={this.onIncrease}
            >
              Increment
            </button>
          </div>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
