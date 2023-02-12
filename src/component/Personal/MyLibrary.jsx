import React from 'react'
import { useAppContext } from '../AppContext/AppContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


export default function MyLibrary() {
  const { removeFromLibrary, loginStatus, currentUser, getBooksData } = useAppContext();

  return (
    <>
      {loginStatus ? <div>
        <h3 style={{ marginLeft: '10px', marginTop: '10px' }}>{currentUser.displayName}'s library</h3>
        {getBooksData.length ?
          (getBooksData.map((item) => {
            let thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
            let title = item.volumeInfo.title;
            let authors = item.volumeInfo.authors;
            let publishedDate = item.volumeInfo.publishedDate;
            let bookLink = item.volumeInfo.previewLink;

            return (
              <div className="library-item" style={{ maxwidth: '200px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={thumbnail} className="img-fluid rounded-start" alt="..." style={{ width: '150px', height: '200px', margin: '0px 20px 5px 30%' }} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5><br />
                      <p className="card-text">{authors}</p>
                      <p className="card-text">{publishedDate}</p>
                      <a href={bookLink} target='_blank' rel='noreferrer'>
                        <button type="button" className="btn btn-outline-success" style={{ fontWeight: 'bold' }}>Read now</button>
                      </a>
                      <button type="button" className="btn btn-outline-danger ms-4" style={{ fontWeight: 'bold' }} onClick={() => removeFromLibrary(item.id)}>Remove From Library</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }))
          :
          <h1 style={{ textAlign: 'center', marginTop: '15%' }}>No books in your library yet!</h1>}
      </div>
        :
        <h1 style={{ marginTop: '90px', marginLeft: '35%' }}>Login to see your library &nbsp;
          <Link style={{ textDecoration: 'none' }} to="/login">
            <FontAwesomeIcon icon={faRightToBracket} /> Login
          </Link>
        </h1>}
    </>
  )
}
