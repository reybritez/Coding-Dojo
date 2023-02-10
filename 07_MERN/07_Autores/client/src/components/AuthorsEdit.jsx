import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const AuthorsEdit = () => {

    const [name, setName] = useState('');
    const [danger, setDanger] = useState({})

    //Obtener Id
    const { id } = useParams()

    const navigate = useNavigate()

    //Mostrar Datos del Producto
    useEffect(() => {
        axios.get(`http://localhost:8080/api/view/${id}`)
            .then((result) => {
                console.log("AuthorsView", result.data.result)
                setName(result.data.result.name)
            })
            .catch((error) => {
                console.log("Algo salió mal - AuthorsView", error)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8080/api/edit/${id}`, {
            name
        })
            .then((result) => {
                console.log("AuthorsEdit", result)
                navigate(`/`)
            })
            .catch((error) => {
                console.log("Algo salió mal - AuthorsEdit", error)
                setDanger(error.response.data.error.errors)
            })
    }

    return (
        <div className="container-md">

            <div className="container-md position-relative">
                <h2>Favorite authors</h2>
                <Link to='/'>Home</Link>
                <p>Edit this author:</p>
            </div>

            <form className="row g-3" onSubmit={submitHandler}>
                <div className="col-md-3 position-relative">
                    <label htmlFor="validationTooltip05" className='form-label'>Name</label>
                    <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
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

export default AuthorsEdit
