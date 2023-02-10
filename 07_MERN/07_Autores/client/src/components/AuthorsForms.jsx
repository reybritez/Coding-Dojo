import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const AuthorsForms = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('');

  const [danger, setDanger] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/new', {
      name
    })
      .then((result) => {
        console.log("AuthorsNew", result)
        navigate('/')
      })
      .catch((error) => {
        console.log("Algo salió mal - AuthorsNew", error)
        setDanger(error.response.data.error.errors)
      })
  }

  return (

    <div className="container-md" >

      <div className="container-md position-relative">
        <h2>Favorite authors</h2>
        <Link to='/'>Home</Link>
        <p>Add a new author:</p>
      </div>

      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-3 position-relative">
          <label htmlFor="validationTooltip05" className='form-label'>Name</label>
          <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
          {danger.name ? <span className='text-danger'>{danger.name.message}</span> : null} <br />

          <div className="d-grid gap-2 d-md-flex just">
            <Link to='/' className="btn btn-primary">Cancel</Link>
            <button type="submit" className="btn btn-success">Submit</button>
          </div>

        </div>

      </form>
    </div>
  )
}

export default AuthorsForms
