import React, { Component } from 'react'
import UserCard from '../layout/UserCard'


class Tweets extends Component {
  constructor (props) {
    super(props)
    // Mock-up data for the previous users as a fake "DB"
    this.state = {
      stars: [{
        id: 1,
        avatar: require('../images/madison.jpg'),
        name: 'Madison Ivy',
        review: 'For Alex: Mmm, not bad but not good either. Huh.',
        message: 'You still got a LONG career ahead of you! xoxo',
        rating: Math.round(Math.random()*100)
      },
      {
        id: 2,
        avatar: require('../images/elsa.jpg'),
        name: 'Elsa Jean',
        review: 'Alex needs some more training.',
        message: 'Ive heard you are the new hot thing on "BBC" News ;)',
        rating: Math.round(Math.random()*100)
      },
      {
        id: 3,
        avatar: require('../images/jayden.jpg'),
        name: 'Jayden James',
        review: 'I got cute with him and gave him a second round.',
        message: 'I expect your piercing personality to get to California.',
        rating: Math.round(Math.random()*100)
      },
      {
        id: 4,
        avatar: require('../images/kendra.jpg'),
        name: 'Kendra Lust',
        review: 'I showed him what mommy knows, he can be a bad boy, ntz ntz.. Overall okaish.',
        message: 'Mommy made new fresh cookies for you *wink* *wink*',
        rating: Math.round(Math.random()*100)
      },
      {
        id: 5,
        avatar: require('../images/nicole.jpg'),
        name: 'Nicole Aniston',
        review: 'About Alex: Just no.',
        message: 'Heard you are in town, wanna -meat- ?',
        rating: Math.round(Math.random()*100)
      }
      ],
      //End of previous posts mock-up DB
      response: '',
      post: '',
      responseToPost: '',
      active : false,
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body })
    this.setState({ active: true })
    this.setState({ post: '' })
    var newStar = 
      [{
        avatar: require('../images/hammer.png'),
        name: 'Sebi "The Viking"',
        review: 'Alex suffers from inner genital syndrome',
        message: body,
        rating: Math.round(Math.random()*100)
      }]
    
    this.setState({
      stars: [...newStar, ...this.state.stars]
    })
  };

  render () {
    return (
      <div className='project-list section'>

        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post a new Tweet:</strong>
          </p>
          <input
            type="text"
            pattern=".{3,}"
            required title='Write at least 3 characters!'
            maxLength="140"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
            />
          <button type="submit">Tweet!</button>
        </form>

        <br />
        {this.state.stars.map((star) =>
          (<div>
            <UserCard  avatar={star.avatar} name={star.name} review={star.review} message={star.message} rating={star.rating} />
            <br />
          </div>))}
      </div>
    )
    }
}
export default Tweets
