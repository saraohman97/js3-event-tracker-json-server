import Navbar from './components/Navbar';
import './App.css';
import Views from './views/Views';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getEvents } from './store/actions/eventsAction'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Views />
      </div>
    </div>
  );
}

export default App;
