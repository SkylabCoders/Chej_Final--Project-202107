import React from 'react';
import { Link } from 'react-router-dom';

const NotFound:React.FC =()=>{
    return(
        <>
            <h3>404 - Page not found</h3>
            <Link to="/">Back to safety</Link>
      </>
    )
}
export default NotFound;