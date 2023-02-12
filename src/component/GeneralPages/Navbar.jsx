import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../AppContext/AppContext';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

export default function Navbar() {
    const { loginStatus, setLoginStatus, currentUser } = useAppContext();

    const handleOnClick = () => {
        signOut(auth);
        setLoginStatus(false);
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-4" to="/">LEARNING PLATFORM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link " to="/books">Books</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to="/groups">Groups</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        {loginStatus ? <h5 className='mt-2'>
                            Wellcome back! {currentUser.displayName}
                        </h5> : null}

                        <div className="buttons ">
                            <Link to="/my_library" className="btn btn-outline-dark ms-4">
                                <FontAwesomeIcon icon={faBook} /> My Library</Link>
                            {loginStatus ?
                                <button onClick={() => handleOnClick()} className='btn btn-outline-dark ms-1' >
                                    <Link to='/' style={{color:'black',textDecoration: 'none'}}>
                                    <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                                    </Link>
                                </button>
                                :
                                <Link to="/login" className="btn btn-outline-dark ms-1">
                                    <FontAwesomeIcon icon={faRightToBracket} /> Login</Link>
                            }
                            <Link to="register" className="btn btn-outline-dark ms-1">
                                <FontAwesomeIcon icon={faUserPlus} /> Register</Link>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
