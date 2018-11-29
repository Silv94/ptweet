import React from 'react'
import Tweets from './Tweets'

const styles = {
  container: {
    width: 80,
  }
}

const Dashboard = () => {
  return (
    <div className='dashboard container'>
      <div className='row'>
        <div className='container' styles={styles.container}>
          <Tweets />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
