import React from 'react'
import heart from '../../images/heart.png'
import {
  compose,
  setPropTypes,
  defaultProps,
  withHandlers,
  withState
} from 'recompose'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const enhance = compose(
  setPropTypes({
    onClick: PropTypes.func,
    type: PropTypes.button,
    className: PropTypes.func,
    count: PropTypes.number
  }),
  defaultProps({
    type: 'button'
  }),
  withState('count', 'setCount', 0),
  withHandlers({
    toggleLike: props => event => {
      event.preventDefault()
      props.setCount(x => !x)
    }
  })
)

const CustomButton = ({ toggleLike, count, rating }) => {
  return (
    <div>
      <button onClick={toggleLike}>
        <img src={heart} height='15' width='15' />
      </button>
      <Typography color='textSecondary'>
        Love'o'Meter: { count ? rating + 1 : rating }
      </Typography>
    </div>
  )
}

export default enhance(CustomButton)
