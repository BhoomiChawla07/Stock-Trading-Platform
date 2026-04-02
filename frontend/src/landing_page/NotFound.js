import React from 'react'

function NotFound() {
    return ( 
        <div className='container text-center my-5'>
            <h1 className='display-1 fw-bold'>404</h1>
            <p className='fs-3'> <span className='text-danger'>Opps!</span> Page not found.</p>
            <p className='lead'>
                The page you’re looking for doesn’t exist.
            </p>
            <a href="/" className="btn btn-primary">Go Home</a>
        </div>
     );
}

export default NotFound;