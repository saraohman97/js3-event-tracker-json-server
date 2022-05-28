import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Event = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`} className='event'>
      <p>{event.title}</p>
      <p>{moment(event.timestamp).fromNow()}</p>
    </Link>
  )
}

export default Event