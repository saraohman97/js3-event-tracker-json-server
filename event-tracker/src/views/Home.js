// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { getEvents } from '../store/actions/eventsAction'
import Event from '../components/Event'

const Home = () => {

  // const dispatch = useDispatch()
  const { data: events, loading } = useSelector(state => state.events)

  // useEffect(() => {
  //   dispatch(getEvents())
  // }, [])

  return (
    <div>
      { loading && <p>Loading...</p> }
      { events.map(event => <Event key={event.id} event={event} />) }
    </div>
  )
}

export default Home