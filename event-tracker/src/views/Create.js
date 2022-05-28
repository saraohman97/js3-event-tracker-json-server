import { useState, useEffect } from 'react'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'


const Create = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { loading } = useSelector(state => state.events)

  const [addedEvent, setAddedEvent] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    timestamp: '',
    desc: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    // const res = await axios.post('http://localhost:3000/events', formData)
    // console.log(res);

    // Varidation around here somewhere /sara
    dispatch(addEvent(formData))
    setAddedEvent(true)
  }

  useEffect(() => {
    if(!loading && addedEvent) {
      navigate('/')
    }
  }, [loading, addedEvent, navigate])

  return (
    <div className='create'>
      <h1>Create new event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' onChange={onChange} value={formData.title} placeholder='Title' className='form-control' />
        <input type="datetime-local" name='timestamp' onChange={onChange} value={formData.timestamp} className='form-control' />
        <textarea name='desc' className='form-control' onChange={onChange} value={formData.desc} placeholder='Write a description' />
        <button className='btn'>Add Event</button> 
        {loading && <p>Loading...</p>}
      </form>
    </div>
  )
}

export default Create