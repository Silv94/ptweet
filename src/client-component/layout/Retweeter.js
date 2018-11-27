import React, { Component } from 'react'

class Retweeter extends Component {
	constructor (props) {
		super (props)
		this.state = {
			stars: [{...this.props.data}]
		}
	}

	handleClick = () => {

		var currentStar = 
		[{
			name: this.props.data[1].name,
			review: this.props.data[1].review,
			message: this.props.data[1].message,
			rating: this.props.data[1].rating,
		}]

		this.setState({
      stars: [{...currentStar, ...this.props.data}]
		})
		console.log(...currentStar)
	}

  render () {
    return (
      <div>
        <button onClick={this.handleClick}> Retweet! </button>
      </div>
    )
  }
}

export default Retweeter
