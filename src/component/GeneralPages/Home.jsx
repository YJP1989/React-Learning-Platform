import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardBook from '../Books/CardBook'
import { groupRooms } from '../GroupChat/Groups';
import { Link } from 'react-router-dom';
import { useAppContext } from '../AppContext/AppContext';

const API_KEY=process.env.REACT_APP_BOOKS_API_KEY;

export default function Home() {
    const [bookData, setBookData] = useState([]);
    const sampleGroups = groupRooms.slice(0, 5);
    const { loginStatus } = useAppContext();

    useEffect(() => {
        const bookApiCall = () => {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=react&key=${API_KEY}&maxResults=5`)
                .then(res => setBookData(res.data.items))
                .catch(err => console.log(err))
        }
        bookApiCall();
    }, [])

    return (
        <>
            <div className='mx-auto container' style={{ width: '140px', marginTop: '30px' }}>
                <div className='col-md-auto mb-0'>
                    <h1 className='display-6 fw-bolder text-left'> Books</h1>
                </div>
            </div>

            <div className=' cardbox' >
                <CardBook bookData={bookData} />
            </div>

            <div className='mx-auto container' style={{ width: '170px' }}>
                <div className='col-12 mb-1'>
                    <h1 className='display-6 fw-bolder text-left'>Groups</h1>
                </div>
            </div>

            <div className='groupbox' style={{ display: 'flex' }}>
                {sampleGroups.map((room) => {
                    return (
                        <div key={room.id} className="card ms-4" style={{ width: "12rem" }}>
                            <img className="card-img-top" style={{ width: "12rem" }} src={room.logoUrl} />
                            <div className="card-body">
                                <h5 className="card-title">{room.title}</h5>
                                <p className="card-text">Join us now!</p>
                                {loginStatus ?
                                    <Link to={`/chat/${room.id}`}><button className="btn btn-primary"> Discuss now </button></Link> 
                                    :
                                    <Link to='/login'><button className="btn btn-primary">Login to discuss</button></Link>
                                }
                            </div>
                        </div>
                    )
                })}

                <Link to='/groups'>
                    <div className="card ms-4" style={{ width: "12rem", cursor: 'pointer' }}>
                        <img className="card-img-top" style={{ width: "12rem" }} src='https://cerdaskan.id/wp-content/uploads/2018/09/shutterstock_Transcribe-com.jpg' />
                        <div className="card-body">
                            <h5 className="card-title py-5">More groups --</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
