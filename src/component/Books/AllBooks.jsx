import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Specific from './Specific'

const API_KEY=process.env.REACT_APP_BOOKS_API_KEY;

export default function AllBooks() {
  const [allbooks, setAllBooks] = useState([])
  const [showBook, setShowBook] = useState(false)
  const [bookItem, setBookItem] = useState();
  const [searchFor,setSearchFor]=useState('')

  useEffect(() => {
    const bookAllApiCall = () => {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=java&key=${API_KEY}&maxResults=40`)
        .then(res => setAllBooks(res.data.items))
        .catch(err => console.log(err))
    }
    bookAllApiCall();
  }, [])

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    if(searchFor!==''){
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchFor}&key=${API_KEY}&maxResults=40`)
        .then(res => setAllBooks(res.data.items))
        .catch(err => console.log(err))
    }
    setSearchFor('')
  }

  return (
    <>
      <form className="d-flex" role="search" onSubmit={onSubmitHandler}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
          value={searchFor} onChange={(e)=>setSearchFor(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div className='container'>
        {allbooks.map((item, id) => {
          let thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
          let title = item.volumeInfo.title;
          let authors = item.volumeInfo.authors;
          
          const handleOnClick = () => {
            setShowBook(true);
            setBookItem(item);
          }

          return (
            <>
              <div key={id} className="card card-book " style={{ width: '12rem' }} onClick={() => handleOnClick()}>
                <img key={id} src={thumbnail} className="card-img-top" alt={title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{authors}</p>
                </div>
              </div>
              <Specific showBook={showBook} bookItem={bookItem} onClose={() => setShowBook(false)} />
            </>
          )
        })}
      </div>
    </>
  )
}
