import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const AuthorsAll = () => {

    const [listauthors, setListauthors] = useState([]);

    //Visualizar todos los registros
    useEffect(() => {
        axios.get('http://localhost:8080/api/all')
            .then((result) => {
                console.log("AuthorsList", result.data.result)
                setListauthors(result.data.result)
            })
            .catch((error) => { 
                console.log("Algo salió mal- AuthorsList -", error) 
            })
    }, [])

     //Eliminar un solo registros
    const deleteAuthors = (id) => {
        axios.delete(`http://localhost:8080/api/delete/${id}`)
            .then((result) => {
                console.log("AuthorsDelete", result.data.result)

                axios.get('http://localhost:8080/api/all')
                    .then((result) => {
                        console.log("AuthorsList", result.data.result)
                        setListauthors(result.data.result)
                    })
                    .catch((error) => {
                        console.log("Algo salió mal- AuthorsList -", error)
                    })

            })
            .catch((error) => { console.log("Algo salió mal - AuthorsDelete", error) })
    }

    return (
        <>
            <div className="container-md">
                <div>
                    <h2>Favorite authors</h2>
                    <Link to='/new'> Add an author</Link>
                    <p>We have quotes by:</p>
                </div>
                <div className="container-md">
                    <table className='table' >
                        <thead>
                            <tr>
                                <th scope="col">Author</th>
                                <th scope="col">Actions avallable</th>
                            </tr>
                        </thead>
                        <tbody>

                            {listauthors.map((authors) => (
                                <tr key={authors._id}>
                                    <td>{authors.name}</td>
                                    <td>
                                        <div className="">
                                            <Link to={`/edit/${authors._id}`} className="btn btn-success">Edit</Link> 
                                            <button type="button" className="btn btn-danger" onClick={() => deleteAuthors(authors._id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AuthorsAll
