import React from 'react'
import UserCard from '../layout/UserCard'
import { compose, withState, withHandlers } from 'recompose'

const enhance = compose(
  withState('stars', 'updateStar',
    [{
      id: 1,
      avatar: require('../images/madison.jpg'),
      name: 'Madison Ivy',
      review: 'For Alex: Mmm, not bad but not good either. Huh.',
      message: 'You still got a LONG career ahead of you! xoxo',
      rating: Math.round(Math.random() * 100)
    },
    {
      id: 2,
      avatar: require('../images/elsa.jpg'),
      name: 'Elsa Jean',
      review: 'Alex needs some more training.',
      message: 'Ive heard you are the new hot thing on "BBC" News ;)',
      rating: Math.round(Math.random() * 100)
    },
    {
      id: 3,
      avatar: require('../images/jayden.jpg'),
      name: 'Jayden James',
      review: 'I got cute with him and gave him a second round.',
      message: 'I expect your piercing personality to get to California.',
      rating: Math.round(Math.random() * 100)
    },
    {
      id: 4,
      avatar: require('../images/kendra.jpg'),
      name: 'Kendra Lust',
      review: 'I showed him what mommy knows, he can be a bad boy, ntz ntz.. Overall okaish.',
      message: 'Mommy made new fresh cookies for you *wink* *wink*',
      rating: Math.round(Math.random() * 100)
    },
    {
      id: 5,
      avatar: require('../images/nicole.jpg'),
      name: 'Nicole Aniston',
      review: 'About Alex: Just no.',
      message: 'Heard you are in town, wanna -meat- ?',
      rating: Math.round(Math.random() * 100)
    }]
  ),
  withState('post', 'updatedPost', ''),
  withHandlers({
    handleSubmit: (props) => async e => {
      e.preventDefault()
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props, null, '')
      })
      const body = await response.text()
      props.updatedPost('')
      var newStar = [{
        avatar: require('../images/hammer.png'),
        name: 'Sebi "The Viking"',
        review: 'Alex suffers from inner genital syndrome',
        message: body,
        rating: Math.round(Math.random() * 100)
      }]
      props.updateStar(stars => [...newStar, ...stars])
    },
    onChange: ({ updatedPost }) => e =>
      updatedPost(e.target.value)
  })
)

const Tweets = ({ post, stars, handleSubmit, onChange }) => {
  return (
    <div className='project-list section'>
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Post a new Tweet:</strong>
        </p>
        <input
          type='text'
          pattern='.{3,}'
          required title='Write at least 3 characters!'
          maxLength='140'
          value={post}
          onChange={onChange}
        />
        <button type='submit'>Tweet!</button>
      </form>
      <br />
      {stars.map((star) =>
        (<div>
          <UserCard avatar={star.avatar} name={star.name} review={star.review} message={star.message} rating={star.rating} />
          <br />
        </div>))}
    </div>
  )
}

export default enhance(Tweets)
