import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../AppContext/AppContext'
import { Link } from 'react-router-dom';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Specific(props) {
    const { libraryItem, addToLibrary, removeFromLibrary, loginStatus } = useAppContext();

    const libraryItemChecker = (id) => {
        const itemBoolean = libraryItem.some((book) => book.id === id);
        return itemBoolean;
    }
    if (!props.showBook) {
        return null;
    }

    let thumbnail = props.bookItem.volumeInfo.imageLinks.smallThumbnail;
    let book = props.bookItem;
    return (
        <>
            <div className='overlay'>
                <div className="overlay-inner">
                    <botton className="close" onClick={props.onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </botton>
                    <div className="inner-box">

                        <img src={thumbnail} alt="" />
                        {loginStatus ?
                            <div className="info">
                                <h1>{props.bookItem.volumeInfo.title}</h1><br />
                                <h3>{props.bookItem.volumeInfo.authors}</h3><br />
                                <h4>{props.bookItem.volumeInfo.publishedDate}</h4><br />
                                <div className='col'>
                                    <a href={props.bookItem.volumeInfo.previewLink} target='_blank' rel='noreferrer'><button className='btn btn-outline-success' style={{ width: '7rem' }}>Read now</button></a>
                                    {libraryItemChecker(book.id) ?
                                        <button className='btn btn-outline-danger ms-4 remover-library' style={{ width: '12rem' }} onClick={() => removeFromLibrary(book.id)}>Remove From Library</button>
                                        : <button className='btn btn-outline-success ms-4 add-library' style={{ width: '9rem' }} onClick={() => addToLibrary(book)}>Add to Library</button>
                                    }
                                </div>
                            </div>
                            :
                            <h1 style={{ marginTop: '90px' }}>Login to see details &nbsp;
                                <Link style={{ textDecoration: 'none' }} to="/login">
                                    <FontAwesomeIcon icon={faRightToBracket} /> Login
                                </Link>
                            </h1>
                        }
                    </div>
                    <h4 className='description'>{props.bookItem.volumeInfo.description}</h4>
                </div>

            </div>
        </>
    )
}
