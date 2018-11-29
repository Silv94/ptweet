import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CustomButton from './CustomHeartButton/CustomButton'

const styles = {
  card: {
    minWidth: 275,
    marginBottom: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  row: {
    display: 'flex',
    justifyContent: 'left'
  },
  avatar: {
    margin: 10,
    float: 'left'
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}

const UserCard = ({ avatar, name, review, message, rating, classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar className={classes.avatar} src={avatar}/>
        <Typography variant='h5' component='h5'>
          {name}
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          {review}
          <br />
            Seen by: {rating} fans.
        </Typography>

        <Typography component='p' cols="40" rows="5">
          {message}
        </Typography>

      </CardContent>
      <CardActions>
        <CustomButton rating={rating} />
        {/* 
        --- Experimental Retweeter function - not implemented for demo purposes ---
        <Retweeter data={data}/> */}
        {/* <button onClick={onClick}>Retweet</button> 
        -------------------------------------------------------------
      */}
      </CardActions>
    </Card>
  )
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserCard)
