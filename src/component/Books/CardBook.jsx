import React, { useState } from 'react'
import Specific from './Specific';
import { Link } from 'react-router-dom';

export default function CardBook(props) {
    const [showBook, setShowBook] = useState(false)
    const [bookItem, setBookItem] = useState();

    return (
        <>
            <div className='container'>
                {props.bookData.map((item, index) => {
                    let thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
                    let title = item.volumeInfo.title;
                    let authors = item.volumeInfo.authors;
                    const handleOnClick = () => {
                        setShowBook(true);
                        setBookItem(item);
                    }

                    return (
                        <>
                            <div key={index} className="card card-book" style={{ width: '12rem' }} onClick={() => handleOnClick()}>
                                <img key={index} src={thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{authors}</p>
                                </div>
                            </div>
                            <Specific showBook={showBook} bookItem={bookItem} onClose={() => setShowBook(false)} />
                        </>
                    )
                })}
                {showBook ? null : <Link to='/books' style={{ textDecoration: 'none' }}><div className="card card-book" style={{ width: '12rem' }}>
                    <Link to='/books'></Link>
                    <img src="https://thumbs.dreamstime.com/b/read-more-books-stack-hardback-phrase-added-white-text-spines-as-metaphor-education-74408071.jpg" className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title" >Hungry for More Books?</h5><br /><br />
                    </div>
                </div></Link>}
            </div>
        </>
    )
}
